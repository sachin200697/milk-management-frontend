import axios from 'axios';
import actions from './actions';

export const fetchMilkProducers = () => async (dispatch) => {
	try {
		const response = await axios.get('/milk/user/');
		dispatch({
			type: actions.LOAD_MILK_PRODUCERS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: actions.LOAD_MILK_PRODUCERS_ERROR,
		});
	}
};
