

function dropdown(){
	document.getElementById('dropdown').style.display = (document.getElementById('dropdown').style.display == 'block' ? 'none' : 'block');
}

function logoHover(){
	document.getElementById('logo').classList.add('animated');
    document.getElementById('logoname').classList.add('animated');
}

function logoAnimationEnd() { 
    document.getElementById('logo').classList.remove('animated');
    document.getElementById('logoname').classList.remove('animated');
}

document.getElementById('logo').addEventListener('animationend', logoAnimationEnd );