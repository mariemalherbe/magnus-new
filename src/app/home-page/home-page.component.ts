import { Component, OnInit } from '@angular/core';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    window.sr = ScrollReveal();
    sr.reveal('.logo',{origin: 'top',});
    sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.paragraph', {delay: 500,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.button', {delay: 1000,origin:'bottom',distance: '200px', ease: 'ease-in-out', duration: 750});
    sr.reveal('.side_right', {delay: 300, origin:'bottom', scale: 0.8, ease: 'ease-in-out', duration: 500});
  }



}
