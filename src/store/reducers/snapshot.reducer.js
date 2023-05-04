import { snapshotTypes } from "../types";
const { SELECT_SNAPSHOT } = snapshotTypes;

const initialState = {
    snapshot: []
};

const snapshotReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SNAPSHOT:
            const snapshot = { name: action.name, image: action.image }
            return {
                ...state,
                snapshot: snapshot,
            }
        default:
            return state;
    }
};

export default snapshotReducer;
