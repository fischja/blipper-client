import { Injectable } from '@angular/core';
import { CreateBlipDto } from '../../models/create-blip-dto';
import { PopularBlip } from '../../models/popular-blip';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlipProvider {

  constructor(private http: HttpClient) {
    console.log('Created BlipProvider Instance');
  }

  public create(title: string, content: string, topics: string) {
    console.log('in create');

    let blip = new CreateBlipDto();
    blip.title = title;
    blip.content = content;
    blip.topics = [{ name: topics }];

    //TODO return promise or observable from httpclient 
  }

  public delete(blipId: number) {
    console.log('in delete');

  }

  public getTop(): Observable<PopularBlip[]> {

    return this.http.get<PopularBlip[]>('../assets/mock-data/popular-blips.json');
  }

}
