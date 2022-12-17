import axios from 'axios';
import actions from './actions';

export const fetchMilkMans = () => async (dispatch) => {
	try {
		const response = await axios.get('/milk/milkman/');
		dispatch({
			type: actions.LOAD_MILKMANS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: actions.LOAD_MILKMANS_ERROR,
		});
	}
};
