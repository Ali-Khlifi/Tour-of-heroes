import {Component, Input} from '@angular/core';
import {Hero} from "../moduls/hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero ? : Hero  // to have this value from parent

}
