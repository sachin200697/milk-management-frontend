const MilkProducer = ({ milkProducer }) => {
	return (
		<tr>
			<td>{milkProducer.name}</td>
			<td>{milkProducer.address}</td>
			<td>{milkProducer.email}</td>
			<td>{milkProducer.mobile_number}</td>
		</tr>
	);
};

export default MilkProducer;
