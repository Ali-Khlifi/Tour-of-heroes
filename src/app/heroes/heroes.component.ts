import { Component } from '@angular/core';
import {Hero} from "../moduls/hero";
import {HEROES} from "../moduls/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  hero : Hero = {
    id : 1,
    name : 'Ali'
  }
  heroes = HEROES;

  selectedHero ?: Hero

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

