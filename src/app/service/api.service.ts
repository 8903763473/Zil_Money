import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get("https://zil-test.s3.us-east-1.amazonaws.com/json-data.json")
  }
}
