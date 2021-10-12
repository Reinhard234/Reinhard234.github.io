var bodyBackground = document.getElementById("background");
var clickPlay = document.getElementById("clickPlay");
var red = document.getElementById("red");
var start = document.getElementById("start");
var startHeader = document.getElementById("startHeader");
var video = document.getElementById("video");
var toMain = document.getElementById("toMain");
var toStart = document.getElementById("toStart");
// var backProj = document.getElementById("backToProject");

toStart.style.display = "none";
toMain.style.display = "none";
//var toStart = document.getElementById("toStart");
bodyBackground.style.visibility = "hidden";

var backgroundSound = new Audio("media/audio/HalseyGoodMourning.mp3");
	toMain.style.display = "none";
	//toStart.style.display = "none";
backgroundSound.loop = true;
backgroundSound.volume = 0.017;
video.style.display = "none";

counter = 0;

bodyBackground.onclick = function() {
	backgroundSound.play();
}

clickPlay.onclick = function() {
	
	red.className = "transition";
	window.setTimeout(afterToVideo, 1000);
}

start.onclick = function() {
	bodyBackground.style.visibility = "visible";
	red.className = "transition";
	window.setTimeout(afterTransition, 1000);
	
}

function afterTransition() {
	document.body.style.backgroundImage = "url(media/MainScreen2.gif)";
	start.style.display = "none";
	backgroundSound.play();
	toMain.style.display = "none";
	toStart.style.display = "inline";
	// backProj.style.display = "none";
	//toStart.style.display = "inline";
	startHeader.style.display = "none";
	window.setTimeout(afterAfterTransition, 1000);
}

function afterToVideo() {
	
	video.style.display = "inline";
	document.body.style.backgroundImage = "";
	toMain.style.display = "inline";
	toStart.style.display = "none";
	// backProj.style.display = "none";
	//toStart.style.display = "none";
	//toMain.style.display = "block";
		window.setTimeout(afterAfterVideo, 1000);
}

function afterAfterTransition() {
	red.className = "returnToNormal";
}

function afterAfterVideo() {
	red.className = "returnToNormal";
	document.getElementById("video").play();
	backgroundSound.pause();
	toMain.style.display = "inline";
	//$("<div class = 'backButton' id = 'toMain'>back</div>").insertAfter("#video");

}

// toStart.onclick = function() {
// 	red.className = "transition";
// 	window.setTimeout(afterTransitionStart, 1000);
// }

function afterTransitionStart() {
	
	}

toMain.onclick = function() {
	red.className = "transition";
	document.getElementById("video").pause();
	window.setTimeout(afterBackFromVideo, 1000);
}

toStart.onclick = function() {
	red.className = "transition";
	window.setTimeout(afterBackFromMenu, 1000);
}

function afterBackFromMenu() {
	document.body.style.backgroundImage = "url(media/StartMenu2.gif)";
	start.style.display = "inline";
	//backgroundSound.play();
	toMain.style.display = "none";
	toStart.style.display = "none";
	// backProj.style.display = "inline";
	//toStart.style.display = "inline";
	startHeader.style.display = "inline";
	window.setTimeout(afterAfterBackFromMenu, 1000);
}

function afterAfterBackFromMenu() {
	red.className = "returnToNormal";
}

function afterBackFromVideo() {
	
	video.style.display = "none";
	document.body.style.backgroundImage = "url(media/MainScreen2.gif)";
	toMain.style.display = "none";
	toStart.style.display = "inline";
	// backProj.style.display = "none";
	//toStart.style.display = "none";
	//toMain.style.display = "block";
		window.setTimeout(afterAfterBackFromVideo, 1000);
}

function afterAfterBackFromVideo() {
	red.className = "returnToNormal";
	//document.getElementById("video").play();
	backgroundSound.play();
	//toMain.style.display = "inline";
	//$("<div class = 'backButton' id = 'toMain'>back</div>").insertAfter("#video");

}