import { characterTypes } from "../types";

const { SELECT_CHARACTERS, SELECT_CHARACTER } = characterTypes;

export const selectCharacters = (species) => ({
  type: SELECT_CHARACTERS,
  species: species,
});

export const selectCharacter = (name) => ({
  type: SELECT_CHARACTER,
  name: name
})
