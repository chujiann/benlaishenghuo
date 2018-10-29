/* 
* @Author: Marte
* @Date:   2018-10-25 10:45:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-29 00:33:02
*/

$(function(){


// function Show(){}
    // 点击价格升序按钮
    $('.jia').click(function(){
    
        // 请求数据
        $.ajax({
            type: "get",
            url: "../api/goodlist1.php",
            async: true,
            success: function(str){
                var res=str;
                var goodslist = JSON.parse(res);

                // 价格从低到高排序（升序）

                    function compareUp(obj1,obj2) {
                        var va1 = obj1.price;
                        var va2 = obj2.price;
                        if(va1 < va2) {
                            return -1;
                        }
                        else if(va1 > va2) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    }
                    goodslist.sort(compareUp);
                // console.log(goodslist);

                $('.goodslist1').html(goodslist.map(function(item){
                    return `<li data-id = '${item.id}'>
                <img src="${item.imgurl}" width="200px" height="200px" alt="" />
                <p><a href="#">${item.name1}</a></p>
                <p><a href="#">${item.price}</a></p>
                <p><a href="#">${item.name2}</a></p>
            </li>`;

                }).join(''));
            }
            
        });


    });

    
     // 点击价格降序按钮
    $('.jiang').click(function(){

        // 请求数据
        $.ajax({
            type: "get",
            url: "../api/goodlist1.php",
            async: true,
            success: function(str){
                var res=str;
                var goodslist = JSON.parse(res);

                // 价格从高到低排序（降序）

                    function compareDown(obj1,obj2) {
                        var va1 = obj1.price;
                        var va2 = obj2.price;
                        if(va1 > va2) {
                            return -1;
                        }
                        else if(va1 < va2) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    }
                    goodslist.sort(compareDown);
                // console.log(goodslist);

                $('.goodslist1').html(goodslist.map(function(item){
                    return `<li data-id = '${item.id}'>
                <img src="${item.imgurl}" width="200px" height="200px" alt="" />
                <p><a href="#">${item.name1}</a></p>
                <p><a href="#">${item.price}</a></p>
                <p><a href="#">${item.name2}</a></p>
            </li>`;

                }).join(''));
            }
            
        });


    });

//     
//   


    // 请求数据
     $.ajax({
            type: "get",
            url: "../api/goodlist1.php",   
            async: true,
            success: function(str){
                var res=str;
                var goodslist = JSON.parse(res);
                // console.log(goodslist);

                $('.goodslist1').html(goodslist.map(function(item){
                    return `<li data-id = '${item.id}'>
                <img src="${item.imgurl}" width="200px" height="200px" alt="" />
                <p><a href="#">${item.name1}</a></p>
                <p><a href="#">${item.price}</a></p>
                <p><a href="#">${item.name2}</a></p>
            </li>`;

                }).join(''));
            }
            
        });

    
   


        // 点击商品，跳转到详情页
        
        $('.goodslist1').on('click','li',function(e){
            location.href='../html/detail.html';
            var currentLi= $(this).attr('data-id');
            Cookie.set('id',currentLi,{path: '/'});
            console.log(currentLi);
            
        });

        // $('.goodslist2').on('click','li',function(e){
        //     location.href='http://localhost:1001/html/details/index.html';
        //     var currentLi= $(this).attr('data-id');
        //     Cookie.set('id',currentLi,{path: '/'});
        //     console.log(currentLi);
            
        // });

});