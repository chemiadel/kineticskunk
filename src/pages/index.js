// Components
import PartnersSlider from '../src/components/partners-slider';
import Services from '../src/components/services';
// import ResourceList from '../src/components/resource-list';
import InformationList from '../src/components/information-list';

// Images
import HeroVideo from '../assets/img/video.mp4';
import AboutImage from '../assets/img/information-card-img-1.jpg';
import OurMethodologyImage from '../assets/img/information-card-img-2.jpg';
import PartnerSpike95 from '../assets/img/spike-black.png';
import PartnerXRay from '../assets/img/partner-xray.png';
import PartnerGitLab from '../assets/img/partner-gitlab.png';
import PartnerAWS from '../assets/img/aws.png';
import ServicesImageFirst from '../assets/img/services-icon-1.png';
import ServicesImageSecond from '../assets/img/services-icon-2.png';
import ServicesImageThird from '../assets/img/services-icon-3.png';
import ServicesImageFourth from '../assets/img/services-icon-4.png';

const HomePage = () => (
	<>
		<section className="hero is-home">
			<video autoPlay muted defaultMuted loop playsInline id="vid">
				<source src={HeroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</section>

		<InformationList data={[
			{
				title: 'About Us',
				description: <p>Trust, integrity, reliability - these are the qualities we hold ourselves to which are reflected in our customer’s applications. As a software quality assurance solutions provider, we engineer flawless user experiences with our unique approach to Continuous Testing and DevOps environments. We enable you to maximise efficiency, mitigate vulnerability and reduce your time to market.</p>,
				href: '/about',
				image: AboutImage,
			},
			{
				title: 'Our Methodology',
				description: <p>Our team of engineers employ a scientific approach to detect and prevent defects early, streamlining your development and ensuring success with your customers, production and business reputation. Our approach provides immediate feedback on risks and optimisations with every release to enhance software quality and expand your bottom line.</p>,
				href: '/methodology',
				image: OurMethodologyImage,
			},
		]} />

		<Services data={[
			{
				image: ServicesImageFirst,
				title: 'Digital Testing',
				description: <p>Customer service has become a digital experience. Our digital testing services ensure your customer experience is the best one possible with state-of-the-art testing tools and methods.</p>,
				href: '/service/digital-testing',
			},
			{
				image: ServicesImageSecond,
				title: 'Performance Testing',
				description: <p>Speed, response, stability, reliability, scalability and resources: all of these concepts are critical to your applications. We offer the solution to optimising them with our performance testing.</p>,
				href: '/service/performance-testing',
			},
			{
				image: ServicesImageThird,
				title: 'Test Modernization',
				description: <p>Transition to superior DevOps testing without any disruptions to your workflow. Our Test Modernisation services ensure success throughout your development process.</p>,
				href: '/service/test-modernization',
			},
			{
				image: ServicesImageFourth,
				title: 'DevSecOps',
				description: <p>Our DevSecOps approach with Gitlab is held to international standards. Empower your software security at every stage of development and mitigate the risk of data breaches or hacking.</p>,
				href: '/service/devsecops',
			},
		]} />

		<PartnersSlider data={[
			{
				image: PartnerSpike95,
				name: 'Spike95',
				href: '/partners',
			},
			{
				image: PartnerXRay,
				name: 'XRay by Xblend',
				href: '/partners',
			},
			{
				image: PartnerGitLab,
				name: 'Gitlab',
				href: '/partners',
			},
			{
				image: PartnerAWS,
				name: 'AWS',
				href: '/partners',
			},
		]} />

		{/* <ResourceList /> */}
	</>
);

export default HomePage;
