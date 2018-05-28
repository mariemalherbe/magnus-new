import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;
declare let carouselBanner: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    if (document.documentElement.clientWidth > 425) { 
      sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.paragraph', {delay: 500, origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.block_testimony', {delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000});
    }

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 750,
      interval: 5000,
      point: {
        visible: false,
      },
      load: 2,
      loop: true,
      touch: true
    };
  }


  }

}
