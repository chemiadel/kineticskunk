// Components
import Hero from '../src/components/hero';

// Images
import HeroImage from '../assets/img/about-hero-img.jpg';
import DeliveryModelFirst from '../assets/img/delivery-modal-1.jpg';
import DeliveryModelSecond from '../assets/img/delivery-modal-2.jpg';
import DeliveryModelThird from '../assets/img/delivery-modal-3.jpg';
import DeliveryModelFourth from '../assets/img/delivery-modal-4.jpg';
import DeliveryModelFifth from '../assets/img/delivery-modal-5.jpg';

// Animations
import ApproachAnimationFirst from '../assets/img/methodology-animation-1.mp4';
import ApproachAnimationSecond from '../assets/img/methodology-animation-2.mp4';

const MethodologyPage = () => (
	<main className="main-methodology">
		<Hero
			image={HeroImage}
			title="METHODOLOGY"
			description="You may have had some experiences with testing, quality assurance and DevOps solutions in the past, but we can guarantee that it’s nothing like working with us."
		/>

		<section className="methodology">
			<div className="methodology-approach">
				<div className="container">
					<div className="section-head">
						<h3>Our Approach</h3>
					</div>

					<div className="methodology-approach-body">
						<div className="methodology-approach-body-item">
							<div className="row">
								<div className="col-lg-6">
									<div className="methodology-approach-body-item-animation">
										<video autoPlay muted defaultMuted loop playsInline>
											<source src={ApproachAnimationFirst} type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="methodology-approach-body-item-body">
										<p>All Kinetic Skunk’s automated test suites are managed using source control and a git-based feature-branch strategy. Clients have the choice of using ‘stable’ or ‘beta’ automated test packages for testing their software.</p>

										<p>This affords our clients the capability of seamlessly integrating continuous testing into their dev-ops solutions. While we use test automation to achieve instant, reliable results, our approach to continuous testing is much more than this.</p>
									</div>
								</div>
							</div>
						</div>

						<div className="methodology-approach-body-item">
							<div className="row">
								<div className="col-lg-6">
									<div className="methodology-approach-body-item-animation">
										<video autoPlay muted defaultMuted loop playsInline>
											<source src={ApproachAnimationSecond} type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="methodology-approach-body-item-body">
										<p>Kinetic Skunk implements a testing methodology that helps in achieving continuous quality and improvement. We do not simply find issues in your solutions and systems but identify what it would mean for your company as a business risk.</p>

										<p>We prioritise the defects detected through automation and ensure that the most critical concerns are fixed first. In short, while test automation is one of the many tools we use, we are more than that. We become an integral part of your development process to ensure that your business succeeds with the solutions you create.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="methodology-delivery-model">
				<div className="container">
					<div className="section-head">
						<h3>Our Delivery Model</h3>

						<h5>A shift-left approach has been intrinsic to us since we started Kinetic Skunk. Here’s how we do it.</h5>

						<p>We realised early on that the power of testing comes from early, consistent and reliable feedback. Kinetic Skunk was founded upon this strategy, which was coined later as “shift-left” by others. Since then, we’ve created a best-in-class delivery model that uses our shift-left approach to guide your projects towards success and generate value right from the start.</p>
					</div>

					<div className="methodology-delivery-model-body">
						<div className="row">
							<div className="col-lg-4">
								<div className="methodology-delivery-model-body-item">
									<div className="methodology-delivery-model-body-item-hover">
										<h4>Engage & Assessment</h4>

										<p>We start by continually assessing and discussing your needs, objectives and expectations to ensure we understand exactly what is required and the best way to achieve it.</p>
									</div>

									<div className="methodology-delivery-model-body-item-content">
										<div className="methodology-delivery-model-body-item-content-icon" style={{backgroundColor: '#242E35'}}>
											<img src={DeliveryModelFirst} alt="" />
										</div>

										<h4>Engage & Assessment</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="methodology-delivery-model-body-item">
									<div className="methodology-delivery-model-body-item-hover">
										<h4>Strategy & Plan</h4>

										<p>Once we have your specific requirements, we start planning how best to deliver the ideal solution for you. As always, you are included in this step as we discuss and propose potential solutions.</p>
									</div>

									<div className="methodology-delivery-model-body-item-content">
										<div className="methodology-delivery-model-body-item-content-icon" style={{backgroundColor: '#F15723'}}>
											<img src={DeliveryModelSecond} alt="" />
										</div>

										<h4>Strategy & Plan</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="methodology-delivery-model-body-item">
									<div className="methodology-delivery-model-body-item-hover">
										<h4>Build & Implement</h4>

										<p>With the planning completed, we start work on building the solution or implementing the necessary processes to support your requirements. We continuously test our implementation using industry best practices to ensure we are on the right path towards an effective, tailored solution.</p>
									</div>

									<div className="methodology-delivery-model-body-item-content">
										<div className="methodology-delivery-model-body-item-content-icon" style={{backgroundColor: '#fff'}}>
											<img src={DeliveryModelThird} alt="" />
										</div>

										<h4>Build & Implement</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="methodology-delivery-model-body-item">
									<div className="methodology-delivery-model-body-item-hover">
										<h4>Train & Handover</h4>

										<p>Once the build phase is complete, we hand the solution over to you and your organisation. We’ll be on standby during this process for effective training and guidance on how to manage and use your new solution.</p>
									</div>

									<div className="methodology-delivery-model-body-item-content">
										<div className="methodology-delivery-model-body-item-content-icon" style={{backgroundColor: '#F8792C'}}>
											<img src={DeliveryModelFourth} alt="" />
										</div>

										<h4>Train & Handover</h4>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="methodology-delivery-model-body-item">
									<div className="methodology-delivery-model-body-item-hover">
										<h4>Maintenance & Support</h4>

										<p>We understand that, while initial implementation may meet your initial requirements, your needs evolve and change over time. That’s why we stay on-hand to support our implemented solutions for as long as you need.</p>
									</div>

									<div className="methodology-delivery-model-body-item-content">
										<div className="methodology-delivery-model-body-item-content-icon" style={{backgroundColor: '#FAA063'}}>
											<img src={DeliveryModelFifth} alt="" />
										</div>

										<h4>Maintenance & Support</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default MethodologyPage;
