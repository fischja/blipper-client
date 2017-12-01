import { Injectable, transition } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SlidesProvider {

  private slideSubject: Subject<ChangeSlideInfo>;

  constructor() {
    console.log('Created SlidesProvider Provider');

    this.slideSubject = new Subject<ChangeSlideInfo>();
  }

  public onSlideChanged(): Observable<ChangeSlideInfo> {
    return this.slideSubject.asObservable();
  }

  public changeSlide(infoOnly: boolean, slideIndex: number, transitionTime: number = 500) {
    this.slideSubject.next(new ChangeSlideInfo(slideIndex, transitionTime, infoOnly));
  }
}

class ChangeSlideInfo {

  constructor(slideIndex: number, transitionTime: number, infoOnly: boolean) {
    this.slideIndex = slideIndex;
    this.transitionTime = transitionTime;
    this.infoOnly = infoOnly;
  }

  slideIndex: number;
  transitionTime: number;
  infoOnly: boolean;
}
