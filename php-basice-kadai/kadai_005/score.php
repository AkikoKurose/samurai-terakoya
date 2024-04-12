<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP基礎 課題 テストの平均点</title>
</head>
<body>
<p>
  <?php
  $score1 = 80;
  $score2 = 60;
  $score3 = 55;
  $score4 = 40;
  $score5 = 100;
  $score6 = 25;
  $score7 = 80;
  $score8 = 95;
  $score9 = 30;
  $score10 = 60;
  $total = $score1 + $score2 + $score3 + $score4 + $score5 + $score6 + $score7 + $score8 + $score9 + $score10;
  $ave = $total / 10;
  echo $ave;
  ?>
</p>  
</body>
</html>