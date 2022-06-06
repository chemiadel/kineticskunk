// Components
import Hero from '../../src/components/hero';

// Images
import HeroImage from '../../assets/img/service-performance-testing-hero-img.jpg';
import ImageFirst from '../../assets/img/performance-testing-img-1.jpg'

const PerformanceTestingPage = () => (
	<main className="main-service">
		<Hero
			image={HeroImage}
			title="PERFORMANCE TESTING"
			description="Only through rigorous performance testing and meticulous performance engineering can you ensure your applications and systems are ready for your customers."
		/>
		
		<section className="service">
			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">Performance Testing and Engineering</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="service-item-content-body">
									<p>System bugs and bottlenecks are not only a bad reflection of your software, but also on your business as a whole. If the products you deliver are not prepared to deal with the pressure of your customers, you’re leaving your success as a business up to chance.</p>

									<p>Kinetic Skunk offers you both, showing you where your end-product can be improved (testing) and how you can improve it (engineering).</p>
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
				<div className="service-item-head is-secondary">
					<div className="container">Testing beyond performance</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="service-item-content-body">
									<p>The performance testing Kinetic Skunk employs goes beyond simply testing if your solution works. We automatically simulate a number of end-users to evaluate your application for speed, stability, scalability, accessibility and responsiveness. With our approach, we can easily and quickly detect any system bugs, bottlenecks, inadequacies or failures and assist in rapid elimination of these defects before release.</p>

									<p>This step is crucial for organisations who want to offer a quality experience to their users and customers. It ensures that you avoid any unnecessary downtime and protect your reputation as a business and software provider.</p>

									<br />
									
									<p>Here are a few of the fundamental performance testing types we provide:</p>

									<ul className="is-full">
										<li>Load testing</li>

										<li>Stress testing</li>

										<li>Scalability testing</li>

										<li>Spike testing</li>

										<li>Volume testing</li>

										<li>Endurance testing</li>
									</ul>

									<p>Your applications are only as good as their performance. It’s what separates one software provider’s competitive advantage to another’s dwindling bottom line. For further details, contact us today or check out our other services like test modernisation, digital testing or big data testing.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-secondary">
					<div className="container">Engineering success</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="service-item-content-body">
									<p>Performance engineering is critical to launching a stable and effective software solution - yet is challenging to address. Unlike regular functional problems, non-functional issues involve numerous different components and parts of the application.</p>

									<p> The bottom line is that non-functional requirement for performance such as throughput, latency, or memory usage are essential to satisfying your end-users, and leaving them unresolved can create heavy technical debt over time. Thus, performance engineering is an important priority for us at Kinetic Skunk.</p>

									<p>With our DevOps-centric process, we use a proactive performance quality engineering strategy that involves performance as an explicit and clear requirement throughout development. This involves the creation of test cases for verifying and fulfilling performance expectations at every stage.</p>

									<p>Here are a few benefits to our performance engineering service:</p>

									<ul className="is-full">
										<li>Predictable production performance and stability</li>
										<li>Enhanced deployment confidence</li>
										<li>Elimination of performance failures</li>
										<li>Increased performance efficiency and reliability</li>
									</ul>

									<p>Take the success of your applications into your own hands with Kinetic Skunk. We’ll help you find the areas you can improve for the betterment of your clients. For further details, contact us today or check out our other services like test modernisation, digital testing or big data testing.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default PerformanceTestingPage;
