import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularTopic } from '../../models/popular-topic';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TopicProvider {

  constructor(private http: HttpClient) {
    console.log('Created BlipProvider Instance');
  }


  public getTop(): Observable<PopularTopic[]> {
    return this.http.get<PopularTopic[]>('../assets/mock-data/popular-topics.json');
  }

}

