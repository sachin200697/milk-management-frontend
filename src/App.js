import axios from 'axios';

function App() {
	const apiCall = async () => {
		const response = await axios.get('http://localhost:8000/milk/user/');
		console.log(response.data);
	};
	apiCall();

	return <div className='App'>Sachin</div>;
}

export default App;
