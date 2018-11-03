'ngInject';
const routes = ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./auth.html'),
      controller: 'AuthController',
      controllerAs: 'auth',
      title: 'Sign in'
    })
    .state('register', {
      url: '/register',
      template: require('./auth.html'),
      controller: 'AuthController',
      controllerAs: 'auth',
      title: 'Sign up'
    });
};
export default routes;
