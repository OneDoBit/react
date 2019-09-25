<!DOCTYPE html>
<html>
<head>
    
    <title>Assignment 1</title>
    
</head>

<body>
    <script src=""></script>
    
    <?php
    
        $link = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=ef88b27295d19b57c2affd1fe26b3aba";

        $data = json_decode($link,true);

        print_r($data)
        
    ?>
    
</body>
</html>


