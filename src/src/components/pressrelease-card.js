const PressReleaseCard = ({ href, image, date, title, description }) => (
	<div className="press-release-card">
		<div className="press-release-card-image">
			<a href={href}>
				<img src={image} alt=""/>
			</a>
		</div>

		<div className="press-release-card-body">
			<h6>{date}</h6>
			<h5><a href={href}>{title}</a></h5>

			<p>{description}</p>

			<a href={href} className="btn">READ MORE</a>
		</div>
	</div>
);

export default PressReleaseCard;
