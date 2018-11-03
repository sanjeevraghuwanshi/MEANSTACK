import angular from 'angular';
import uirouter from "angular-ui-router";

import routing from './auth.routes';
import AuthController from "./auth.controller";
import userService from "../../services/user.service";
export default angular.module('app.auth', [uirouter, userService])
  .config(routing)
  .controller('AuthController', AuthController)
  // .service('user', userService)
  .name;
