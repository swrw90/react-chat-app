import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

const char = combineReducers({
    messages,
    users
});

export default chat;