

 document.addEventListener('DOMContentLoaded',function(){





    // 注册用户名验证
     
    let username1 = document.querySelector('#username');
    let password1 = document.querySelector('#password');
    let password2 = document.querySelector('#passwordo');
    let regBtn = document.querySelector('#regBtn');

    let statusCode2 = [200,304];

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(statusCode2.indexOf(xhr.status)>=0){
            let res = xhr.responseText;
            if(res === 'no'){
                username1.value = '';
                username1.focus();
                alert('用户名太受欢迎，已被注册！');

            }
            if(res === 'yes'){

            }

        }
    }

    // 检测用户是否被占用
    username1.onblur = ()=>{
        xhr.open('get','../api/check_user.php?username='+username1.value,true);
        xhr.send();
    }

    let xhr_reg = new XMLHttpRequest();
    xhr_reg.onload = function(){
        if(statusCode2.indexOf(xhr_reg.status)>=0){
            let res = xhr_reg.responseText;
            if(res === 'success'){
                alert('注册成功！');
                location.href = '../index.html';
            }else{
                alert('注册失败！');
            }
        }
    }

    // 注册
    regBtn.onclick = function(){
        // 获取用户名，密码
        let _username = username1.value;
        let _password = password1.value;

        xhr_reg.open('get',`../api/regest.php?username=${_username}&password=${_password}`,true);
        xhr_reg.send();

    }

    
     // 密码验证
    password2.onchange = ()=>{
        if(password2.value != password1.value){
            alert('两次输入的密码不一致！');
            password2.focus();
        }
    }

});