import { Injectable } from '@angular/core';
import {Hero} from "../moduls/hero";
import {HEROES} from "../moduls/mock-heroes";
import {Observable, of, take} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeros() : Observable<Hero[]> {
    const result = of(HEROES);
    this.messageService.add('HeroService: fetched heroes in progress')
    return result;
  }

}
