<?php
// Simple fichier PHP pour stocker les scores côté serveur

// Emplacement du fichier de scores
$scoreFile = 'scores.txt';

// Vérifier si le fichier de scores existe, sinon le créer avec un score initial de 0
if (!file_exists($scoreFile)) {
    file_put_contents($scoreFile, '0');
}

// Lire le score actuel depuis le fichier
$score = file_get_contents($scoreFile);

// Vérifier si la demande est pour incrémenter le score
if (isset($_GET['increment'])) {
    $score++;
    file_put_contents($scoreFile, $score);
}

// Retourner le score actuel au format JSON
echo json_encode(['score' => $score]);
?>
