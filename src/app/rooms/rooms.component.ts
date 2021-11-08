import { Component, OnInit } from '@angular/core';


import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
