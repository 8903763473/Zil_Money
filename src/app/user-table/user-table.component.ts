import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [HttpClient, ApiService],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {

  userDataList: any = []
  userDataListInitial: any = []
  search1: any
  search2: any
  search3: any

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.api.getData().subscribe({
      next: (res => {
        this.userDataList = res;
        this.userDataListInitial = res;
      }), error: (err => {
        console.log(err);
      })
    })
  }

  search(data: any, key: any) {
    let query = data.toLowerCase()
    this.userDataList = this.userDataListInitial.filter((res: any) => {
      return ((res.username.toLowerCase()).includes(query) || (res.company.name.toLowerCase()).includes(query) || (res.company.designation.toLowerCase()).includes(query))
    })
  }

}
