const BlogCard = ({ href, image, category, date, title, description, showButton }) => (
	<div className="blog-card">
		<div className="blog-card-image">
			<a href={href}>
				<img src={image} alt=""/>
			</a>
		</div>

		<div className="blog-card-body">
			<h6>{category} | {date}</h6>
			<h5><a href={href}>{title}</a></h5>

			<p>{description}</p>

			{showButton && <a href="/" className="btn btn-primary">READ MORE</a>}
		</div>
	</div>
);

export default BlogCard;
