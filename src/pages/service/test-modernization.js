// Components
import Hero from '../../src/components/hero';

// Images
import HeroImage from '../../assets/img/service-test-modernization-hero-img.jpg';
import ImageFirst from '../../assets/img/test-modernization-img-1.jpg';
import ImageSecond from '../../assets/img/test-modernization-img-2.jpg';
import ImageThird from '../../assets/img/test-modernization-img-3.jpg';

const TestModernizationPage = () => (
	<main className="main-service">
		<Hero
			image={HeroImage}
			title="TEST MODERNIZATION"
			description="With Kinetic Skunk’s test modernisation services, you can increase the reliability of your deployments now and into the future with DevOps testing."
		/>
		
		<section className="service">
			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Test Modernisation</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>The software of today does not always meet the needs of the user tomorrow. Ensuring that your applications match the demands of businesses in the long-term before it’s even been deployed can be daunting. A DevOps approach to software testing can assist this process, but the impact it has must be considered before any major changes take place.</p>

									<p>We address the key factors that enable the success of DevOps testing throughout your development process. This means that we help you transition to DevOps while avoiding any disruptions to your workflow, team cohesion or development</p>
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
					<div className="container">Seamless DevOps Integration</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="service-item-content-body">
									<p>At Kinetic Skunk, we help you achieve the vast advantages that that DevOps offers such as cost and error reductions, faster delivery and increased collaboration by guiding you on the best practices and tools available. Through a proper automated testing framework, we can show you the benefits of DevOps with our QA and test automation capabilities.</p>

									<p>Some of the factors we address include:</p>

									<ul>
										<li>Team cohesion and structure</li>
										<li>Continuous testing</li>
										<li>Implementation and use of automation</li>
										<li>Continuous assessment and monitoring</li>
										<li>Improvement opportunities in quality assurance</li>
										<li>Continuous assessment and monitoring</li>
										<li>Continuous automation</li>
										<li>Proliferation of testing tools and assets</li>
										<li>Continuous integration</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Designed for quality</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>Our approach to test modernisation is designed to help your applications achieve a level of quality that matches the expectations of today and tomorrow through DevOps. With Kinetic Skunk, you can manage and improve your software delivery by identifying gaps in your solution and replacing them with best-practice alternatives for a seamless transition into DevOps-centric testing.</p>

									<p>We understand that every company is different. Some may focus on streamlining their manual processes while others might be tackling the new automation and testing tools they’ve acquired. No matter where you are in your journey, Kinetic Skunk is here to provide a testing solution for you that is optimised for all the various challenges that modern QA and DevTest teams face.</p>
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
				<div className="service-item-head is-primary">
					<div className="container">One Solution, multiple applications</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>The products and solutions that have stood the test of time all have one thing in common - they prepared for the future. DevOps testing is that future, but every enterprise needs a solid foundation on which to build it upon. Kinetic Skunk enables your company to develop that rock-solid base to help you expose change impacts, modernise your testing and accelerate your release cycle.</p>

									<p>For further details, contact us today or check out our other services like digital testing, performance testing & engineering, or big data testing.</p>
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
		</section>
	</main>
);

export default TestModernizationPage;
