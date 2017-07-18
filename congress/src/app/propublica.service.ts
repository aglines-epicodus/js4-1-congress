import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { proPublicaKey } from '../api-keys';

@Injectable()
export class PropublicaService {
constructor(private http: Http) {}

  getAllResponses() {
    let headers = new Headers();
    headers.append('X-API-Key', proPublicaKey);
    this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: headers })
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
