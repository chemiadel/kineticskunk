// Components
import PartnerCard from './partner-card';

const PartnersList = ({ data }) => (
	<section className="partners-list">
		<div className="container">
			<div className="section-head">
				<h3>Our Partners</h3>
			</div>

			<div className="partners-list-body">
				<div className="row">
					{data.map((item, index) => (
						<div className="col-lg-4 col-md-6 col-12">
							<PartnerCard key={index} {...item} />
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default PartnersList;