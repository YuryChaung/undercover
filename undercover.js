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
	var picClick = function(){
		createPlayer();
	}

	for(let i = 1; i <= 10; i++){
		let img = document.createElement('img');
		img.src = 'animal/' + i + '.png';
		document.getElementById('picChoose').appendChild(img);
		imgArray.push(img);
		imgArray[i - 1].onclick = picClick;
	}
	
//	for(let i = 1; i <= players; i++){
//		document.getElementById('say').innerHTML = "Player " + i + "  choose your picture!";
//		createPlayer(i);
//	}
}


function playerInfo(playerID,playerPic){
	this.playerPic = playerPic;
	this.playerName;
}


function createPlayer(){
	 let infoInputAll = document.createElement('div');
		infoInputAll.id = "infoInputAll";
		infoInputAll.style.backgroundColor = "red";
		infoInputAll.role = "dialog";
		infoInputAll.ariaLabel = "New Message";
		document.body.appendChild(infoInputAll);

//		let infoInputFrame = document.createElement('div');
//		infoInputAll.id = "infoInputFrame";
//		document.getElementById('infoInputAll').appendChild(infoInputFrame);
//		let closeButton = document.createElement('input');
//		closeButton.id = "closeButton";
//		closeButton.type = "button";
//		document.getElementById('infoInputFrame').appendChild(closeButton);
	
}




