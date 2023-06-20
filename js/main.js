// Codigo principal
let Id=(i,doc=document)=>{return doc.getElementById(i);};
let Tag=(i,doc=document)=>{return doc.getElementsByTagName(i);};



//Codigo del desafio 4

let parrafos=Tag('P');
let f=()=>{
	let msg='';
	for (let i = parrafos.length; i > 0; i--) {
		msg='Hiciste click en el parrafo nro '+i;
		if(parrafos[i-1]==window.event.target){return alert(msg);}
	}
}
setTimeout(()=>{
	for (var i = 0; i < parrafos.length; i++) {
		parrafos[i].addEventListener('click',f);
	}
},1000);

let showAlert=()=>{alert('Hiciste click en mi!');}


// Codigo del desafio 5
setTimeout(()=>{
	let fm=Id('myForm');
	if(fm!==null){
	fm.addEventListener('submit', function(event) {
		event.preventDefault();
		validateForm();
	});
	}
},1000);

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
	return regex.test(email);
}
function validateForm() {
	if(validateEmail(Id('email').value)){
		alert('Correo electrónico enviado correctamente.');
	}else{
		alert('Por favor ingrese un correo electrónico válido.');
	}
}









/////////////////// Barra de menu

setTimeout(()=>{
	let nav =document.getElementsByTagName('nav')[0];
	let menu = nav.getElementsByTagName('input')[0];
	menu.addEventListener('click',()=>{
		nav.className={false:'movil',true:''}[nav.className=='movil'];
	});
},1000);