

console.log("录音");
var rec = Recorder();
var isLuyin = false;
function recorders () {
    //使用默认配置，mp3格式
    if (isLuyin) {
        isLuyin = false;
        rec.stop(function (blob, duration) {//到达指定条件停止录音
            console.log(URL.createObjectURL(blob), "时长:" + duration + "ms");
            //rec.close();//释放录音资源
            //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传

            /*立即播放例子*/
            var audio = document.createElement("audio");
            audio.controls = true;
            document.body.appendChild(audio);
            //简单的一哔
            audio.src = URL.createObjectURL(blob);
            audio.play();

        }, function (msg) {
            console.log("录音失败:" + msg);
        });
    } else {
        isLuyin = true;
        rec.open(function () {//打开麦克风授权获得相关资源
            rec.start();//开始录音

            // setTimeout(function () {
            //     rec.stop(function (blob, duration) {//到达指定条件停止录音
            //         console.log(URL.createObjectURL(blob), "时长:" + duration + "ms");
            //         rec.close();//释放录音资源
            //         //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传

            //         /*立即播放例子*/
            //         var audio = document.createElement("audio");
            //         audio.controls = true;
            //         document.body.appendChild(audio);
            //         //简单的一哔
            //         audio.src = URL.createObjectURL(blob);
            //         audio.play();

            //     }, function (msg) {
            //         console.log("录音失败:" + msg);
            //     });
            // }, 3000);
        }, function (msg, isUserNotAllow) {//用户拒绝未授权或不支持
            console.log((isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg);
        });
    }
}
