const ServicesItem = ({ image, title, description, href, ...props }) => (
	<div className="services-item">
		<img src={image} alt="" />
		
		<h5>{title}</h5>

		{description}

		<a href={href} className="btn btn-primary">LEARN MORE</a>
	</div>
)

const Services = ({ data, ...props }) => (
	<section className="services" {...props}>
		<div className="container">
			<div className="section-head">
				<h3>Our Services</h3>
			</div>

			<div className="services-body">
				<div className="row">
					{data.map((item, index) => (
						<div className="col-lg-3 col-md-6 col-12" key={index}>
							<ServicesItem {...item} />
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default Services;