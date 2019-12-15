window.onload = function () {

    var Words = document.getElementById("words");
    var Who = true;
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    var value = new this.Array("这个问题太深奥了，换一个吧！", "百度一下，你就知道！", "我们私下再探讨", "这个问题问得好")
    TalkSub.onclick = function () {
        //定义空字符串
        var str = "";
        if (TalkWords.value == "") {
            // 消息为空时弹窗
            alert("消息不能为空");
            return;
        } else {
            if (Who == true) {
                var rand = Math.floor(Math.random() * 3);
                console.log(rand);
                //如果Who.value为0n那么是 A说
                str = '<div class="btalk"><span>学生 :' + TalkWords.value + '</span></div>';
                Words.innerHTML = Words.innerHTML + str;
                
                $(document).ready(function () {
                    // console.log("aaa");
                    $('#talkwords')[0].value="";
                    $('#words').scrollTop($('#words')[0].scrollHeight);
                    $('#words').scrollLeft($('#words')[0].scrollWidth);
                });
                setTimeout(function () {
                    str = '<div class="atalk"><span>老师 :' + value[rand] + '</span></div>';
                    Words.innerHTML = Words.innerHTML + str;
                    $(document).ready(function () {
                        // console.log("aaa");
                        $('#words').scrollTop($('#words')[0].scrollHeight);
                        $('#words').scrollLeft($('#words')[0].scrollWidth);
                    });
                }, 1000);

            }
        }
        // else {
        //     str = '<div class="btalk"><span>学生 :' + TalkWords.value + '</span></div>';
        //     Who = false;
        //     console.log(Who);
        // }
        // Words.innerHTML = Words.innerHTML + str;
    }
}