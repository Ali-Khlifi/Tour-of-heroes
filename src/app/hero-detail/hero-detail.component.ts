import {Component, OnInit} from '@angular/core';
import {Hero} from "../moduls/hero";
import {ActivatedRoute} from "@angular/router";
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  //@Input() hero ? : Hero  // to have this value from parent

  ngOnInit() {
    this.getHero();
  }

  hero: Hero | undefined;

  getHero() {
    const id  = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      hero => { this.hero = hero; },
    )
  }
  goBack() {
    this.location.back();
  }
}
