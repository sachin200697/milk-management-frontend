const MilkMan = ({ milkman }) => {
	return (
		<tr>
			<td>{milkman.name}</td>
			<td>{milkman.address}</td>
			<td>{milkman.email}</td>
			<td>{milkman.mobile_number}</td>
			<td>{milkman.price}</td>
		</tr>
	);
};

export default MilkMan;
