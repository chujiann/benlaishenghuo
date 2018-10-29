 document.addEventListener('DOMContentLoaded',function(){
                $('#close').onclick=function(){
                    //diplay,opacity,删除节点
                    $('#smallbox').style.display='none';
                }
            });

document.addEventListener('DOMContentLoaded',function(){

   var header_two_li = document.querySelector('.header_two_li');
   var header_show_two = document.querySelector('.header_show_two');

   var header_one_li = document.querySelector('.header_one_li');
   var header_show_one = document.querySelector('.header_show_one')

   header_two_li.onmouseenter = function(){
               header_show_two.style.display='block';
            }
    header_show_two.onmouseleave = function(){
               header_show_two.style.display='none';
            }

    header_one_li.onmouseenter = function(){
               header_show_one.style.display='block';
            }
    header_show_one.onmouseleave = function(){
               header_show_one.style.display='none';
            }
           
})
/*document.addEventListener('DOMContentLoaded',function(){

    $('.header_two_li').onmouseenter=function(){
        $('.header_show_two').style.display='block';console.log(66)
    }
    $('.header_two_li').onmouseleave=function(){
        $('.header_show_two').style.display='none';
    }
});*/


document.addEventListener('DOMContentLoaded',function(){

   var benone = document.querySelector('.benone');
  
   var showone = document.querySelector('.showone')

   
    

    benone.onmouseenter = function(){
               showone.style.display='block';
            }
    showone.onmouseleave = function(){
               showone.style.display='none';
            }
           
})


/*banner*/
 document.addEventListener('DOMContentLoaded',function(){
           
            //获取页面元素
        
            let banner = document.querySelector('.banner');
            let ul = banner.children[0];

            // 无缝滚动关键1：复制第一张到最后
            ul.appendChild(ul.children[0].cloneNode(true));

            // 图片数量
            let len = ul.children.length;

            // 默认索引值
            let index = 0;

            // 添加分页效果
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=0;i<len-1;i++){
                let span = document.createElement('span');
                span.innerText = i+1;
                if(i === index){
                    span.className = 'active';
                }
                page.appendChild(span);
            }
            // 写入页面
            banner.appendChild(page);

            // 1）设置ul宽度，达到水平排列的效果
            ul.style.width = banner.clientWidth*len + 'px';

            // 每隔3s显示一张图片
            let timer = setInterval(autoPlay,2000);


            // 鼠标移入移出
            banner.onmouseenter = function(){
                clearInterval(timer);
            }
            banner.onmouseleave = function(){
                timer = setInterval(autoPlay,2000);
            }


            // 点击页码切换
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    index = e.target.innerText-1;
          
                    show(); 
                }
            }


            function autoPlay(){

                index++;

                show();
                
            } 

            function show(){
                // 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
                if(index>=len){
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index * banner.clientWidth});

                // 显示页码高亮
                // 去除其他高亮，添加当前高亮
                for(let i=0;i<len-1;i++){
                    if(i===index){
                        page.children[i].className = 'active';
                      
                    }else{
                        page.children[i].className = '';
                    }
                }

                // 当到达复制图片动画时，高亮显示第一个页码
                if(index === len-1){
                    page.children[0].className = 'active';
                }

            }
            
        });



 document.addEventListener('DOMContentLoaded',function(){
      /*获取元素*/
        var mu1=document.getElementById('mu1')
        var menu11=document.getElementsByClassName('menu11')[0]
        var mu2=document.getElementById('mu2')
        var menu12=document.getElementsByClassName('menu12')[0]
        var mu3=document.getElementById('mu3')
         
         var menu13=document.getElementsByClassName('menu13')[0]
        var mu4=document.getElementById('mu4')
        
        var menu14=document.getElementsByClassName('menu14')[0]
        var mu5=document.getElementById('mu5')
      
         var menu15=document.getElementsByClassName('menu15')[0]
         var mu6=document.getElementById('mu6')
         var menu16=document.getElementsByClassName('menu16')[0]
         var mu7=document.getElementById('mu7')
       
         var menu17=document.getElementsByClassName('menu17')[0]
         var mu8=document.getElementById('mu8')
         var mu9=document.getElementById('mu9')
         var menu18=document.getElementsByClassName('menu18')[0]
         var menu19=document.getElementsByClassName('menu19')[0]



       
                    mu1.onmouseover = function(){
                         menu11.style.display='block';
                        
                     }
                      mu1.onmouseout = function(){
                         menu11.style.display='none';
                     }

                      mu2.onmouseover = function(){
                         menu12.style.display='block';
                     }
                      mu2.onmouseout = function(){
                         menu12.style.display='none';
                     }

                      mu3.onmouseover = function(){
                         menu13.style.display='block';
                     }
                      mu3.onmouseout = function(){
                         menu13.style.display='none';
                     }

                      mu4.onmouseover = function(){
                         menu14.style.display='block';
                     }
                      mu4.onmouseout = function(){
                         menu14.style.display='none';
                     }
                      mu6.onmouseover = function(){
                         menu16.style.display='block';
                     }
                      mu6.onmouseout = function(){
                         menu16.style.display='none';
                     }
                      mu7.onmouseover = function(){
                         menu17.style.display='block';
                     }
                      mu7.onmouseout = function(){
                         menu17.style.display='none';
                     }
                       mu8.onmouseover = function(){
                         menu18.style.display='block';
                     }
                      mu8.onmouseout = function(){
                         menu18.style.display='none';
                     }
                       mu9.onmouseover = function(){
                         menu19.style.display='block';
                     }
                      mu9.onmouseout = function(){
                         menu19.style.display='none';
                     }



 });

/* 新手上线 */











/*<!-- 时令鲜果 -->*/
