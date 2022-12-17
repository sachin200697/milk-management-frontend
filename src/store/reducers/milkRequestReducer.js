import actions from '../actions/actions';

const milkrequests = {
	milkRequests: [],
	loading: true,
	milkRequest: null,
};

export default function milkRequestReducer(state = milkrequests, action) {
	switch (action.type) {
		case actions.LOAD_MILK_REQUESTS:
			return {
				...state,
				milkRequests: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}
