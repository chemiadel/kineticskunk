// Components
import Hero from '../src/components/hero';
import InformationList from '../src/components/information-list';

// Images
import HeroImage from '../assets/img/methodology-hero-img.jpg';
import ImageFirst from '../assets/img/about-us-img-1.jpg';
import ImageSecond from '../assets/img/about-us-img-2.jpg';
import ImageThird from '../assets/img/about-us-img-3.jpg';

const ServicesPage = () => (
	<main className="main-about">
		<Hero
			image={HeroImage}
			title="ABOUT US"
			description="We’re the link that builds the trust between your end-users and your company. The hero for the modern age power-user and software developer alike. We are Kinetic Skunk."
		/>
		
		<InformationList data={[
			{
				title: 'About Us',
				description: <p>Kinetic Skunk is a software quality assurance solutions provider - but we’re much more than that. We provide the link between reliable software and your customers’ trust. We may provide test-left software quality assurance, but we really provide the single-most authentic way to develop and nurture your customer relationships.</p>,
				image: ImageFirst,
				showButton: false,
			},
			{
				title: 'Our Mission',
				description: <p>Kinetic Skunk aims to be the only measure you need to develop quality software. Your software quality objectives become our highest priority. As such we place the utmost importance and value on developing and nurturing strategic relationships. These relationships are built on absolute integrity, mutual trust and our passion for performance.</p>,
				image: ImageSecond,
				showButton: false,
			},
			{
				title: 'What We Do',
				description: <p>Our unique approach offers you a distinct advantage that your (and our) competitors do not have. We go beyond the typical processes and employ shift-left, scientific methods to find the true cause of your software challenges while insulating your company and your development from potential pitfalls in the future.</p>,
				image: ImageThird,
				showButton: false,
			},
		]} />
	</main>
);

export default ServicesPage;
