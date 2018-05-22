import { Component, OnInit } from '@angular/core';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.paragraph', {delay: 500, origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.block_testimony', {delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000});
  }

}
