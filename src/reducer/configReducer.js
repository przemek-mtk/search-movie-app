export const configReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      return { ...state, isLoading: true, isError: false };
    }
    case "ERROR_DATA": {
      return { ...state, isLoading: false, isError: true };
    }
    case "SUCCES_DATA": {
      return { ...state, isLoading: false, config: action.data };
    }
    default: {
      return state;
    }
  }
};
