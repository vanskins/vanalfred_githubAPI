import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as githubUser from '../reducers/githubUser/Actions';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }
  componentDidMount(){
    
  }
  searchUser = () => {
    const { username } = this.state
    if (username.length > 0) {
      this.props.actions.getUsers(username);
    }
  }

  componentWillReceiveProps(){
    console.log(this.props);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  repositories = () => {
    return this.props.githubUser.repos.map((repo, i) => 
      <div key={i} className="panel panel-default" style={{ marginTop: 20 }}>
        <div className="panel-body">
          <img src={repo.avatar_url} alt="" style={{ height: 50, width: 50, borderRadius: 25 }} />
          <h3>username: {repo.login}</h3>
          <h4># of public repositories: {repo.public_repos}</h4>
        </div>
      </div>  
    );
  }
  render() {
    return (
      <div className="App">
        <div className="input-group">
          <input type="text" onChange={this.onChange} name="username" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-default" onClick={this.searchUser} type="button">Go!</button>
          </span>
        </div>
        <h3>Public Repositories</h3>
        {this.props.githubUser.fetching ? 'LOADING' : this.props.githubUser.hasError ? this.props.githubUser.errorMessage : this.repositories()}
        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(githubUser, dispatch),
    dispatch: dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
