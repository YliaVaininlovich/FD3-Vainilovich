
const NameCompanyChange = function (newName) {
    return {
      type: "company/change",
      payload: newName,
    };
}
  
export {
    NameCompanyChange
}