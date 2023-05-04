import { snapshotTypes } from "../types";

const { SELECT_SNAPSHOT } = snapshotTypes;

export const selectSnapshot = (name, image) => ({
  type: SELECT_SNAPSHOT,
  name,
  image
});
