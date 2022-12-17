import { useEffect } from 'react';

import { fetchMilkRequests } from '../../store/actions/milkRequestActionCreator';
import { connect } from 'react-redux';
import MilkRequest from './MilkRequest';

const MilkRequestList = ({ milkRequests, fetchMilkRequests }) => {
	useEffect(() => {
		fetchMilkRequests();
	}, [fetchMilkRequests]);

	if (!milkRequests) {
		return <h2>Loading data....</h2>;
	}

	const renderMilkRequests = () => {
		console.log(milkRequests);
		const milkRequest = milkRequests.map((milkRequest) => {
			return <MilkRequest milkRequest={milkRequest} />;
		});
		return (
			<table>
				<thead>
					<th>Producer</th>
					<th>MilkRequest</th>
					<th>IsAccepted</th>
				</thead>
				<tbody>{milkRequest}</tbody>
			</table>
		);
	};

	return <div>{renderMilkRequests()}</div>;
};

const mapStateToProps = (state) => {
	return {
		milkRequests: state.milkrequests.milkRequests,
	};
};

export default connect(mapStateToProps, { fetchMilkRequests })(MilkRequestList);
