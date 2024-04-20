<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>PHP基礎</title>
</head>
<body>
<p>
  <?php
  // クラスを定義
  class Food{
    // プロパティを定義
    private $name;
    private $price;

    // コンストラクタを定義
    public function __construct(string $name, int $price){
      $this->name = $name;
      $this->price = $price;
    }
    // メソッド作成
    public function show_price(){
      echo $this->price;
    }
  }
  // インスタンス化
  $food = new Food('potato', 250);
  //インスタンス$foodの各プロパティの値を出力 
  print_r($food);
  echo '<br>';

  // クラスを定義
  class Animal{
    // プロパティを定義
    private $name;
    private $height;
    private $weight;
    // メソッド作成
    public function show_height() {
      echo $this->height;
    }
    // コンストラクタを定義
    public function __construct(string $name, int $height, int $weight){
      $this->name = $name;
      $this->height = $height;
      $this->weight = $weight;
    }
  }
  // インスタンス化
  $animal = new Animal('dog', 60, 5000);
  //インスタンス$animalの各プロパティの値を出力 
  print_r($animal);
  
  echo '<br>';  
  $food->show_price();
  echo '<br>';  
  $animal->show_height();
  ?>
</p>

</body>
</html>