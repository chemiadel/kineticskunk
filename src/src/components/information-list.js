// Components
import InformationCard from './information-card';

const InformationList = ({ data, ...props }) => (
	<section className="information-list" {...props}>
		{data.map((item, index) => (
			<InformationCard key={index} {...item} />
		))}
	</section>
)

export default InformationList;
