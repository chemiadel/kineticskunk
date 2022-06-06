// Packages
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Components
import PartnerCard from './partner-card';

// Styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PartnersSlider = ({ data }) => (
	<section className="partners-slider">
		<div className="container">
			<div className="section-head">
				<h3>Our Partners</h3>
			</div>
			
			<div className="partners-slider-body">
				<Swiper
					pagination={{
						clickable: true,
						el: '.swiper-pagination',
					}}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 30,
						}
					}}
				>
					{data.map((item, index) => <SwiperSlide key={index}><PartnerCard key={index} {...item} /></SwiperSlide>)}
				</Swiper>

				<div className="partners-slider-navigation">
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>

				<div className="swiper-pagination"></div>
			</div>
			<div className="partners-slider-button">
				<Link to="/partners" className="btn btn-primary">LEARN MORE</Link>
			</div>
		</div>
	</section>
);

export default PartnersSlider;