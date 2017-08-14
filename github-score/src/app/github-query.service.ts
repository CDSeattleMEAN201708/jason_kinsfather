import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Gituser } from './gituser';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubQueryService {
  baseURL = 'https://api.github.com/users/'

  constructor(private _http: Http) {}

  retrieveUsers(username: string): Observable<Gituser[]> {
      return this._http.get(this.baseURL + username)
      .map((res: Response) => res.json())
  }
}
