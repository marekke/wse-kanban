export function generateIDForEntity(state, selector) {
  let entityID = 1;
  let IDs;

  if (selector) {
    IDs = Object.keys(state[selector]).map(id => parseInt(id));
  } else {
    IDs = Object.keys(state).map(id => parseInt(id));
  }


  if (Object.keys(state).length > 0) {
    entityID = Math.max(...IDs) + 1;
  }

  return entityID;
}
