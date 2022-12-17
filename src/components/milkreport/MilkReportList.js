import { useEffect } from 'react';

import { fetchMilkReports } from '../../store/actions/milkActionCreator';
import { connect } from 'react-redux';
import MilkReport from './MilkReport';

const MilkReportList = ({ milkReports, fetchMilkReports }) => {
	useEffect(() => {
		fetchMilkReports();
	}, [fetchMilkReports]);

	if (!milkReports) {
		return <h2>Loading data....</h2>;
	}

	const renderMilkReports = () => {
		console.log(milkReports);
		const milkReport = milkReports.map((milkReport) => {
			return <MilkReport milkReport={milkReport} />;
		});
		return (
			<table>
				<thead>
					<th>Id</th>
					<th>RID</th>
					<th>Quantity</th>
					<th>IsPaid</th>
					<th>Price(/ltr)</th>
				</thead>
				<tbody>{milkReport}</tbody>
			</table>
		);
	};

	return <div>{renderMilkReports()}</div>;
};

const mapStateToProps = (state) => {
	return {
		milkReports: state.milkreports.milkReports,
	};
};

export default connect(mapStateToProps, { fetchMilkReports })(MilkReportList);
