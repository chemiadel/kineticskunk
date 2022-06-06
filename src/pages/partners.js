// Components
import Hero from '../src/components/hero';
import PartnersList from '../src/components/partners-list';

// Images
import HeroImage from '../assets/img/partners-hero-img.jpg';
import PartnerSpike95 from '../assets/img/spike-black.png';
import PartnerXRay from '../assets/img/partner-xray.png';
import PartnerGitLab from '../assets/img/partner-gitlab.png';
import PartnerAWS from '../assets/img/aws.png';

const PartnersPage = () => (
	<main className="main-partners">
		<Hero
			image={HeroImage}
			title="PARTNERS"
			description="We’ve developed relationships with the best in the business. Our partners enrich our work for the benefit of our clients."
		/>
		
		<PartnersList data={[
			{
				image: PartnerSpike95,
				name: 'Spike95',
				description: 'Spike are retail technology experts delivering end-to-end, go-live confidence for the biggest retail brands.',
				target: '_blank',
				rel: 'noreferrer',
				href: 'https://www.spike95.co.uk/',
			},
			{
				image: PartnerXRay,
				name: 'XRay by Xblend',
				description: 'XRay delivers cutting edge Test Modernisation Services, unifying development and testing across data silos. Xray is used by over 5.6 million users including BMW, Samsung and Airbus.',
				target: '_blank',
				rel: 'noreferrer',
				href: 'https://www.getxray.app/',
			},
			{
				image: PartnerGitLab,
				name: 'Gitlab',
				description: 'Gitlab offers baked-in security that helps you mitigate risk, make informed decisions and build automated decision-making throughout testing and quality processes.',
				target: '_blank',
				rel: 'noreferrer',
				href: 'https://about.gitlab.com/',
			},
			{
				image: PartnerAWS,
				name: 'AWS',
				description: 'AWS helps to manage and scale servers.',
				target: '_blank',
				rel: 'noreferrer',
				href: 'https://aws.amazon.com/',
			},
		]} />
	</main>
);

export default PartnersPage;
