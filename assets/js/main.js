/*
 * Change Navbar color while scrolling
*/

function adjustScheduleHeight(){
    var i = 0;
    var box_width = 0;
    while($(".schedule-box")[i].offsetWidth == 0){
        i++;
    }
    box_width = $(".schedule-box")[i].offsetWidth;
    box_height = $(".schedule-box")[i].offsetHeight;
    car_width = $(".carousel-inner")[0].offsetWidth;
    n_cols = Math.round(car_width/box_width);
    n_boxes = 0;
    for (var i = 0; i< $(".item").length; i++){
        if ($(".item")[i].getElementsByClassName("schedule-box").length > n_boxes) {
            n_boxes = $(".item")[i].getElementsByClassName("schedule-box").length;
        }
    }
    n_rows = Math.ceil(n_boxes/n_cols);
    car_height = (n_rows * (25 + box_height)) + 60;
    $(".carousel-inner")[0].style.height = car_height + "px";
}


$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).resize(function(){
    adjustScheduleHeight();
});

$(window).load(function(){
	handleTopNavAnimation();
    $("nav a[data-scroll]").click(function(){
        if (!$("#menu-button").is(":hidden")) {
            $("#menu-button").click()
        }
    });
    adjustScheduleHeight();

    
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Registration Form
*/



/*
 * SmoothScroll
*/

smoothScroll.init();

