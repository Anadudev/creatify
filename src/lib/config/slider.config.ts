
export const settings = {
	dots: true,
	// infinite: true,
	speed: 500,
	slidesToShow: 2,
	// slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: "0px",
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
