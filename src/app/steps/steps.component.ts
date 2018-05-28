import { Component, OnInit } from '@angular/core';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})


export class StepsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if (document.documentElement.clientWidth > 425) { 
      sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.block_anim', {delay: 100, opacity: 0, ease: 'ease-in-out', duration: 500});
      sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.paragraph', {delay: 500, origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.img', {delay: 300, origin:'right', distance: '200px', ease: 'ease-in-out', duration: 1000});
    }
  }

}
