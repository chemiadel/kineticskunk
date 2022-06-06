// Components
import Hero from '../src/components/hero';
import InformationList from '../src/components/information-list';

// Images
import HeroImage from '../assets/img/services-hero-img.jpg';
import ImageFirst from '../assets/img/services-img-1.jpg';
import ImageSecond from '../assets/img/services-img-2.jpg';
import ImageThird from '../assets/img/services-img-3.jpg';
import ImageFourth from '../assets/img/services-img-4.jpg';

const ServicesPage = () => (
	<main className="main-services">
		<Hero
			image={HeroImage}
			title="SERVICES"
			description="Through our Continuous DevOps Testing approach, we offer four distinct services for the different needs of our clients."
		/>
		
		<InformationList data={[
			{
				title: 'Digital Testing',
				description: <p>Kinetic Skunk takes a DevOps approach to digital testing so that your solutions are optimised, ready, and perfected for your customers at every stage of development. This means that we progressively and continuously evaluate, optimise and improve your product at every stage of development from your customer’s perspective.</p>,
				href: '/service/digital-testing',
				image: ImageFirst,
			},
			{
				title: 'Performance Engineering',
				description: <p>System bugs and bottlenecks are not only a bad reflection of your software, but also on your business as a whole. Only through rigorous testing and meticulous engineering can you ensure your applications and systems are ready for your customers. Kinetic Skunk offers you both, showing you where your end-product can be improved and how you can improve it.</p>,
				href: '/service/performance-testing',
				image: ImageSecond,
			},
			{
				title: 'Test Modernization',
				description: <p>With Kinetic Skunk’s test modernisation services, we address the key factors that enable the success of DevOps testing throughout your development process. This means that we help you transition to DevOps while avoiding any disruptions to your workflow, team cohesion or development.</p>,
				href: '/service/test-modernization',
				image: ImageThird,
			},
			{
				title: 'DevSecOps',
				description: <p>Kinetic Skunk’s DevSecOps service enables you to fulfil the need for security by enabling you to build secure software that mitigates the risk of data breaches or hacking. Our partnership with Gitlab ensures that every project we complete is up to international standards of cyber security and protection.</p>,
				href: '/service/devsecops',
				image: ImageFourth,
			},
		]} />
	</main>
);

export default ServicesPage;
