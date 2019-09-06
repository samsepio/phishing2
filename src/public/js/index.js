
let usuario=document.getElementById('usuario');
let contraseña=document.getElementById('contraseña');
let errorA=document.getElementById('errorA');
let errorB=document.getElementById('errorB');
let ingresar=document.getElementById('ingresar');

ingresar.addEventListener('click',(evento)=>{
	const caracteres=(usuario.value.length);
	if(caracteres > 40){
		errorA.innerHTML+='el usuario no puede ser mayor a 32 caracteres';
		errorA.style.color="red";
		errorA.style.fontFamily="sans-serif";
		evento.preventDefault();
	};
	if(usuario.value==""){
		errorA.innerHTML+='campo hobligatorio';
		errorA.style.color="red";
		errorA.style.fontFamily="sans-serif";
		evento.preventDefault();
	};if(contraseña.value==""){
		errorB.innerHTML+='campo hobligatorio';
		errorB.style.color="red";
		errorB.style.fontFamily="sans-serif";
		evento.preventDefault();
	};
});
