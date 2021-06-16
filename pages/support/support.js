function openNav() {
	console.log();
	document.getElementById("mySidenav").style.width = "200px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
function validationForm(inputs){
    let email; let wallet;

    let counter = 0;
    document.addEventListener('invalid', (function () {
        return function (e) {
        e.preventDefault();
        counter === 0 && e.target.focus();
        counter++;
        e.target.parentElement.classList.add('error');
        setTimeout(() => {
            counter = 0;
        }, 1000);

        };
    })(), true);

    for (const element of inputs) {
        element.addEventListener('input', e => {
            if (e.target.id == 'email') email = e.target.value;
            if (e.target.id == 'wallet') wallet = e.target.value;

            if (e.target.checkValidity()) {
                e.target.parentElement.classList.remove('error');
            } else {
                e.target.parentElement.classList.add('error');
            }
        })
    }
}

let arrInput = document.querySelectorAll('.field > input');
console.log(arrInput);
validationForm(arrInput);

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../../php/main.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Sended!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});