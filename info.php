<?php
$nomEtablissement = "Lycée Exemple";
$module = "Programmation Web";
$annee = 2025;

$entier1 = 10;
$entier2 = 5;
$addition = $entier1 + $entier2;
$multiplication = $entier1 * $entier2;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Info PHP</title>
</head>
<body>
    <h1><?php echo $nomEtablissement; ?></h1>
    <p>Module : <?php echo $module; ?></p>
    <p>Année : <?php echo $annee; ?></p>

    <h2>Variables et calculs</h2>
    <p>Entier 1 : <?php echo $entier1; ?></p>
    <p>Entier 2 : <?php echo $entier2; ?></p>
    <p>Addition : <?php echo $addition; ?></p>
    <p>Multiplication : <?php echo $multiplication; ?></p>
</body>
</html>
