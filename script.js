
window.onscroll = function showHeader() {
	let header =  document.querySelector('header');
	if(window.pageYOffset > 60){
		header.classList.add('header-scroll');
	}
	else{
		header.classList.remove('header-scroll');
	}
}

function openNav() {
	console.log();
	document.getElementById("mySidenav").style.width = "200px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

let questions_block = document.querySelector('.faq-block');

questions_block.onclick = (event) => {
	if (event.target.className != 'faq-block'){
		let question = event.target.closest('.question');

		let answer = question.querySelector('.q-answer');
		answer.classList.toggle('transition');

		let btn = question.querySelector('.btn-img');
		btn.classList.toggle('close');
	}
	
}



let cards_block = document.querySelector('.cards-block');
cards_block.onclick = (event) => {
	if (event.target.className != 'cards-block'){
		if(event.target.className != 'flickity-slider'){
			let carousel_cell = event.target.closest('.carousel-cell');
			let card = carousel_cell.querySelector('.card');
			if (card.className.includes('flip')){
				card.classList.remove('flip');
			} else {
				card.classList.add('flip')
			}
		}
	}
}


let roadmap_block = document.querySelector('.roadmap-content');

roadmap_block.onmouseover = (event) => {
	if (event.target.className != 'roadmap-content'){
		let rm_block = event.target.closest('.rm-block')
		let img = rm_block.querySelector('.road-img');

		if(rm_block.className.includes('rm-5')){	
			img.classList.add('animate_rm5');
			img.onanimationend = () => {
				img.classList.remove('animate_rm5');
			}
		} else{
			img.classList.add('animate');
			img.onanimationend = () => {
				img.classList.remove('animate');
			}
		}
	}
}


function getTime(){
	let date= new Date();
	date = Date.parse(date);

	let final_date = new Date('2021-06-22T23:00:00')
	final_date = Date.parse(final_date);

	let time_in_seconds = (final_date - date) / 1000;

	if (time_in_seconds <= 0){
		let timer = document.querySelector('.timer');
		let closedHtml = `<div class="sale-closed">Sale has been closed</div> `
		timer.innerHTML = closedHtml;
	} else {
		let time_left = {
			seconds: time_in_seconds,
			minutes: 0,
			hours: 0,
			days: 0
		}
	
		time_left = countTime(time_left)
	
		printTime(time_left);
	}

	
}

function countTime(time){
	while(time.seconds >= 3600){
		time.seconds -= 3600;
		time.hours += 1;
	}
	while (time.seconds >= 60) {
        time.seconds -= 60;
        time.minutes += 1;
    }
	while(time.minutes >= 60) {
		time.minutes -= 60;
		time.hours += 1;
	}

	while (time.hours >= 24){
		time.hours -= 24
		time.days += 1;
	}

	return time;
}

function printTime(time){
	let timer = document.querySelector('.timer');

	let days = time.days < 10 ? '0' + time.days : time.days;
	let hours = time.hours < 10 ? '0' + time.hours : time.hours;
	let minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
	let seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;

	let timerHtml=`
	<div class="timer-block" id="days">
		<div class="value">${days}</div>
		<div class="param">Days</div>
	</div>
	<div class="timer-block" id="hours">
		<div class="value">${hours}</div>
		<div class="param">Hours</div>
	</div>
	<div class="timer-block" id="minutes">
		<div class="value">${minutes}</div>
		<div class="param">Minutes</div>
	</div>
	<div class="timer-block" id="seconds">
		<div class="value">${seconds}</div>
		<div class="param">Seconds</div>
	</div>
	`

	timer.innerHTML = timerHtml;

}

setInterval(() => {
	getTime();
}, 1000);

//jQuery
$(document).ready(function(){
	$("#menu").on("click",".transition", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$("#menu-nav").on("click",".transition", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
