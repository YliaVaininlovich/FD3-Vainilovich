
export function reducer(state, action) {
    switch (action.type) {
      case "company/change":
        let newState;
        newState = { ...state,  companyName : action.payload.companyName};  
            console.log('state после обработки редьюсером:',newState);
        return newState;
    
      default:
        return state
    }
  }

