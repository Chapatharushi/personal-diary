/** @format */
import React from "react";
import { Route } from "react-router-dom";
//import CreateUser from "../pages/CreateUser";
import EditUsers from "../pages/EditUser";
import UsersList from "../pages/UserList";
import LoginUser from "../pages/LoginUser";
import { RoutePaths } from "./route-paths";

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={LoginUser} />
      <Route path={`${paths.edit}:id`} component={EditUsers} />
      <Route path={paths.create} component={UsersList} />
    </>
  );
};

export default Routes;
