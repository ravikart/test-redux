import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions/index";

class UserHeader extends React.Component {
  componentDidMount = () => {
    //this.props.fetchUser(this.props.userId);
  };
  render = () => {
    const userData = this.props.user;
    if (!userData) {
      return null;
    }
    return <div>{userData.name}</div>;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find(user => {
      return user.id === ownProps.userId;
    })
  };
};

export default connect(mapStateToProps, {})(UserHeader);
