// Components
import Hero from '../src/components/hero';
import WebinarCardRow from '../src/components/webinar-card-row';

// Images
import HeroImage from '../assets/img/services-hero-img.jpg';
import ResourceCardImage from '../assets/img/resource-card-img.png';

const WebinarsPage = () => (
	<main className="main-webinars">
		<Hero
			image={HeroImage}
			title="WEBINARS"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia aliquam dui, at finibus orci efficitur eu."
		/>
		
		<section className="webinars">
			<div className="container">
				<div className="webinars-title"><h3>Upcoming</h3></div>

				<div className="webinars-list">
					<div className="webinars-list-item">
						<WebinarCardRow
							image={ResourceCardImage}
							title="Lorem ipsum dolor sit amet, consectetur."
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia aliquam dui, at finibus orci efficitur eu. Nunc eu tellus elementum nisl porta faucibus. Quisque iaculis lectus quam, sit amet pulvinar tellus pharetra non. Ut et pharetra ex. Nulla cursus lacinia ex eu ultricies. Vestibulum congue lacus ut luctus blandit."
							href="/"
						/>
					</div>
					<div className="webinars-list-item">
						<WebinarCardRow
							image={ResourceCardImage}
							title="Lorem ipsum dolor sit amet, consectetur."
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia aliquam dui, at finibus orci efficitur eu. Nunc eu tellus elementum nisl porta faucibus. Quisque iaculis lectus quam, sit amet pulvinar tellus pharetra non. Ut et pharetra ex. Nulla cursus lacinia ex eu ultricies. Vestibulum congue lacus ut luctus blandit."
							href="/"
						/>
					</div>
					<div className="webinars-list-item">
						<WebinarCardRow
							image={ResourceCardImage}
							title="Lorem ipsum dolor sit amet, consectetur."
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia aliquam dui, at finibus orci efficitur eu. Nunc eu tellus elementum nisl porta faucibus. Quisque iaculis lectus quam, sit amet pulvinar tellus pharetra non. Ut et pharetra ex. Nulla cursus lacinia ex eu ultricies. Vestibulum congue lacus ut luctus blandit."
							href="/"
						/>
					</div>
					<div className="webinars-list-item">
						<WebinarCardRow
							image={ResourceCardImage}
							title="Lorem ipsum dolor sit amet, consectetur."
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia aliquam dui, at finibus orci efficitur eu. Nunc eu tellus elementum nisl porta faucibus. Quisque iaculis lectus quam, sit amet pulvinar tellus pharetra non. Ut et pharetra ex. Nulla cursus lacinia ex eu ultricies. Vestibulum congue lacus ut luctus blandit."
							href="/"
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default WebinarsPage;
