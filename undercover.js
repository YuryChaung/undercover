//undercover.js

'use strict'

window.onload = function(){
	var subButton = document.getElementById('sub');
	var plusButton = document.getElementById('plus');
	var playersEnterButton = document.getElementById('playersEnter');
	document.getElementById('people').innerHTML = 5;

 
	subButton.onclick = function(){
		let players = document.getElementById('people').innerHTML - 1;
		document.getElementById('people').innerHTML = players;
		disabledButton(players);
	}

	plusButton.onclick = function(){
		let players =  + document.getElementById('people').innerHTML + 1;
		document.getElementById('people').innerHTML = players;
		disabledButton(players);
	}

	playersEnterButton.onclick = function(){
		let players = document.getElementById('people').innerHTML;
		newGame(players);
	}
}

var j = 1;
function disabledButton(players){
	switch(players){
		case 3 :
		document.getElementById('sub').disabled = true;
		break;
	    
	    case 4 :
	    document.getElementById('sub').disabled = false;
	    break;

	    case 10 :
	    document.getElementById('plus').disabled = true;
	    break;

	    case 9 :
	    document.getElementById('plus').disabled = false;
	    break;
	}
}

function newGame(players){
	var imgArray = [];
	var picClick = function(e){
		createPlayer(e.target.src,players);
	}
	let chooseWord = document.createElement('h3');
	chooseWord.id = "chooseWord";
	chooseWord.innerHTML = "Player " + j + "  choose your picture!";
	document.getElementById('picChoose').appendChild(chooseWord);
	for(let i = 1; i <= 10; i++){
		let img = document.createElement('img');
		img.src = 'animal/' + i + '.png';
		img.id = i;
		img.classList = "playerPic";
		document.getElementById('picChoose').appendChild(img);
		imgArray.push(img);
		imgArray[i - 1].onclick = picClick;
	}	
}


function playerInfo(playerName,playerPic){
	this.playerPic = playerPic;
	this.playerName = playerName;
}


function createPlayer(picSrc){
	window.scrollTo( 0, 0 ) ;
	document.body.style.overflow = "hidden";
	let infoInputAll = document.createElement('div');
	infoInputAll.id = "infoInputAll";
	document.body.appendChild(infoInputAll);
	let infoInputFrame = document.createElement('div');
	infoInputFrame.id = "infoInputFrame";
	document.getElementById('infoInputAll').appendChild(infoInputFrame);
	let closeButton = document.createElement('input');
	closeButton.id = "closeButton";
	closeButton.type = "button";
	closeButton.value = "X";
	document.getElementById('infoInputFrame').appendChild(closeButton);
	let okButton = document.createElement('input');
	okButton.id = "okButton";
	okButton.type = "button";
	okButton.value = "OK";
	document.getElementById('infoInputFrame').appendChild(okButton);
	let img = document.createElement('img');
	img.id = "choosePic";
	img.src = picSrc;
	img.classList = "playerPic";
	document.getElementById('infoInputFrame').appendChild(img);
	let infoDiv = document.createElement('div');
	infoDiv.id = "infoDiv";
	document.getElementById('infoInputFrame').appendChild(infoDiv);
	let nameWord = document.createElement('h1');
	nameWord.id = "name";
	nameWord.innerHTML = "Input your name!";
	document.getElementById('infoDiv').appendChild(nameWord);
	let nameBar = document.createElement('input');
	nameBar.id = "nameBar";
	nameBar.type = "text";
	nameBar.value = "players";
	document.getElementById('infoDiv').appendChild(nameBar);


	closeButton.onclick = function(){
		closeCreatePlayers();
	}

	okButton.onclick = function(){
		var playersArray = [];
		let name = document.getElementById('nameBar').value;
		let x = "player" + j;
		let picSrc = document.getElementById('choosePic').src;
//		alert(picSrc.src);
//		x = playerInfo(name,picSrc.src);
		playersArray.push(x);
		j++;
		document.getElementById('chooseWord').value = "Player " + j + "  choose your picture!";
		closeCreatePlayers();
	}
	
}

function closeCreatePlayers(){
	document.body.style.overflow = "auto";
	let infoInputAll = document.getElementById('infoInputAll');
	document.body.removeChild(infoInputAll);
}




