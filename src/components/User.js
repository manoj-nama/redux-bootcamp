import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class User extends React.Component {

  addUser = () => {
    // this.props.dispatch({
    //   type: 'ADD_USER',
    //   user: {
    //     name: "First User",
    //     email: "fuser@test.com"
    //   }
    // });
    // this.props.addUser("First User", "email@email.com");
    // this.props.fetchData(10);
    this.props.fetchUser();
  }

  render() {
    console.log(this.props);
    const { users } = this.props;
    return (
      <div>

        {
          users.loading ? (
            <h2>LOADING....</h2>
          ) : null
        }

        {
          users.err ? (
            <h2>ERROR: {users.err}</h2>
          ) : null
        }

        <button onClick={this.addUser}>Get Users!!</button>
        <p>Users:</p>
        <ul>
          {
            users.list.map((user, index) => (
              <li key={index}>{user.name}: {user.email}</li>
            ))
          }
        </ul>

      </div>
    )
  }
}

const whatGoesIntoThisComponent = (state) => {
  return ({
    users: state.users,
  }); 
  // return 10;
}

// const mapDispatchToProps = dispatch => ({
//   addUser: (name, email) => dispatch({ type: 'ADD_USER', user: { name, email } })
// })

const mapDispatchToProps = {
  fetchUser
}

const UserContainer = connect(whatGoesIntoThisComponent, mapDispatchToProps)(User);
export default UserContainer;