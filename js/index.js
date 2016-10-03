$(function(){
	$("#fullpage").fullpage({
		 'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple']
	});
    $(document).on('click', '.J_btn_next-page', function(){
		$.fn.fullpage.moveSectionDown();
	});
})