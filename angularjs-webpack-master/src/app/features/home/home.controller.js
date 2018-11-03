export default class HomeController {
  constructor(randomNames, $templateCache) {
    this.name = 'World';
    this.random = randomNames;
    console.log($templateCache.get('templateId.html'));
    $templateCache.put("templateId.html",
      '<span>Sanjeev</span>');
    console.log($templateCache.get('templateId.html'));
  }

  /**
   * @ngdoc method
   * @name _CONTROLLER_NAME_#_FUNCTION_NAME_
   *
   * @methodOf
   * MODULE_NAME.controller:_CONTROLLER_NAME_
   *
   * @description
   * Description
   *
   * @param {type} name description
   * @return {type} name description
   */
  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getNames();
  }
}

HomeController.$inject = ['randomNames', '$templateCache'];
