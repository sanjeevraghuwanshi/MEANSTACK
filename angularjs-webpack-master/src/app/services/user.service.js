import angular from 'angular';

class UserService {

  constructor($http) {
    'ngInject';
    this._$http = $http;
    this.current = null;
  }

  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this._$http({
      url: 'http://localhost:3000/api' + '/users' + route,
      method: 'POST',
      date: {
        user: credentials
      }
    }).then(
      //On success
      (res) => {
        this.current = res.data.user;
        return res;
      }
    );
  }
}

export default angular.module('service.user-service', [])
  .service('userService', UserService)
  .name;
