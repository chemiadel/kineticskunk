const ResourceCard = ({ image, href, title, content, ...props }) => (
	<div className="resource-card" {...props}>
		<div className="resource-card-image">
			<a href={href}>
				<img src={image} alt=""/>
			</a>
		</div>

		<div className="resource-card-body">
			<h4><a href={href}>{title}</a></h4>

			{content}

			<a href={href} className="btn btn-primary">LEARN MORE</a>
		</div>
	</div>
);

export default ResourceCard;