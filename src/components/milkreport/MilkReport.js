const MilkReport = ({ milkReport }) => {
	return (
		<tr>
			<td>{milkReport.id}</td>
			<td>{milkReport.rId}</td>
			<td>{milkReport.quantity}</td>
			<td>{milkReport.isPaid}</td>
			<td>{milkReport.price}</td>
		</tr>
	);
};

export default MilkReport;
