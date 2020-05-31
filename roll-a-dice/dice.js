const template = Handlebars.compile("<li> You rolled a <img src = \"{{  value  }}.png\"></li>");

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#roll').onclick = () => {

		//generate a random number for the dice
		const roll = Math.floor((Math.random()*6) +1);

		//to add roll to DOM
		const content = template({'value' : roll});
		document.querySelector('#rolls').innerHTML += content;
	};
});