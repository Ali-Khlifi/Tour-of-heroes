import { Injectable } from '@angular/core';
import {Hero} from "../moduls/hero";
import {HEROES} from "../moduls/mock-heroes";
import {Observable, of, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeros() : Observable<Hero[]> {
    const result = of(HEROES);
    return result.pipe(take(1));
  }

}
