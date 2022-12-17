import actions from '../actions/actions';

const milkreports = {
	milkReports: [],
	loading: true,
	milkReport: null,
};

export default function milkReportReducer(state = milkreports, action) {
	switch (action.type) {
		case actions.LOAD_MILK_REPORTS:
			return {
				...state,
				milkReports: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}
