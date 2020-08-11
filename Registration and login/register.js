const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('pass');
const password2 = document.getElementById('cfpass');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	}else if(/[\,\+\-\*\/\&\@]{2,}/.test(usernameValue)){
    setErrorFor(username, 'Username cannot repitation in special characters');
  }else if(/^[a-zA-Z][a-zA-Z0-9@|_|.]*/.test(usernameValue)){
    setSuccessFor(username);
  }
  else {
		setErrorFor(username, 'Username must contain a UPPERCASE a lowercase and a special character');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
  
	if(phoneValue===''){
	setErrorFor(phone, 'Phone Number cannot be blank');
	}else if(!isPhone(phoneValue)){
	setErrorFor(phone, 'Not a valid phone number');
	}else {
		setSuccessFor(phone);
	}
	
    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (!isPassword(passwordValue)){
 		setErrorFor(password, 'Password must have a UPPERCASE lowercase number and a special character and also length must be above 8 characters');
  }
  else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_content error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_content success';
}
	
function isEmail(email) {
	return /(^[a-zA-z0-9\.-]+)@([a-zA-z0-9]+).([a-z]{2,20})(.[a-z]{2,10})?/.test(email);
}

function isPhone(phone){
  return /^[6-9][0-9]{9}$/.test(phone);
}

function isPassword(pass){
  return /^[a-zA-Z0-9@|_|.]{8,15}$/g.test(pass);
}