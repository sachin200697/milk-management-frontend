import actions from '../actions/actions';

const milkmans = {
	milkMans: [],
	loading: true,
	milkMan: null,
};

export default function milkmanReducer(state = milkmans, action) {
	switch (action.type) {
		case actions.LOAD_MILKMANS:
			return {
				...state,
				milkMans: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}
