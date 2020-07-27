export const createActionTypes = (actionTypes: any = {}, duckName = 'DUCK'): any => {
  return Object.keys(actionTypes).reduce(
    (res, key) => ({
      ...res,
      [key]: `${duckName.toUpperCase()}_DUCK/${actionTypes[key].toUpperCase()}`
    }),
    {}
  );
};
