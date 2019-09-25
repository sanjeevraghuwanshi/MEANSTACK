import { Component, OnInit } from '@angular/core';
import { Profile, User, UserService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  currentUser: User;
  isUser: boolean;

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  ngOnInit() {
    this.route.data.subscribe((data: { profile: Profile }) => {
      this.profile = data.profile;
    });

    this.userService.curreentUser.subscribe((userData: User) => {
      this.currentUser = userData;
      this.isUser = this.currentUser.username === this.profile.username;
    });
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }
}
