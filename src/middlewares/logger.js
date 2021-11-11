const logger = store => next => action => {
  //console
    console.group(action.type);
    console.log('The action:', action);
    const returnValuee = next(action);
    const returnValue = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    console.log(returnValuee);
    return returnValue;
  };
  export default logger;