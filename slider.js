/**
 * File scripts.js. 
 */
( function() {	
	
	// Globals 
	// Manifest Slider
	
	var slider = document.querySelector(".component.manifest .container .manifest-slider-container");
	var sliderItem = document.querySelector(".manifest-slider-container .wp-block-columns");
	var arrowLeft =	document.querySelector(".component.manifest .arrow-left");
	var arrowRight = document.querySelector(".component.manifest .arrow-right");
	var sliderItemWidth = returnWidthAndMargin(sliderItem); //usefull for first start slider width is dunamic.
	var currentPosition = 0;
	
	arrowLeft.onclick = () => {
		if(currentPosition === 0) {
			return;
		}
		let sliderItemWidth = returnWidthAndMargin(sliderItem);
		currentPosition = currentPosition + sliderItemWidth;
		slider.style.marginLeft = currentPosition + "px";
	};

	arrowRight.onclick = () => {
		let sliderItemWidth = returnWidthAndMargin(sliderItem);
		if(((returnSliderContainerWidth() + currentPosition) / sliderItemWidth)/2 === 0.5) {
			currentPosition = 0;
			slider.style.marginLeft = currentPosition + "px";
			return;
		}
		currentPosition = currentPosition - sliderItemWidth;
		slider.style.marginLeft = currentPosition + "px";
	};
	
	function returnSliderContainerWidth() {
		return slider.childElementCount * returnWidthAndMargin(sliderItem);
	}
	
	function returnWidthAndMargin(element) {
		var style = element.currentStyle || window.getComputedStyle(element);
		return element.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
	}
	
	function setStartParameters() {
		currentPosition = 0;
		slider.style.marginLeft = currentPosition + "px";
	}	
	var resizeId;
	window.addEventListener('resize', function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(setStartParameters, 500);
	});

	
	/*	useful: 
		var style = element.currentStyle || window.getComputedStyle(element),
		width = element.offsetWidth, // or use style.width
		margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
		padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
		border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);	*/

}());
