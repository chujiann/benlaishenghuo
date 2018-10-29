<?php

    /*
        1)连接数据库
     */

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'benlai';
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接是否成功
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');


    // 接收前端传过来的数据  id
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $qty= isset($_GET['num']) ? $_GET['num'] : null;

    echo $qty;

    // 访问跟传过来的id一样的购物车数据库商品
    $sql="select num from cart where id = '$id'";

    if($id!=null){
        // 执行语句
        $result = $conn->query($sql);
        if($result->num_rows>0){  //购物车有该商品时
            // 获取该商品的数量
            $n=$result->fetch_all(MYSQLI_ASSOC)[0];
            $num = $n['num'];
            
            if($qty!=null){
                $num+=$qty;
            }else{
                $num++;
            }

        $sqll = "update car set num = '$num' where id = '$id'";
        $a = $conn->query($sqll);

        if($a){
           echo "yes";
           } 

        }else{//没有的
            //查询商品所有信息
            $goodsSql = "select * from goodlist where id = '$id'";

            $goodsRes = $conn->query($goodsSql);
            $goodsInfo = $goodsRes->fetch_all(MYSQLI_ASSOC)[0];
            var_dump($goodsInfo);

            $ids = $goodsInfo['id'];
            $imgurl = $goodsInfo['imgurl'];
            $name1 = $goodsInfo['name1'];
            $price = $goodsInfo['price'];
            //信息写入cart表
            if($qty>1){
                $carSql = "insert into car (id,imgurl,name1,price,num) values ('$ids','$imgurl','$imgurl','$price','$qty')";
            $carRes = $conn->query($carSql);
            }else{
                $carSql = "insert into car (id,imgurl,name1,price,num) values ('$ids','$imgurl','$name1','$price',1)";
            $carRes = $conn->query($carSql);
            }
        }
        echo '666';
    }