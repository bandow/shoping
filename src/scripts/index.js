import '../../src/sass/index.scss';
import '../../src/scripts/swiper.min.js';
var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',
	autoplay :5000,
	speed:100,
	//pagination : '#swiper-pagination1',
});
var mySwiperRecommendHouse = new Swiper('.special-container',{
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	spaceBetween : 10,
	slidesPerView :2.5,
	// loop : true,
});