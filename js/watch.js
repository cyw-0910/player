var setInter = 0
main()
function main() {
	setInter = setInterval(function() {
		var videos = document.getElementById('videos')
		var currentTime = videos.currentTime.toFixed(1)
		console.log('时间' + currentTime)
		// console.log("标记"+times);
		if (currentTime > 5) {
			chickMe()
		}
	}, 1500)
}

function chickMe() {
	videos.pause()
	let d2 = document.getElementById('d2')
	d2.style.display = 'block'
	let d1 = document.getElementById('d1')
	d1.style.display = 'block'
}
function cancel() {
	videos.pause()
	let d2 = document.getElementById('d2')
	d2.style.display = 'none'
	let d1 = document.getElementById('d1')
	d1.style.display = 'none'
	clearInterval(setInter)
	console.log('您点击了取消')
}
function confirm() {
	console.log('您点击了确定')
	let d2 = document.getElementById('d2')
	d2.style.display = 'none'
	let d1 = document.getElementById('d1')
	d1.style.display = 'none'
	videos.play()
	clearInterval(setInter)
}
function closes() {
	videos.pause()
	let d2 = document.getElementById('d2')
	d2.style.display = 'none'
	let d1 = document.getElementById('d1')
	d1.style.display = 'none'
	clearInterval(setInter)
	console.log('点击关闭')
}
function stu_ques() {
	videos.pause()
	let d2 = document.getElementById('d2')
	d2.style.display = 'block'
	let d1 = document.getElementById('d1')
	d1.style.display = 'block'
}
function change() {
	// chickMe();
	alert('功能开发中...')
}
