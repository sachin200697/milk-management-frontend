import axios from 'axios';
import actions from './actions';

export const fetchMilkRequests = () => async (dispatch) => {
	try {
		const response = await axios.get('/milk/request/');
		dispatch({
			type: actions.LOAD_MILK_REQUESTS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: actions.LOAD_MILK_REQUESTS_ERROR,
		});
	}
};
