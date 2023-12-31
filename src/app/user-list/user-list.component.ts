import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  Users:User[];

  constructor(private userservice:UserService){}

  ngOnInit(): void {

    this.getUsers();
  }

  private getUsers()
  {
    this.userservice.getUserList().subscribe(data=>{
      this.Users=data;
    })
  }
}
