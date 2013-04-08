$(document).ready(function(){

	if (!Modernizr.touch){
	   $("#touchContent p:first").text("This element requires Touch");
		}

	$(".addDiv").click(function(){
		$(".row").append("<div class='span12'>Added by jquery</div>")
		})
});