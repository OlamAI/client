import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { EnvironmentClient } from "../api/environment_grpc_web_pb";
import { GetEntityRequest, Entity } from "../api/environment_pb";
import { withFirebase, firestoreConnect } from "react-redux-firebase";
import { Typography, Container } from "@material-ui/core";
import withNavbar from "../lib/withNavbar";

const addr = "localhost:9091";

class Index extends React.Component {
  // componentDidMount() {
  //   var service = new EnvironmentClient(addr, null, null);
  //   var request = new GetEntityRequest();
  //   request.setId("0");
  //   var metadata = {};
  //   service.getEntity(request, metadata, (err, resp) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(resp);
  //   });
  // }

  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <Container component="main">
        <Typography>Hello world!</Typography>
      </Container>
    );
  }
}
export default compose(
  withNavbar(),
  withFirebase,
  firestoreConnect(["users"]), // or { collection: 'todos' }
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
)(Index);
