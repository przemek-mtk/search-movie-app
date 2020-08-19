export const searchReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_QUERY": {
      return { ...state, query: action.query };
    }
    case "EMPTY_QUERY": {
      return { ...state, searchData: [] };
    }
    case "CHANGE_MEDIA_TYPE": {
      return { ...state, mediaType: action.mediaType };
    }
    case "LOAD_DATA": {
      return { ...state, isLoading: true, isError: false };
    }
    case "ERROR_DATA": {
      return { ...state, isLoading: false, isError: true };
    }
    case "SUCCES_DATA": {
      return { ...state, isLoading: false, searchData: action.data };
    }
    default: {
      return state;
    }
  }
};
