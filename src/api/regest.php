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

    
    // 获取前端参数
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
 

    if($username && $password){
        // 用户有效性验证
        $sql = "select * from user where username='$username'";

        $result = $conn->query($sql);

        if($result->num_rows>0){
            echo "fail";
        }else{
            
            // 写入数据库
            $sql = "insert into user(username,password) values('$username','$password')";

            $result = $conn->query($sql);

            if($result){
                echo "success";
            }else{
                echo "no";
            }
        }
    }else{
        echo "无法获取用户名或密码！";
    }


?>