import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  serverURL: string = serverURL;

  constructor(private oHttp: HttpClient) {}

  getPage(page: number, rpp : number):Observable<any>{//colocar el tipo después
    return this.oHttp.get<any>(serverURL+`/blog?page=${page}&rpp=${rpp}`);
  }
}
