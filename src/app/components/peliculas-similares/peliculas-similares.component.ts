import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-similares',
  templateUrl: './peliculas-similares.component.html',
  styleUrls: ['./peliculas-similares.component.css']
})
export class PeliculasSimilaresComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
