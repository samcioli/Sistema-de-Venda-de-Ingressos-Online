<?php
$host = 'localhost';
$dbname = 'sistema_ingressos';
$username = 'seu_usuario';
$password = 'sua_senha';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erro de conexão: ' . $e->getMessage();
}
?>