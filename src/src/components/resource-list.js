// Components
import ResourceCard from './resource-card';

// Images
import ResourceCardImage from '../../assets/img/resource-card-img.png';

const ResourceList = () => (
	<section className="resource-list">
		<div className="container">
			<div className="section-head">
				<h3>Resource</h3>
			</div>

			<div className="resource-list-body">
				<div className="row">
					<div className="col-lg-6">
						<ResourceCard
							image={ResourceCardImage}
							title="Webinars"
							content={<p>Want to learn about how to create environments that promote the highest quality software? Interested in creating amazing experiences for your end-users? Then our webinars are for you. We host interactive discussions, workshops and courses that are designed to help you achieve your development quality and security goals.</p>}
							href="/webinars"
						/>
					</div>

					<div className="col-lg-6">
						<ResourceCard
							image={ResourceCardImage}
							title="Blogs"
							content={<p>Our blog offers resources, news and education on the latest technology developments and trends. Created by a team of professional writers, developers, quality engineers and industry thought-leaders, our articles always have interesting insights and practical applications for your own business.</p>}
							href="/blogs"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default ResourceList;
