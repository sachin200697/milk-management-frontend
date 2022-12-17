const MilkRequest = ({ milkRequest }) => {
	return (
		<tr>
			<td>{milkRequest.userId}</td>
			<td>{milkRequest.milkManId}</td>
			<td>{milkRequest.isAccepted ? 'Accepted' : 'Pending'}</td>
		</tr>
	);
};

export default MilkRequest;
