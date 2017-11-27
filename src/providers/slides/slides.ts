import { Injectable, transition } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlidesProvider {

  private slideSubject: Subject<{ slideIndex: number, transitionTime: number }>;

  constructor() {
    console.log('Created SlidesProvider Provider');

    this.slideSubject = new Subject<{ slideIndex: number, transitionTime: number }>();
  }

  public onSlideChanged(): Observable<{ slideIndex: number, transitionTime: number }> {
    return this.slideSubject.asObservable();
  }

  public changeSlide(slideIndex: number, transitionTime: number = 500) {
    this.slideSubject.next({ slideIndex, transitionTime });
  }

}
