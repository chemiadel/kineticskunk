const MethodologyCard = ({ image, description, ...props }) => (
	<div className="methodology-card" {...props}>
		<img src={image} alt="" />

		{description}
	</div>
);

export default MethodologyCard;
