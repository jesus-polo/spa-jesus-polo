import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private villanos: Villano[] = [
    {
      nombre: "Darkseid",
      bio: "Darkseid es uno de los personajes más poderosos del mundo DC. Se trata de un villano extraterrestre creado por Jack Kirby en 1970. ¿Sus poderes? Fuerza sobrehumana, inteligencia sobrenatural y además se regenera cada vez que le hieren.",
      img: "assets/img/darkseid.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Hela",
      bio: "Hela es un personaje ficticio, la diosa niflheimana de la muerte en el universo de Marvel Comics, basada en la diosa nórdica del mismo nombre. La soberana de Helheim y Niflheim, el personaje ha sido una enemiga frecuente de Thor.",
      img: "assets/img/hela.jpeg",
      aparicion: "2017-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Joker",
      bio: "El Joker (traducido como el Comodín y el Guasón en Hispanoamérica) es un personaje de ficción, perteneciente a DC Comics y el archienemigo de Batman, además de su antítesis. El Joker es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo.",
      img: "assets/img/joker.jpeg",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Apocalipsis",
      bio: "Sin ir más lejos, el mutante del Antiguo Egipto que da vida Oscar Isaac se cuela un escalón por encima del 'amo del metal'. En Sabah Nur fue considerado un Dios por su pueblo, y no es para menos.",
      img: "assets/img/apocalipsis.jpeg",
      aparicion: "2017-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Ultrón",
      bio: "Es un robot consciente de sí mismo y altamente inteligente creado por Hank Pym, quien desarrolla un complejo de dios y un resentimiento contra Pym y la raza humana.",
      img: "assets/img/ultron.jpeg",
      aparicion: "2015-11-01",
      casa: "Marvel"
    },
    {
      nombre: "Lex Luthor",
      bio: "Lex Luthor era originalmente un científico loco, pero desde finales de la década de 1980, ha sido retratado más a menudo como un magnate de los negocios loco por el poder, el director ejecutivo de LexCorp.",
      img: "assets/img/lex.jpeg",
      aparicion: "1949-11-01",
      casa:"DC"
    },
    {
      nombre: "Magneto",
      bio: "Magneto (Max Eisenhardt o Erik Lehnsherr) es un personaje ficticio que aparece en las historietas de los X-Men publicadas por Marvel Comics. Aunque tradicionalmente ha servido como el antagonista central en la colección X-Men, los desarrollos narrativos de las últimas décadas han comenzado a retratar al personaje como un antihéroe.",
      img: "assets/img/magneto.jpg",
      aparicion: "1963-05-01",
      casa:"Marvel"
    }
  ];

  constructor() { }

  getVillano(idx: number) {
    return this.villanos[idx];
  }

  getVillanos(): Villano[] {
    return this.villanos;
  }

  buscarVillano(termino: string): Villano[] {
    let villanosArr: Villano[] = [];
    termino = termino.toLowerCase();
    for (let index = 0; index < this.villanos.length; index++) {
      let villano = this.villanos[index];
      let nombre = villano.nombre.toLocaleLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        villano.idx = index;
        villanosArr.push(villano);
      }
    }
    return villanosArr;
  }
}

export interface Villano {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}