<?php
/**
* Requires the "PHP Email Form" library
* The "PHP Email Form" library is available only in the pro version of the template
*/

// Replace contact@example.com with your real receiving email address
$receiving_email_address = 'agencia.alter.ias@gmail.com';

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
    $contact->from_name = $_POST['name'];
    $contact->from_email = $_POST['email'];
    $contact->subject = htmlspecialchars($_POST['subject']);
    
    // Add message fields
    $contact->add_message( $_POST['name'], 'From');
    $contact->add_message( $_POST['email'], 'Email');
    $contact->add_message( $_POST['message'], 'Message', 10);
} else {
    echo 'Error: Missing required form data.';
}

// Handle errors
try {
    if($contact->validate()) { // Added validation check before sending email
        // Your code to handle the received message
        echo 'Success: Message received successfully!';
    } else {
        throw new Exception('Failed to receive message. Please correct the following errors:');
        
        // Display error messages from PHP Email Form
        foreach ($contact->errors as $error) {
            echo '<p>' . htmlspecialchars($error) . '</p>';
        }
    }
} catch (\Exception $e) {
    error_log($e);
    echo 'Error: ' . $e->getMessage();
}
?>