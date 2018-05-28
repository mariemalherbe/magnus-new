import { Component, OnInit } from '@angular/core';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-fonctionnement',
  templateUrl: './fonctionnement.component.html',
  styleUrls: ['./fonctionnement.component.scss']
})
export class FonctionnementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (document.documentElement.clientWidth > 425) { 
      sr.reveal('.title', {delay: 100,origin:'bottom',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.subtitle', {delay: 200,origin:'bottom',distance: '200px', ease: 'ease-in-out', duration: 500});
      sr.reveal('.list_item', { delay: 500, duration: 750, origin:'right' }, 100);
      sr.reveal('.img', {delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000});
    }

  }

}
