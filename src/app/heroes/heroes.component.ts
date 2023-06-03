import { Component } from '@angular/core';
import {Hero} from "../moduls/hero";
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private heroService: HeroService,
              private messageService: MessageService
  ) { }
  ngOnInit() {
    this.getHeros();
  }

  hero : Hero = {
    id : 1,
    name : 'Ali'
  }
  heroes: Hero[] = [];

  selectedHero ?: Hero

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeros(){
    this.heroService.getHeros().subscribe(
      heroes => this.heroes = heroes,
    );
  }
}

