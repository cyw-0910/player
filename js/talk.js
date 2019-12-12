window.onload = function(){
    var Words = document.getElementById("words");
    var Who = document.getElementById("who");
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    
    TalkSub.onclick = function(){
        //定义空字符串
        var str = "";
        if(TalkWords.value == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        if(Who.value == 0){
            //如果Who.value为0n那么是 A说
            str = '<div class="atalk"><span>老师 :' + TalkWords.value +'</span></div>';
        }
        else{
            str = '<div class="btalk"><span>学生 :' + TalkWords.value +'</span></div>' ;  
        }
        Words.innerHTML = Words.innerHTML + str;
    }
}