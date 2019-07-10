import { compose } from "redux";
import { connect } from "react-redux";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfileNavbarMenu from "./profileNavbarMenu";
import { isLoaded, isEmpty, withFirebase } from "react-redux-firebase";

const useStyles = makeStyles(theme => ({
  spacer: {
    flexGrow: 1
  }
}));

let Navbar = ({ firebase, auth }) => {
  const classes = useStyles();

  console.log("Auth: ", auth);

  // AuthBtns decides which buttons to render depending on the auth status
  let AuthBtns = () => {
    // If loading or unauthorized, show the entry auth buttons
    if (!isLoaded(auth) || isEmpty(auth)) {
      return (
        <Link href="/auth">
          <Button color="inherit">Login</Button>
        </Link>
      );
    }
    // If the user is signed in, show a profile menu
    return <ProfileNavbarMenu />;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Terrarium.ai</Typography>

        <div className={classes.spacer} />

        <AuthBtns />
      </Toolbar>
    </AppBar>
  );
};

export default compose(
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth }))
)(Navbar);
