<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Gossip Gallery</title>
    <link rel="stylesheet" href="css/main.css">
    <!--    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>-->
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/main.js"></script>
</head>

<body>

    <header>
        <nav>
            <ul>
                <li><a href="#">blog</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">guide</a></li>
            </ul>
        </nav>
        <div class="shop_logo">
            <img src="img/shop_logo.png" alt="Shop Logo">
        </div>
    </header>
    <hr class="dots">

    <section class="honeycomb">
        <ul>

            <?php
			$dsn = 'mysql:host=mysql609.db.sakura.ne.jp;dbname=takkey_hal_test;charset=utf8';
			$user = 'takkey';
			$password = 'takkey2016';
			try {
				$pdo = new PDO($dsn, $user, $password);	
			} catch (PDOException $e) {
				echo 'Cannot Access to Database!'.$e->getMessage();
				exit;
			}
        $st = $pdo -> query('SELECT * FROM php_sp91_tsuchiya');
        while($row = $st -> fetch()){
            $id = htmlspecialchars($row['id'], ENT_QUOTES, "UTF-8");
            $i = intval($id);
            $item_name[$i] = htmlspecialchars($row['item_name'], ENT_QUOTES, "UTF-8");
            $category[$i] = htmlspecialchars($row['category'], ENT_QUOTES, "UTF-8");
            $color[$i] = htmlspecialchars($row['color'], ENT_QUOTES, "UTF-8");
            $size[$i] = htmlspecialchars($row['size'], ENT_QUOTES, "UTF-8");
            $price[$i] = htmlspecialchars($row['price'], ENT_QUOTES, "UTF-8");
            $image_url[$i] = htmlspecialchars($row['image_url'], ENT_QUOTES, "UTF-8");
            $list_detail[$i] = htmlspecialchars($row['list_detail'], ENT_QUOTES, "UTF-8");
            $item_detail[$i] = htmlspecialchars($row['item_detail'], ENT_QUOTES, "UTF-8");
        }

        for($j=0;$j<=2;$j++) {
            switch ($j) {
                case 0:
                    $word = "Red Coral"; break;
                case 1:
                    $word = "Watch"; break;
                case 2:
                    $word = "Painting"; break;
            }
            echo '<li id="hcH'.$j.'" class="hch"><p>'.$word.'</p></li>';
        }
        
        $pos = 0;
        foreach($image_url as $k => $url) {
            if($pos % 4 == 3) {
                echo '<li id="hcU'.$pos.'" class="hcbee"></li>';
                $pos += 1;
            }
            echo '<li id="hcU'.$pos.'" class="hcu">';
            echo '<form action="item.php" method="post">';
            echo '<input type="hidden" name="id" value="'.$k.'">';
            echo '<input type="hidden" name="item_name" value="'.$item_name[$k].'">';
            echo '<input type="hidden" name="category" value="'.$category[$k].'">';
            echo '<input type="hidden" name="color" value="'.$color[$k].'">';
            echo '<input type="hidden" name="size" value="'.$size[$k].'">';
            echo '<input type="hidden" name="price" value="'.$price[$k].'">';
            echo '<input type="hidden" name="image_url" value="'.$url.'">';
            echo '<input type="hidden" name="list_detail" value="'.$list_detail[$k].'">';
            echo '<input type="hidden" name="item_detail" value="'.$item_detail[$k].'">';
            echo '<input type="image" src="'.$url.'" class="hcuImg"/>';
            echo '</form>';
            echo '</li>';
            $pos += 1;
        }
?>
        </ul>
    </section>

    <hr class="dots">
    <footer>
        <p>copyright Gossip Gallery Inc.</p>
    </footer>
</body>

</html>