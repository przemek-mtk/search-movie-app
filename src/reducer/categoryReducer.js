export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      return { ...state, isLoading: true, isError: false, data: null };
    }
    case "ERROR_DATA": {
      return { ...state, isLoading: false, isError: true };
    }
    case "SUCCES_DATA": {
      return { ...state, isLoading: false, data: action.data };
    }
    default: {
      return state;
    }
  }
};
