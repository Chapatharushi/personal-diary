/** @format */
import React from "react";
import { Route } from "react-router-dom";
import  CreateUser from "../pages/CreateUser";
import LoginUser from "../pages/LoginUser";
//import EditUsers from "../pages/EditUser";
//import UsersList from "../pages/UserList";
import { RoutePaths } from "./route-paths";

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={LoginUser} />
      {/* <Route exact path='/createuser' component={CreateUser} /> */}
      <Route path={paths.create} component={CreateUser} />
      {/* <Route path={`${paths.edit}:id`} component={EditUsers} />
      <Route path={paths.create} component={UsersList} /> */}
    </>
  );
};

export default Routes;
