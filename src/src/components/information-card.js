import { Link } from 'react-router-dom';

const InformationCard = ({ title, description, href, image, showButton, ...props }) => (
	<div className="information-card" {...props}>
		<div className="container">
			<div className="row">
				<div className="col-lg-5 col-md-12">
					<div className="information-card-body">
						<h4>{title}</h4>

						{description}

						{showButton && <Link to={href} className="btn btn-primary">LEARN MORE</Link>}
					</div>
				</div>

				<div className="col-lg-6 col-md-12">
					<div className="information-card-image">
						<img src={image} alt="" />
						
						<div className="information-card-image-triangles">
							<svg width="220" height="83" viewBox="0 0 220 83" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M118 58L169.5 0L67.5 0L118 58Z" fill="#28353D"/>
								<path d="M169.5 25L118 83H220L169.5 25Z" fill="#F1582A"/>
								<path d="M51.5 13L0 71H102L51.5 13Z" fill="#FF7F08"/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

InformationCard.defaultProps = {
	showButton: true,
};

export default InformationCard;
