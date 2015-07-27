<?php session_start();?>

    
<head>
<title>Minishop</title>
<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

</head>
    
<body>
    <?php
    include_once('classes/info.php');
	
    $info = new Info();
    $info->Show();
    ?>
    <script src="scripts/script.js"></script>
</body>
</html>
