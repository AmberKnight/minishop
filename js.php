<?php
session_start();
include_once('classes/info.php');
$info = new Info();
if(isset($_GET['add_to_cart']))
{
    $info->addGoodToCart($_GET['add_to_cart']);
}
if(isset($_GET['remove_from_cart']))
{
    $info->removeFromCart($_GET['remove_from_cart']);
}
?>