import { useEffect } from 'react';

import { fetchMilkMans } from '../../store/actions/milkmanActionCreator';
import { connect } from 'react-redux';
import MilkMan from './MilkMan';

const MilkManList = ({ milkMans, fetchMilkMans }) => {
	useEffect(() => {
		fetchMilkMans();
	}, [fetchMilkMans]);

	if (!milkMans) {
		return <h2>Loading data....</h2>;
	}

	const renderMilkMans = () => {
		const milkMan = milkMans.map((milkman) => {
			return <MilkMan milkman={milkman} />;
		});
		return (
			<table>
				<thead>
					<th>Name</th>
					<th>Address</th>
					<th>Email</th>
					<th>Mobile</th>
					<th>Price(/ltr)</th>
				</thead>
				<tbody>{milkMan}</tbody>
			</table>
		);
	};

	return <div>{renderMilkMans()}</div>;
};

const mapStateToProps = (state) => {
	return {
		milkMans: state.milkmans.milkMans,
	};
};

export default connect(mapStateToProps, { fetchMilkMans })(MilkManList);
