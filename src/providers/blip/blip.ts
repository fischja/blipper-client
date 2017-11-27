import { Injectable } from '@angular/core';
import { CreateBlipDto } from '../../models/create-blip-dto';

@Injectable()
export class BlipProvider {

  constructor() {
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

}
