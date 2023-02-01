import { Component, OnInit } from '@angular/core';
//import { HEROS } from '../mock-heros';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  heros : Hero[] = []; //HEROS;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(resultat => this.heros = resultat);
  }

}
