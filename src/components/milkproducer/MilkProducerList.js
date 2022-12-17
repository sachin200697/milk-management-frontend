import { useEffect } from 'react';

import { fetchMilkProducers } from '../../store/actions/milkProducerActionCreator';
import { connect } from 'react-redux';
import MilkProducer from './MilkProducer';

const MilkProducerList = ({ milkProducers, fetchMilkProducers }) => {
	useEffect(() => {
		fetchMilkProducers();
	}, [fetchMilkProducers]);

	if (!milkProducers) {
		return <h2>Loading data....</h2>;
	}

	const renderMilkProducers = () => {
		const milkProducer = milkProducers.map((milkProducer) => {
			return <MilkProducer milkProducer={milkProducer} />;
		});
		return (
			<table>
				<thead>
					<th>Name</th>
					<th>Address</th>
					<th>Email</th>
					<th>Mobile</th>
				</thead>
				<tbody>{milkProducer}</tbody>
			</table>
		);
	};

	return <div>{renderMilkProducers()}</div>;
};

const mapStateToProps = (state) => {
	return {
		milkProducers: state.milkproducers.milkProducers,
	};
};

export default connect(mapStateToProps, { fetchMilkProducers })(
	MilkProducerList,
);
