import axios from "axios";

export function users(username) {
  return {
    type: "GITHUB_USER",
    payload: axios.get(`https://api.github.com/users/${username}`)
  }
}

export function clear(){
  return {
    type: "GITHUB_USER_CLEAR",
    payload: [],
  }
}

export function getUsers(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/search/users?q=${username}`)
      .then( response => {
        dispatch(clear());
        if (response.status === 200 ){
          response.data.items.forEach(user => {
            dispatch(users(user.login))
          });
        }
      })
      .catch(err => {

      })
  }
}


