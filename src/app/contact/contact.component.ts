import { Component, OnInit } from '@angular/core';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.paragraph', {delay: 500, origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.social_item', { delay: 500, duration: 750, origin:'right' }, 100);
    sr.reveal('.social', { delay:750, duration:500, opacity: 0 })
  }

}
