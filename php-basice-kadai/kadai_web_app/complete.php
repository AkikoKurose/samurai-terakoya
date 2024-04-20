<?php
session_start();
// セッションに保存された名前を、三項演算子を使って取得。値の有無はisset関数で確認。
$name = isset($_SESSION['name']) ? $_SESSION['name'] : '名無し';
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>PHP基礎編</title>
</head>
<body>
  <h2>登録が完了しました</h2>
  <p>社員情報がデータベースに保存されました</p>
  <button id="back-btn" onclick="location.href='form.php'">戻る</button>

</body>
</html>