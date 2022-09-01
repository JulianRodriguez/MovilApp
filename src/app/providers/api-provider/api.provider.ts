import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {

  private readonly baseUrl = 'http://localhost:8080';
  //private readonly baseUrl = 'https://stark-earth-76126.herokuapp.com';

  constructor(
    private readonly httpProvider: HttpClient
  ) {}

  public get(url: string): Observable<any> {
    return this.httpProvider.get(`${this.baseUrl}/${url}`, {
      withCredentials: true,
      // headers: {
      //   Authorization: 'Bearer ' + localStorage.getItem('token')
      // }
    });
  }

  public post(url: string, params: any, options?: any): Observable<any> {
    return this.httpProvider.post(`${this.baseUrl}/${url}`, params, options);
  }

  public put(url: string, params?: any): Observable<any> {
    return this.httpProvider.put(`${this.baseUrl}/${url}`, params);
  }

  public delete(url: string, params?: any): Observable<any> {
    return this.httpProvider.delete(`${this.baseUrl}/${url}`, params);
  }
}
