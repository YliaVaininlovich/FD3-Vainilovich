
export function reducer(state, action) {
  let newState;
    switch (action.type) {
      case "company/change":
        newState = { ...state,  companyName : action.payload.companyName};  
        return newState;
    
      case "balance/change":
        let newClients = [...state.clientsArr]; // копия самого массива клиентов
        newClients.forEach((c, i) => {
          if (c.id === action.idClient) {
            let newClient = { ...c }; // копия хэша изменившегося клиента
            newClient.balance = action.balance;
            newClients[i] = newClient;
          }
        });
        newState = { ...state, clientsArr: newClients };
        return newState;
      
      default:
        return state
    }
  }

