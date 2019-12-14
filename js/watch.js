var cods;
var setInter = 0;
main();
function main () {
    cods = 1;
    setInter = setInterval(function () {
        var videos = document.getElementById('videos');
        var currentTime = videos.currentTime.toFixed(1);
        console.log('时间:' + currentTime);
        // console.log("main"+cods);
        // console.log("标记"+times);
        if (currentTime > 5 && cods == 1) {
            chickMe();
            clearSerInt (cods);
        }
    }, 1500)
}

function chickMe () {
    videos.pause();
    let d2 = document.getElementById('d2');
    d2.style.display = 'block';
    let d1 = document.getElementById('d1');
    d1.style.display = 'block';
}
function cancel () {
    // console.log("can"+cods);
    videos.pause();
    let d2 = document.getElementById('d2');
    d2.style.display = 'none';
    let d1 = document.getElementById('d1');
    d1.style.display = 'none';
    console.log('您点击了取消');
    // clearSerInt (cods);
    // console.log("cancel的cods"+cods);
}
function confirm () {
    // console.log("con"+cods);
    console.log('您点击了确定');
    let d2 = document.getElementById('d2');
    d2.style.display = 'none';
    let d1 = document.getElementById('d1');
    d1.style.display = 'none';
    videos.play();
    // clearSerInt (cods);
}
function closes () {
    // console.log("clo"+cods);
    videos.pause();
    let d2 = document.getElementById('d2');
    d2.style.display = 'none';
    let d1 = document.getElementById('d1');
    d1.style.display = 'none'
    console.log('点击关闭');
    // clearSerInt (cods);
}
function stu_ques () {
    // console.log("stu"+cods);
    videos.pause();
    let d2 = document.getElementById('d2');
    d2.style.display = 'block';
    let d1 = document.getElementById('d1');
    d1.style.display = 'block';
    // this.cods=cods;
    // console.log("stu"+cods);
    // clearSerInt(cods);
}
function change () {
    // chickMe();
    alert('功能开发中...');
}
function clearSerInt (cods) {
    if (cods == 1) {
        clearInterval(setInter);
        console.log("结束循环计时器");
    }
}