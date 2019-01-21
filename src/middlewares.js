export const logger = store => next => action => {
  console.log(action.type, "Fired!!");
  next(action);
}

export const arrayMiddleware = store => next => action => {
  if(Array.isArray(action)) {
    return action.map(ac => store.dispatch(ac));
  }
  return next(action);
}

export const fnMiddleware = store => next => action => {
  if(typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
}