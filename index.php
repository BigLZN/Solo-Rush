<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et valider les données du formulaire
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $objet = htmlspecialchars($_POST['objet']); // Échapper les caractères spéciaux
    $message = htmlspecialchars($_POST['description']); // Échapper les caractères spéciaux

    // Vérifier si l'e-mail est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<p>Adresse e-mail invalide. Veuillez fournir une adresse e-mail valide.</p>';
        exit; // Arrêter le script
    }

    // Adresse e-mail de destination
    $to = 'lznpro51@gmail.com';

    // Sujet de l'e-mail
    $subject = 'Nouveau message depuis votre site web';

    // Corps de l'e-mail
    $body = "Adresse e-mail: $email\n\nObjet: $objet\n\nMessage:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo '<p>Votre message a été envoyé avec succès. Merci de nous avoir contactés !</p>';
    } else {
        echo '<p>Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.</p>';
    }
}
?>