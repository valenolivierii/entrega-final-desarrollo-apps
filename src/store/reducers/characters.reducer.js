import { characters } from "../../constants/data";
import { characterTypes } from "../types";
const { SELECT_CHARACTERS, SELECT_CHARACTER } = characterTypes;

const initialState = {
  characters: characters,
  filtered: [],
  selected: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHARACTERS:
      const filteredCharacters = characters.filter(
        (character) => character.species == action.species
      );
      return {
        ...state,
        filtered: filteredCharacters,
      };
    case SELECT_CHARACTER:
      const selectedCharacter = characters.find(character => character.name == action.name)
      return {
        ...state,
        selected: selectedCharacter
      }
    default:
      return state;
  }
};

export default charactersReducer;
