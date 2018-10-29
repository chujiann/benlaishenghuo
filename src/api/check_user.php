<?php
        /*
        注册用户

            * 把数据写入数据库
     */
    /*
        连接数据库
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

    // // 获取前端参数
    $username = isset($_GET['username']) ? $_GET['username'] : null;


    $sql = "select * from user where username='$username'";

    // echo "$sql";

    // 执行sql语句
    $result = $conn->query($sql);

    // var_dump($result);
    // echo '$result';

    // 判断是否获取到数据
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>