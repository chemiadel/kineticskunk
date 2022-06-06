// Components
import Hero from '../src/components/hero';
import WebinarCard from '../src/components/webinar-card';
import PressReleaseCard from '../src/components/pressrelease-card';
import BlogCard from '../src/components/blog-card';

// Images
import HeroImage from '../assets/img/KS-Header-Resources_1366x678.png';
import ResourceCardImage from '../assets/img/resource-card-img.png';
import PressReleaseCardImage from '../assets/img/KS-Resources-Press-Release-Thumbnail-Gitlab-Partner_1366x678@3x.jpg'
import MicroServiceCardImage from '../assets/img/microservices-ks-gitlab.png'

const ResourcePage = () => (
	<main className="main-resource">
		<Hero
			image={HeroImage}
			title="RESOURCES"
			description="Discover helpful insights, practical applications and interesting case studies on how you can ensure quality throughout development."
		/>
		
		<section className="resource">
			<div className="container">
				<div className="resource-item">
					<div className="resource-item-title"><h5>Press Releases</h5></div>

					<div className="resource-item-body">
						<div className="row">
							<div className="col-lg-4">
								<PressReleaseCard
									image={PressReleaseCardImage}
									date={'27 JULY 2021'}
									title="Kinetic Skunk Achieves Professional Services Partner Status with GitLab"
									description="Kinetic Skunk today announced it has achieved Professional Services Certified Partner status in the GitLab Channel Services Program. Customers rely on GitLab’s unified open DevOps platform to streamline software development complexity, increase productivity, and accelerate time to market."
									href="/press/gitlab"
								/>
							</div>
							<div className="col-lg-4">
								<PressReleaseCard
									image={MicroServiceCardImage}
									date={'27 JULY 2021'}
									title="Implementing a Microservices Approach to Software Testing using Gitlab and Kubernetes"
									description="Project testing doesn’t have to be a 10-tool-affair. You can avoid information silos, increase team visibility and implement faster, scalable DevOps testing with Microservices."
									href="/press/microservices"
								/>
							</div>							
						</div>
					</div>
				
					<div className="resource-item-button">
						<a href="/" class="btn btn-primary">LEARN MORE</a>
					</div>
				</div>


				{/*<div className="resource-item">
					<div className="resource-item-title"><h5>Blogs</h5></div>

					<div className="resource-item-body">
						<div className="row">
							<div className="col-lg-4">
								<BlogCard
									image={ResourceCardImage}
									category="Category Name"
									date="Date"
									title="Lorem ipsum dolor sit amet, consectetur."
									description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum."
									href="/"
								/>
							</div>
							<div className="col-lg-4">
								<BlogCard
									image={ResourceCardImage}
									category="Category Name"
									date="Date"
									title="Lorem ipsum dolor sit amet, consectetur."
									description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum."
									href="/"
								/>
							</div>
							<div className="col-lg-4">
								<BlogCard
									image={ResourceCardImage}
									category="Category Name"
									date="Date"
									title="Lorem ipsum dolor sit amet, consectetur."
									description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum."
									href="/"
								/>
							</div>
						</div>
					</div>
				
					<div className="resource-item-button">
						<a href="/" class="btn btn-primary">LEARN MORE</a>
					</div>
</div> */ }
			</div>
		</section>
	</main>
);

export default ResourcePage;
