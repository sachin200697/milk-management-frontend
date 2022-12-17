import actions from '../actions/actions';

const milkproducers = {
	milkProducers: [],
	loading: true,
	milkProducer: null,
};

export default function milkProducerReducer(state = milkproducers, action) {
	switch (action.type) {
		case actions.LOAD_MILK_PRODUCERS:
			return {
				...state,
				milkProducers: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}
