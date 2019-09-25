import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService, UserService } from '../services';
import { Router } from '@angular/router';
import { Profile } from '../models';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html'
})
export class FollowButtonComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private router: Router
  ) {}

  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;
  ngOnInit() {}
  toggleFollowing() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigateByUrl('/login');
        return;
      }
      if (!this.profile.following) {
        this.profileService.follow(this.profile.username).subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(true);
          },
          err => (this.isSubmitting = false)
        );
      } else {
        this.profileService.unfollow(this.profile.username).subscribe(
          data => {
            this.isSubmitting = false;
            this.onToggle.emit(false);
          },
          err => (this.isSubmitting = false)
        );
      }
    });
  }
}
