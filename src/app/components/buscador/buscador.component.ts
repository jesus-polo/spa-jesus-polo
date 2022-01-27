import { Component, OnInit } from '@angular/core';
import { Villano, VillanosService } from 'src/app/services/villanos.service';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  villanos: Villano[] = [];
  isHeroe: boolean = false;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router, private _heroesService: HeroesService, private _villanosService: VillanosService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.termino = params['termino'];
      if (this._router.url.includes('buscarHeroe')) {
        this.heroes = this._heroesService.buscarHeroe(this.termino);
        this.isHeroe = true;
      } else {
        this.villanos = this._villanosService.buscarVillano(this.termino);
      }
    });
  }

}
