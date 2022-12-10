
const NameCompanyChange = function (newName) {
    return {
      type: "company/change",
      payload: newName,
    };
}
  
const BalanceChange = function (id, newBalance) {
  return {
    type: "balance/change",
    balance: newBalance,
    idClient : id,
  };
}

export {
  NameCompanyChange,
  BalanceChange
}