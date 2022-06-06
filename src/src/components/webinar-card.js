const WebinarCard = ({ href, image, date, title, description }) => (
	<div className="webinar-card">
		<div className="webinar-card-image">
			<a href={href}>
				<img src={image} alt=""/>
			</a>
		</div>

		<div className="webinar-card-date">
			{date}
			<span>Date</span>
		</div>

		<div className="webinar-card-body">
			<h5><a href={href}>{title}</a></h5>

			<p>{description}</p>
		</div>
	</div>
);

export default WebinarCard;
