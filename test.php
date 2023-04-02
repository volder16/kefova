<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
$folder = 'path/to/folder'; // replace with the path to your folder
$files = glob($folder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

foreach ($files as $file) {
    echo '<img src="' . $file . '" alt="">' . PHP_EOL;
}
?>
</body>
</html>
