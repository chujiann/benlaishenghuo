/*用户登录验证*/
/*  document.addEventListener('DOMContentLoaded',function(){
               
               var btn = document.getElementById('btn');

               btn.onclick = function(e){

               e = e || window.event;

                //手机号验证
                var phone = document.getElementById('phone').value;
                var reg = /^1[3-9]\d{9}$/;
                if(!reg.test(phone)){
                alert('手机号码不合法');
                return false;
                     }

                //密码验证合法性
                //   长度6-20
                //     不能包含空格
               
                var password = document.getElementById('password').value;
      
                var reg = /^[^\s]{6,20}$/;
                if(!reg.test(password)){
                alert('请输入长度6-20');
                return false;
                    }

                //随机验证码验证
                var out = document.getElementById('out');  
                var yangzhengma = document.getElementById('yangzhengma'); 


                 //定义一个数组
                    var arr1 = 'qwertyuiopasdfghjklzxcvbnm0123456789'.split('');

                           randomCode(4); 

                            out.onclick = function(){
                                randomCode(4);
                            }

                            btn.onclick =function(){
                                var _yangzhengma =yangzhengma.value;//注意点z字符串和数字
                                var res = out.innerHTML;
                                if(_yangzhengma!=res){
                               
                                return false;
                            }   
                            } 

                            function randomCode(n){
                                 var res = '';
                                for(var i= 0;i<n;i++){
                                 res +=arr1[parseInt(Math.random()*arr1.length)];
                                }
                                out.innerHTML = res;
                           }
               
                }







            });*/

document.addEventListener('DOMContentLoaded',function(){

   let username2 = document.querySelector('#username');
    let password2 = document.querySelector('#password');
    let regBtn = document.querySelector('#loginBtn');

    let statusCode = [200,304];

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(statusCode.indexOf(xhr.status)>=0){
            let res = xhr.responseText;
             console.log(res);
            if(res == 'success'){
                alert('欢迎来到本来生活网！');
                location.href = '../index.html';
            }else{
                alert('用户名或密码错误！');
                
            }
        }
    }

    loginBtn.onclick = function(){
        let _username2 = username2.value;
        let _password2 = password2.value;

        xhr.open('get',`../api/login.php?username=${_username2}&password=${_password2}`,true);
        xhr.send();
    }
  });