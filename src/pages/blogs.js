// Components
import Hero from '../src/components/hero';
import BlogCard from '../src/components/blog-card';

// Images
import HeroImage from '../assets/img/partners-hero-img.jpg';
import ResourceCardImage from '../assets/img/resource-card-img.png';

const BlogsPage = () => (
	<main className="main-blogs">
		<Hero
			image={HeroImage}
			title="BLOGS"
			description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, numquam illum assumenda corporis pariatur saepe facere doloremque perspiciatis tempora consectetur ullam sint possimus, voluptates aspernatur sit vero libero unde."
		/>

		<section className="blogs">
			<div className="container">
				<div className="blogs-categories">
					<ul>
						<li><a href="/">Category 1</a></li>
						<li><a href="/">Category 2</a></li>
						<li><a href="/">Category 3</a></li>
					</ul>
				</div>
				<div className="blogs-body">
					<div className="row">
						<div className="col-lg-4">
							<BlogCard
								image={ResourceCardImage}
								category="Category Name"
								date="Date"
								title="Lorem ipsum dolor sit amet, consectetur."
								description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum."
								href="/"
								showButton
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
								showButton
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
								showButton
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
								showButton
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
								showButton
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
								showButton
							/>
						</div>
					</div>
				</div>
			
				<div className="blogs-button">
					<a href="/" class="btn btn-primary">VIEW MORE</a>
				</div>
			</div>
		</section>
	</main>
);

export default BlogsPage;
