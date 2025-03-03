## Typical slick slider code.


CDN for css and Js

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Slick Slider CSS -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>

<!-- Slick Slider JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>




## Default Css code for slick

/* Make sure the slider container is centered */
.slider {
    width: 80%;
    margin: auto;
}

/* Customize Slick Dots */
.slick-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.slick-dots li {
    display: inline-block;
    margin: 0 5px;
}

.slick-dots li button {
    font-size: 0; /* Hide default number */
    width: 12px;
    height: 12px;
    background: #bbb;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.slick-dots .slick-active button {
    background: #007BFF; /* Active dot color */
}

/* Customize Slick Arrows */
.slick-prev, .slick-next {
    font-size: 0; /* Hide default text */
    width: 40px;
    height: 40px;
    background: #007BFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: white;
}





## Jqurey code 

$(document).ready(function(){
    $(".slider").slick({
        dots: true,  // Enables dots navigation
        arrows: true, // Enables default arrows
        infinite: true, // Infinite loop
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Move 1 slide at a time
        autoplay: true, // Auto-play enabled
        autoplaySpeed: 3000, // 3-second interval
    });
});


## If I want to add buttons.

<button class="prev-btn">◀ Prev</button>
<button class="next-btn">Next ▶</button>


## Jquery code for btns


$(".slider").slick({
    dots: true,
    arrows: false // Hide default arrows since we are adding custom buttons
});

$(".prev-btn").click(function() {
    $(".slider").slick("slickPrev");
});

$(".next-btn").click(function() {
    $(".slider").slick("slickNext");
});




## Default arrows in slick

/* General arrow styles */
.slick-prev, .slick-next {
    font-size: 0; /* Hide default text */
    width: 45px;
    height: 45px;
    background: #007BFF; /* Background color */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: 0.3s;
}

/* Change color on hover */
.slick-prev:hover, .slick-next:hover {
    background: #0056b3;
}

/* Customize default icons */
.slick-prev:before, .slick-next:before {
    font-size: 22px; /* Icon size */
    color: white; /* Icon color */
}

/* Position adjustments */
.slick-prev {
    left: -50px; /* Move left arrow outside */
}

.slick-next {
    right: -50px; /* Move right arrow outside */
}

/* Responsive: Arrows below the slider on mobile */
@media (max-width: 600px) {
    .slick-prev, .slick-next {
        position: relative;
        left: auto;
        right: auto;
        top: 10px;
        margin: 5px;
    }
    
    .slick-prev {
        float: left;
    }
    
    .slick-next {
        float: right;
    }
}


## What if i want to add custom arrows:

arrows: false


<div class="custom-prev"></div>
<div class="custom-next"></div>


.custom-prev {
    background-image: url('prev-arrow.png'); /* Normal arrow */
}

.custom-prev:hover {
    background-image: url('prev-arrow-hover.png'); /* Hover effect */
}



$(".custom-prev").click(function() {
    $(".slider").slick("slickPrev");
});

$(".custom-next").click(function() {
    $(".slider").slick("slickNext");
});

@media (max-width: 600px) {
    .custom-prev, .custom-next {
        bottom: -50px;
        left: 25%;
        right: auto;
    }

    .custom-next {
        left: auto;
        right: 25%;
    }
}



