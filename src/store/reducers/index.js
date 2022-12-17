import { combineReducers } from 'redux';

import milkmanReducer from './milkmanReducer';
import milkProducerReducer from './milkProducerReducer';
import milkReportReducer from './milkReportReducer';
import milkRequestReducer from './milkRequestReducer';

export default combineReducers({
	milkmans: milkmanReducer,
	milkproducers: milkProducerReducer,
	milkrequests: milkRequestReducer,
	milkreports: milkReportReducer,
});
