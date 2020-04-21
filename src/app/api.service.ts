import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://uz9t4q6y9j.execute-api.eu-west-1.amazonaws.com/prod/';

  constructor(private httpClient: HttpClient) {}

  public getCustomerById(id: string) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

}

