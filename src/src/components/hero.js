const Hero = ({ image, title, description, isHome }) => (
	<section className={`hero${isHome ? ' is-home' : ''}`} style={{ backgroundImage: `url(${image})` }}>
		<div className="hero-contain">
			<div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
				{title && <h1>{title}</h1>}

				{description && <p>{description}</p>}
			</div>
		</div>
	</section>
);

export default Hero;
