const PartnerCard = ({ href, image, name, target, rel, description, ...props }) => (
	<a href={href} target={target} rel={rel} {...props}>
		<div className="partner-card">
			<img src={image} alt="" />
			
			<h5>{name}</h5>

			{description && <p>{description}</p>}
		</div>
	</a>
);

PartnerCard.defaultProps = {
	target: '_self',
	rel: '',
};

export default PartnerCard;
