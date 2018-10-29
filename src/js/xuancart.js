/* 
* @Author: Marte
* @Date:   2018-10-28 19:37:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-28 23:38:13
*/

$(function(){


    $('.tab1').click(function(){
        console.log(666)
        $('.tab1').css('color','#58bc58');
        $('.tab2').css('color','black');
        $('.con1').css('display','block');
        $('.con2').css('display','none');
    });

    $('.tab2').click(function(){
        $('.tab2').css('color','#58bc58');
        $('.tab1').css('color','black');
        $('.con2').css('display','block');
        $('.con1').css('display','none');
    });

});