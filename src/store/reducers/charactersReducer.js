import { LOAD_CHARACTER } from "../actions/actionTypes";

const initialState = {
  character: {
    name: "Roberta Drapper",
    home: "Mars",
    species: "Human"
  }
};

export default (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case LOAD_CHARACTER:
      return stateCopy.character;
    default:
      break;
  }
  return stateCopy;
};
