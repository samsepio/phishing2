const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.post('/',(req,res,next)=>{
	console.log(req.body);
	res.send('error de conexion internet lento ');
});
router.get('/recivido',(req,res,next)=>{
	res.redirect('/');
	console.log('usuario redirigido');
});
module.exports=router;
