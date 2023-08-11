<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            max-width: 400px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #4caf50;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 10px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="submit"] {
            padding: 10px;
            background-color: #4caf50;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>User Registration</h1>
        <form action="index.php" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" pattern="^[a-zA-Z][a-zA-Z0-9_\[\]\-]*$" required
                   title="Username must start with a letter and can only contain letters, numbers, [], -, and _ (no spaces).">

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required
                   title="Please enter a valid email address (no spaces).">

            <label for="password">Password:</label>
            <input type="password" name="password" id="password" pattern="^[^\s]+$" required
                   title="Password must not contain spaces.">

            <label for="password_verify">Confirm Password:</label>
            <input type="password" name="password_verify" id="password_verify" pattern="^[^\s]+$" required
                   title="Password must not contain spaces.">

            <!-- reCAPTCHA widget -->
            <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>

            <input type="submit" value="Register">
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $ldap_server = "ldap.ewnix.net";
            $ldap_base_dn = "dc=ewnix,dc=net";
            $ldap_group_dn = "cn=users,ou=groups,dc=ewnix,dc=net";
            $ldap_admin_dn = "cn=admin,dc=ewnix,dc=net";
            $ldap_admin_password = "your_configurable_password";

            $username = $_POST["username"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $password_verify = $_POST["password_verify"];
            $recaptcha_response = $_POST["g-recaptcha-response"];

            // Verify reCAPTCHA
            $recaptcha_secret = "YOUR_RECAPTCHA_SECRET_KEY"; // Replace with your actual secret key

            $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
            $recaptcha_data = [
                'secret' => $recaptcha_secret,
                'response' => $recaptcha_response
            ];

            $recaptcha_options = [
                'http' => [
                    'method' => 'POST',
                    'content' => http_build_query($recaptcha_data)
                ]
            ];

            $recaptcha_context = stream_context_create($recaptcha_options);
            $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
            $recaptcha_result = json_decode($recaptcha_result);

            if (!$recaptcha_result->success) {
                die("reCAPTCHA verification failed.");
            }

            // Verify password match
            if ($password !== $password_verify) {
                die("Passwords do not match.");
            }

            // Validate username using regular expression
            if (!preg_match('/^[a-zA-Z][a-zA-Z0-9_\[\]\-]*$/', $username)) {
                die("Invalid username. Username must start with a letter and can only contain letters, numbers, [], -, and _ (no spaces).");
            }

            // Connect to the LDAP server
            $ldap_connection = ldap_connect($ldap_server);
            ldap_set_option($ldap_connection, LDAP_OPT_PROTOCOL_VERSION, 3);
            ldap_set_option($ldap_connection, LDAP_OPT_DEBUG_LEVEL, 7);

            // Attempt anonymous bind
            $ldap_bind = ldap_bind($ldap_connection);

            // If anonymous bind succeeds, try binding with admin credentials
            if ($ldap_bind) {
                $ldap_bind = ldap_bind($ldap_connection, $ldap_admin_dn, $ldap_admin_password);
            }

            if (!$ldap_bind) {
                die("LDAP bind failed: " . ldap_error($ldap_connection));
            }

            // Check if the username already exists
            $search_filter = "(cn=$username)";
            $search_result = ldap_search($ldap_connection, "ou=people,$ldap_base_dn", $search_filter);
            $entries = ldap_get_entries($ldap_connection, $search_result);

            if ($entries["count"] > 0) {
                die("Username already exists!");
            }

            // Prepare the LDAP entry
            $entry = [
                "objectClass" => ["top", "inetOrgPerson"],
                "cn" => $username,
                "sn" => $username,
                "uid" => $username,
                "mail" => $email,
                "userPassword" => "{CRYPT}" . crypt($password, '$6$' . base64_encode(openssl_random_pseudo_bytes(4))),
            ];

            // Add the user to the LDAP server
            $ldap_add = ldap_add($ldap_connection, "cn=$username,ou=people,$ldap_base_dn", $entry);

            if ($ldap_add) {
                // Add the user as a member of the group
                $ldap_group_entry = [
                    "member" => "cn=$username,ou=people,$ldap_base_dn",
                ];
                ldap_mod_add($ldap_connection, $ldap_group_dn, $ldap_group_entry);

                echo "User registration successful!";
            } else {
                echo "User registration failed: " . ldap_error($ldap_connection);
            }

            // Close the LDAP connection
            ldap_close($ldap_connection);
        }
        ?>
    </div>
</body>
</html>

