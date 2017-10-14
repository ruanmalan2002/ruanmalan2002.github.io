$(document).ready(function() {
	$("#mobile-button").click(function(e){
		$("#headerutils, #search-widget, #top_nav, #see-more, #sidebar").toggle();
		$("#mobile-button").toggleClass("expanded");
		e.preventDefault();
	});
	$("#see-more p").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollLeft: 176},250);
	});
	$("#section-nav p").click(function(e){
		$("#section-nav-contents").toggle();
		$("#section-nav p").toggleClass("section-nav-open");
		e.preventDefault();
	});
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 300);
	});
	$('<p class="back-to-top"><a class="scroll" href="#start" >Back to top &uarr;</a></p>').insertAfter("#glossary-terms > h2");
	$("p#glossary-links a,#glossary-terms .back-to-top a").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	$(".example > h5").prepend("<span title='Expand' class='open'>+</span><span title='Close' class='close'>–</span>");
	$(".example > h5").click(function() {
		$(this).toggleClass("active");
		$(this).next().toggle();
	});
	equalheight = function(container){
		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
		$(container).each(function() {
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;
			if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
	$(window).load(function() {
		equalheight('.cc-row .cc-block');
		equalheight('#steps .step');
		equalheight('#blocks .block');
	});
	$(window).resize(function(){
		equalheight('.cc-row .cc-block');
		equalheight('#steps .step');
		equalheight('#blocks .block');
	});
});