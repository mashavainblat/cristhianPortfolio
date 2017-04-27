$( document ).ready(function() {
  console.log("hello world");


function duchampTotalImg(){
	$("#duchamp .totalSlides").html($("#duchamp .item").length);

	var currentDuchampIndex = $('#duchamp div.active').index() + 1;
	$('#duchamp .currentSlide').html(currentDuchampIndex);

	$('#duchampProjectCarousel').on('slid.bs.carousel', function() {
	    currentDuchampIndex = $('div.active').index() + 1;
	   $('#duchamp .currentSlide').html(currentDuchampIndex);
	});
}
duchampTotalImg();

/********************************************************************/

function diaBeaconTotalImg(){
	// console.log($("#diaBeacon .item").length);
	$("#diaBeacon .totalSlides").html($("#diaBeacon .item").length);

	var currentDiaIndex = $('#diaBeacon div.active').index() + 1;
	$('#diaBeacon .currentSlide').html(currentDiaIndex);

	$('#diaBeaconProjectCarousel').on('slid.bs.carousel', function() {
	    currentDiaIndex = $('#diaBeacon div.active').index() + 1;
	   $('#diaBeacon .currentSlide').html(currentDiaIndex);
	});

}
diaBeaconTotalImg();

/********************************************************************/

function perthTotalImg(){
	// console.log($("#perth .item").length);
	$("#perth .totalSlides").html($("#perth .item").length);


	$('#perthProjectCarousel').on('slid.bs.carousel', function() {
	    currentPerthIndex = $('#perth div.active').index() + 1;
	   $('#perth .currentSlide').html(currentPerthIndex);
	});

	var currentPerthIndex = $('#perth div.active').index() + 1;
	$('#perth .currentSlide').html(currentPerthIndex);
}
perthTotalImg();

/********************************************************************/

function washoutTotalImg(){
	// console.log($("#washout .item").length);
	$("#washout .totalSlides").html($("#washout .item").length);

	$('#washoutProjectCarousel').on('slid.bs.carousel', function() {
	    currentWashoutIndex = $('#washout div.active').index() + 1;
	   $('#washout .currentSlide').html(currentWashoutIndex);
	});

	var currentWashoutIndex = $('#washout div.active').index() + 1;
	$('#washout .currentSlide').html(currentWashoutIndex);

}
washoutTotalImg();

/********************************************************************/

function sabonTotalImg(){
	// console.log($("#sabon .item").length);
	$("#sabon .totalSlides").html($("#sabon .item").length);

	$('#sabonProjectCarousel').on('slid.bs.carousel', function() {
	    currentSabonIndex = $('#sabon div.active').index() + 1;
	   $('#sabon .currentSlide').html(currentSabonIndex);
	});

	var currentSabonIndex = $('#sabon div.active').index() + 1;
	$('#sabon .currentSlide').html(currentSabonIndex);

}
sabonTotalImg();


}); //end document.ready()