export default class AuthController {
  constructor(userService, $state) {
    'ngInject';
    this._user = userService;

    this.title = $state.current.title;
    this.authType = $state.current.name;
  }

  submitForm() {
    this.isSubmitting = true;
    console.log(this.formData);
    // this._user.attemptAuth(this.authType, this.authType.formData).then(
    //   //callback for success
    //   (res) => {
    //     this.isSubmitting = false;
    //     console.log(res);
    //   },
    //   (err) => {
    //     this.isSubmitting = false;
    //     console.log(err.data.errors);
    //     this.errors = err.data.errors;
    //   }
    // );
  }
}
