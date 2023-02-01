import { Component, OnInit } from '@angular/core';
//import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  heros: Hero[] = []; //HEROS; ca cetait mon mock up

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
    .subscribe(resultat => this.heros = resultat);
    }
}
