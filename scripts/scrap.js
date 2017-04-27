$( document ).ready(function() {
  // Handler for .ready() called.
  console.log("hello world");


  // $('.projectDescriptionContainer').css({opacity:"0"});
 //  if($('.projectDescriptionContainer').css({opacity:"0"})){
 //  	console.log("opacity=0");

	//   $(".infoQuestionMark").click(function(){
	//     console.log("clicking");
	//   	$(".projectDescriptionContainer").css({opacity: "1"});
	//   // });
 //  	});
	// }

function getTotalSlides(){
	console.log(".item's parents = ", $(".item").parent());
	$(".item").parent().each(function(){
		console.log("item's length", $(".item").length);
	})
}

getTotalSlides();


	// function getSlideNumber(){
	// 	// get all elements that have class "item" within parent div #duchamp-carousel-inner
	// 	if($(".item").parent().has("#duchamp-carousel-inner")){
	// 		console.log(".item has parent #duchamp-carousel-inner");
	// 		console.log("total number of .item = ", $(".item").length);
	// 	};
	// };
	// getSlideNumber();

var totalSlides = $(".item").length;
// console.log("var totalSlides = ", totalSlides);

function gettingSpecificSlide(){
			
       console.log("number of items in #duchamp-carousel-inner ", $("#duchamp-carousel-inner .item").length);
       $(".currentSlide").html("Found this one");
     $("#duchamp-carousel-inner .item").each(function() {
       $(".currentSlide").html("Found this one");
       // console.log($(this).length);
     });
};
gettingSpecificSlide();


	 // $(function() {
  //    $(".parent .searchEl").each(function() {
  //      $(this).html("Found this one");
  //    });
  //  });


 //  $(".infoQuestionMark").click(function(){
 //    // console.log("clicking");

	// 	$('.projectDescriptionContainer').toggle(function () {
	// 	    $(".projectDescriptionContainer").css({opacity: "0"});
	// 	}, function () {
	// 	    $(".projectDescriptionContainer").css({opacity: "1"});
	// 	});
	//     // $("p").toggleClass("main");
	// });




  // $("body").click(function(){
		// 		$("body").toggleClass("inverse");
		// 	});
		// 	$("body").click(function(){
		// 		$("a").toggleClass("invertNav");
		// 	});


});