export function generateIDForEntity(state) {
  let entityID = 1;
  const IDs = Object.keys(state).map(id => parseInt(id));

  if (Object.keys(state).length > 0) {
    entityID = Math.max(...IDs) + 1;
  }

  return entityID;
}
