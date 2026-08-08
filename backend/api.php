<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$response = [
    'message' => 'Hello from PHP backend',
    'status' => 'ok'
];

echo json_encode($response);
