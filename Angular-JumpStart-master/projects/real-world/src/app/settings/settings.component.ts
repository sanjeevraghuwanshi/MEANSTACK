import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../shared';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  user: User = new User();
  errors = {};
  settingsForm: FormGroup;
  isSubmitting = false;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
  }
  ngOnInit() {
    Object.assign(this.user, this.userService.getCurrencyUser());
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
  updateUser(values: User) {
    Object.assign(this.user, values);
  }
  submitForm() {
    this.isSubmitting = true;
    this.updateUser(this.settingsForm.value);
    this.userService.update(this.user).subscribe(
      updatedUser => this.router.navigateByUrl('/profile' + updatedUser.username),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}
