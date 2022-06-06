const WebinarCardRow = ({ href, image, date, title, description }) => (
	<div className="webinar-card-row">
		<div className="webinar-card-row-image">
			<a href={href}>
				<img src={image} alt=""/>
			</a>
		</div>

		<div className="webinar-card-row-body">
			<h5><a href={href}>{title}</a></h5>

			<p>{description}</p>

			<a href={href} className="btn btn-primary">REGISTER</a>
		</div>
	</div>
);

export default WebinarCardRow;
