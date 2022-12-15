import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books : [],
  search: "js",
  sort: "relevance",
  idDisabled: false,
  currentPage: 1,
  pageSize : 12
};

const booksShopSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

    initState(state, action) {
      state.books = [...action.payload.newBookList];
    },

    updatetState(state, action) {
      state.books = [...state.books, ...action.payload.newBookList];
    },

    deleteBook(state, action) {
      state.books = [...action.payload.newBookList];
    },
  
    searhModify(state, action) {
      state.search =action.payload.newSearch;
    },

    sortModify(state, action) {
      state.sort =action.payload.newSort;
    },
    changeIsDisabled(state, action) {
      state.idDisabled = action.payload.IsDisabled;
    },

    changeActivePage(state, action) {
      state.currentPage = action.payload.currentPage;
    },
  }
  });


const {actions, reducer:booksShopReducer} = booksShopSlice
const { initState,
  updatetState,
  deleteBook,
  searhModify,
  sortModify,
  changeIsDisabled,
  changeActivePage} = actions

export const initBooksList = function (booksList) {
  return initState(
    { newBookList: [...booksList] }
  );
}
 
export const updateBooksList = function (booksList) {
  return updatetState(
    { newBookList: [...booksList] }
  );
}

export const removeBook = function (booksList) {
  return deleteBook(
    { newBookList: [...booksList] }
  );
}

export const searhChange = function (search) {
  return searhModify(
    { newSearch:  search}
  );
}

export const sortChange = function (sort) {
  return sortModify(
    { newSort:  sort}
  );
}

export const changeDisabled = function (status) {
  return changeIsDisabled(
    { IsDisabled:  status}
  );
}

export const changeCurrentPage = function (newCurrentPage) {
  return changeActivePage (
    { currentPage:  newCurrentPage}
  );
}

export default booksShopReducer

