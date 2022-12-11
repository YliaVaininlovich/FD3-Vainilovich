import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: 'A1',
  clientsArr : [
          { id: 101, fio: "Иванов И.И.", balance: 200 },
          { id: 105, fio: "Сидоров С.С.", balance: 250 },
          { id: 110, fio: "Петров П.П.", balance: 180 },
          { id: 120, fio: "Григорьев Г.Г.", balance: 220 },
      ]
  
};

const mobileCompanySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    changeName(state, action) {
      state.companyName = action.payload.companyName;
    },

    changeBalance(state, action) {
      state.clientsArr.forEach((c, i) => {
        if (c.id === action.payload.idClient) {
          let newClient = { ...c }; // копия хэша изменившегося клиента
          newClient.balance = action.payload.balance;
          state.clientsArr[i] = newClient;
        }
      })
    }
  }
  });


const {actions, reducer:mobileCompanyReducer} = mobileCompanySlice
const {changeName, changeBalance} = actions

export const NameCompanyChange = function (newName) {
  return changeName(newName);
}
 
export const BalanceChange = function (id, newBalance) {
  return changeBalance({
    balance: newBalance,
    idClient : id
  })
}


export default mobileCompanyReducer

