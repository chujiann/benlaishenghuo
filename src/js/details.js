$(function(){
    

        $('.add').click(function(){
                console.log(666)
                var $res1 = $('.input').val()*1 + 1;
                $('.input').val($res1);
            });

             $('.cut').click(function(){
                var $res2 = $('.input').val()*1 - 1;
                if($res2 <= 0){
                    $res2 = 1;
                }
                $('.input').val($res2);
            });

    // 获取列表页传过来的id,从数据库中获取数据
    
    var currentLiId = Cookie.get('id');
    console.log(currentLiId);
    $.ajax({
        type: "get",
        url: "../api/details.php",
        async: true,
        data: {
            'id':currentLiId
        },
        success: function(str){
            // console.log(str)
            var res=str;
            var goodslist = JSON.parse(res);

            $('.detail').html(goodslist.map(function(item){
                    return `<div class="zoudetail fl">
          <img src="${item.imgurl}" width="500" height="500" alt="" />
        </div>

        <script type="text/javascript">

                    // 商品图的放大镜效果
                        magnifier(".zoudetail",500,500,"${item.imgurl}",250,250,500);

        </script>


        <div class="youdetail fr">
          <p class="p1">${item.name1}</p>
          <p class="p2">来自“彩虹之国”的高贵血统</p>
          <p class="p3"><span class="sp1">促销价</span ><span class="sp2">${item.price}</span></p>
          <p class="p4" >手机购买</p>
          <p class="p5">
            <span class="cut">-</span><input type="text" class="input" value="1" /><span class="add">+</span>
            <button class="sp5">加入购物车</button>
          </p>
         
        </div>`

                }).join(''));



             $('.add').click(function(){
                console.log(666)
                var $res1 = $('.input').val()*1 + 1;
                $('.input').val($res1);
            });

             $('.cut').click(function(){
                var $res2 = $('.input').val()*1 - 1;
                if($res2 <= 0){
                    $res2 = 1;
                }
                $('.input').val($res2);
            });



             // 添加商品到购物车，跳转到购物车

            $('.sp5').click(function(){

                alert('添加成功！');

                location.href = '../html/car.html';

                //同时把数量传给后端保存到数据库
                var IDCookie = Cookie.get('id');
                var num = $('.input').val();
                console.log(num);
                console.log(IDCookie);
                $.ajax({
                    type: "get", 
                    url: "../api/reCart.php",
                    async: true,
                    data: {
                        'num':num,
                        'id':IDCookie
                        },
                    success: function(str){
                        console.log(str);
                        var res=str;
                        var goodslist = JSON.parse(res);
                    }
                });
            });

           
        }

    });


    
});