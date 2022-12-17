import axios from 'axios';
import actions from './actions';

export const fetchMilkReports = () => async (dispatch) => {
	try {
		const response = await axios.get('/milk/milk/');
		dispatch({
			type: actions.LOAD_MILK_REPORTS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: actions.LOAD_MILK_REPORTS_ERROR,
		});
	}
};
