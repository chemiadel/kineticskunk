// Components
import Hero from '../../src/components/hero';

// Images
import HeroImage from '../../assets/img/service-digital-testing-hero-img.jpg';
import ImageFirst from '../../assets/img/digital-testing-img-1.jpg'
import ImageSecond from '../../assets/img/digital-testing-img-2.jpg'
import ImageThird from '../../assets/img/digital-testing-img-3.jpg'
import ImageFourth from '../../assets/img/digital-testing-img-4.jpg'

const DigitalTestingPage = () => (
	<main className="main-service">
		<Hero
			image={HeroImage}
			title="DIGITAL TESTING"
			description="Kinetic Skunk takes a DevOps approach to digital testing so that your solutions are optimised, ready, and perfected for your customers at every stage of development."
		/>
		
		<section className="service">
			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Digital Testing</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="service-item-content-body">
									<p>The world is going digital - and so is your business whether you want it to or not. Just as your website is your new storefront to the world, your customer experience is how your customers will remember your company. It thus makes sense to ensure that experience is a consistent, quality and authentic one.</p>

									<p> This means that we progressively and continuously evaluate, optimise and improve your product at every stage of development from your customer’s perspective. With our DevOps digital testing for web and mobile applications, you can guarantee a quality experience for your customers that they will remember for years to come.</p>

									<p> Today, customers want the best service possible available to them within a few clicks and naturally expect services that they may not even be consciously aware of. We understand your customer expectations and apply their mindset during development to improve the quality, experience and sustainability of your solutions faster than ever.</p>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="service-item-content-image">
									<img src={ImageFirst} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Put us to the test</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="service-item-content-body">
									<p>Our holistic approach to digital testing can be applied to improve the quality of any digital application from multiple perspectives:</p>

									<ul>
										<li>Mobile testing</li>
										<li>Usability testing</li>
										<li>Security testing</li>
										<li>Cross-browser testing</li>
										<li>Multi-channel testings</li>
										<li>Accessibility testing</li>
										<li>Performance testing</li>
										<li>Cloud testing</li>
										<li>Test automation</li>
										<li>Big data testing</li>
										<li>L10N & L18N testing</li>
									</ul>

									<p>With Kinetic skunk, we ensure that your digital applications are prepared. Our DevOps digital testing and quality assurance help you mitigate risk, find software vulnerabilities, reduce the time to market and enhance your competitive advantage.</p>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="service-item-content-image">
									<img src={ImageSecond} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-secondary">
					<div className="container">The tech behind the test</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>Your customers expect your software to be available at all times - that’s why our testing is too. All of our digital testing suites are automated and based on “shift-left” strategies to constantly evaluate and identify optimisations for your solution. This means you get continuous integration, delivery and testing at the same time, all the time!</p>

									<p> All of our automated test suites are managed using industry-tested, best of class tools to ensure availability throughout your software development. With Kinetic Skunk, you will always have the choice of using ‘stable’ or ‘beta’ test releases to seamlessly integrate automated testing and continuous testing into your dev-ops solutions.</p>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="service-item-content-image">
									<img src={ImageThird} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Your optimal solution is just a click away</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>Whether you operate in telecoms, retail, banking, social media, digital marketing, analytics, mobile applications, the cloud or something in-between there is only one constant: without an optimised digital solution, your competitors will have an edge. Kinetic Skunk’s DevOps digital testing will not only optimise your solutions but also secure a greater competitive advantage over your rivals.</p>

									<p> For further details, contact us today or check out our other services like test modernisation, performance testing & engineering or big data testing.</p>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="service-item-content-image">
									<img src={ImageFourth} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default DigitalTestingPage;
