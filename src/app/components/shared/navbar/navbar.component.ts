import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    if (this._router.url.includes('heroes')) {
      this._router.navigate(['/buscarHeroe', termino]);
    } else {
      this._router.navigate(['buscarVillano', termino]);
    }
  }

}
