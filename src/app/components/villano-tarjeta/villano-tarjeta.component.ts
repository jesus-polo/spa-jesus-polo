import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villano-tarjeta',
  templateUrl: './villano-tarjeta.component.html',
  styleUrls: ['./villano-tarjeta.component.css']
})
export class VillanoTarjetaComponent implements OnInit {
  @Input() villano: any = {};
  @Input() index: number = 0;

  constructor(private _router: Router) {}

  ngOnInit(): void { }

  verVillano() {
    this._router.navigate(['/villano', this.index]);
  }

}
