import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource){
    return this.http.post(this.url + '/' + resource.id, JSON.stringify({isRead: true}));
  }

  delete(id){

    return this.http.delete(this.url + '/' + id);
  }
}

