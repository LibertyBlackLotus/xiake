import { combineReducers } from 'redux';

import sword from './sword';
import user from './user';

export default combineReducers({
	user,
	sword
});