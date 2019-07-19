import { TEST_DEMO } from '../actions/types';
  
const initialState = {
    posts: [],
    post: {},
    loading: false
};
 
export default function(state = initialState, action) {
    switch (action.type) {
        case TEST_DEMO:
        return {
            name: 'test',
            loading: true
        };
        default:
        return state;
    }
}