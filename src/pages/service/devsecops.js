// Components
import Hero from '../../src/components/hero';

// Images
import HeroImage from '../../assets/img/service-devsecops-hero-img.jpg';
import ImageFirst from '../../assets/img/devsecops-img-1.jpg';
import ImageSecond from '../../assets/img/devsecops-img-2.jpg';
import ImageThird from '../../assets/img/devsecops-img-3.jpg';
import ImageFourth from '../../assets/img/devsecops-img-4.jpg';

const DevSecOpsPage = () => (
	<main className="main-service">
		<Hero
			image={HeroImage}
			title="DEVSECOPS"
			description="Kinetic Skunk’s DevSecOps service enables software providers to fulfil this need and create quality products that are stable and secure."
		/>
		
		<section className="service">
			<div className="service-item">
				<div className="service-item-head is-primary">
					<div className="container">DevSecOps</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>Security is a primary concern for software developers. A vulnerable system is not simply a threat for businesses but becomes a liability that could have disastrous results for those who use it, effectively destroying the purpose of the produced software solution. It is thus not only a desirable goal, but the responsibility of developers to ensure that their solutions are as secure as they can be before shipping.</p>

									<p>Our approach to DevSecOps optimises your security at every step of the way and seamlessly integrates with your Agile and DevOps processes and tools.</p>

									<p>With Kinetic Skunk’s DevSecOps, you can rest assured that your solutions are secure at every stage of development, and not have to worry about any breaches you may encounter during the course of production.</p>
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
					<div className="container">Benefits of DevSecOps</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="service-item-content-body">
									<p>Our DevSecOps service is designed to benefit your company in a multitude of ways:</p>

									<ul>
										<li>Eliminates vulnerabilities in applications.</li>
										<li>Affords more speed and agility to security teams.</li>
										<li>Instils compliance into development from day one.</li>
										<li>Reduces expenses and delivery time.</li>
										<li>Provides the ability to respond to security changes rapidly.</li>
										<li>Offers a fast speed of recover in the case of a security threat.</li>
										<li>Identifies vulnerabilities early in development.</li>
									</ul>

									<p>Our DevSecOps helps your security and operations team practice and co-operate with your developers from the very beginning of a project. We provide an integrated strategy for your application security and give you the means to execute it in a collaborative and effective way.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service-item">
				<div className="service-item-head is-secondary">
					<div className="container">Official Partner of GitLab</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>As the first South African GitLab partner, we are officially licensed to offer specialised deployment and consulting services that are officially recognised by GitLab. This enables us to help your business develop efficient, integrated end-to-end processes for development through a complete DevSecOps platform.</p>

									<p>Using GitLab, our approach to DevSecOps will give you the power to automate your security processes throughout development. This means that you can continue to deliver software, services and solutions fast without slowing down for security considerations.</p>

									<p>Now, you can integrate security controls and best practices directly into your workflow, automating security and compliance to create an adaptable process for your development and security teams.</p>
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
					<div className="container">The Evolution of Data Security</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>In the past, security measures were simply tacked on at the end of the development cycle, but as developers increasingly adopt Agile and DevOps practices, this approach has become ineffective.</p>

									<p>This is why DevSecOps is the next evolution of security. It ensures that security is made a priority at every stage of development without taking away the productivity of the development and quality assurance teams involved in the production. DevSecOps address security issues as they emerge to guarantee an easier, faster and less expensive solution than any measures taken after shipping.</p>

									<p>In this way, Kinetic Skunk’s DevSecOps can save you time, money and get your product to market faster, in a more reliable manner.</p>
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
					<div className="container">Experience Frictionless Security</div>
				</div>

				<div className="service-item-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="service-item-content-body">
									<p>Above all considerations, security is the most critical to your application’s success. Without robust security measures in place, your software is vulnerable to failure - and so is your business. Don’t let this happen to you. Make security a priority for your development teams and your solutions today, with Kinetic Skunk’s DevSecOps</p>

									<p>For further details, contact us today or check out our other services like test modernisation, performance testing & engineering or digital testing.</p>
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

export default DevSecOpsPage;
