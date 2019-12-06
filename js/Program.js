this.logueando = false;

$("#entrar").click(function(){
	if ($("#usuario").val() == "yaron" && $("#contraseña").val() == '123') {
		logueando = true;
		if (logueando == true) {
			window.location = "./pdfs/Sonar.pdf"
		}
	}else{
		Swal.fire('Error');
	}
});
$("#sonar").click(function(){

});

$("#pdf").click(function(){
	window.location = "../pages/pdfs.html";
	$(".embed").src = "../pdfs/sonar.pdf";
});

window.addEventListener('load',function(){
	$('.container').fadeIn(100);
});		