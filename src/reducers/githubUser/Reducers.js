import _ from 'underscore';

const initialState = {
  fetching: false,
  fetched: false,
  repos: [],
  hasError: false,
  errorMessage:'',
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GITHUB_USER_FULFILLED": {
      state = {
        ...state,
        fetched: true,
        fetching: false,
        hasError: false,
        repos: _.sortBy(_.uniq([...state.repos, action.payload.data], (a) => a.login), 'public_repos').reverse()
      };
      break;
    }
    case "GITHUB_USER_PENDING": {
      state = { ...state, fetching: true, hasError: false, };
      break;
    }
    case "GITHUB_USER_CLEAR": {
      state = { ...state, repos: action.payload };
      break;
    }
    case "GITHUB_USER_REJECTED": {
      state = { ...state, fetching: false, hasError:true, errorMessage: action.payload.response.data.message}
      break;
    }
    default: {
      break;
    }
  }
  return state;
};


export default users;