export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      return { ...state, isLoading: true, isError: false };
    }
    case "ERROR_DATA": {
      return { ...state, isLoading: false, isError: true };
    }
    case "TOGGLE_SAVE_DATA": {
      return { ...state, isSaved: !state.isSaved };
    }
    case "SUCCES_DATA": {
      return { ...state, isLoading: false, data: action.data };
    }
    default: {
      return state;
    }
  }
};
