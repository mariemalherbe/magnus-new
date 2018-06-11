import { Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

declare let ScrollReveal: any;
declare let sr: any;
declare let window: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  deviceInfo = null;


  constructor(meta: Meta, title: Title,  private deviceService: DeviceDetectorService) { 
    this.epicFunction();
    title.setTitle('Magnus Home Page');

    meta.addTags([
      {
        name: 'author', content: 'magnus.uppli.io'
      },
      {
        name: 'keywords', content: 'magnus, indoor, location, localization, magnetisme, beacons'
      }
    ])

  }

  epicFunction(){
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }



  ngOnInit() {
    window.sr = ScrollReveal();

    console.log(this.deviceService.getDeviceInfo().browser);

    if (this.deviceService.getDeviceInfo().browser=="safari"){
      let video = <HTMLMediaElement> document.getElementById('videoMagnus'); 
      var button = document.getElementById('buttonMagnus'); 
      button.style.display="block";
      button.addEventListener('click',function(){ 
        video.play(); 
      },false);
    }



    
    if (document.documentElement.clientWidth > 425) { 
    sr.reveal('.logo',{origin: 'top',});
    sr.reveal('.title', {delay: 200,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.subtitle', {delay: 300,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.paragraph', {delay: 500,origin:'left',distance: '200px', ease: 'ease-in-out', duration: 500});
    sr.reveal('.button', {delay: 1000,origin:'bottom',distance: '200px', ease: 'ease-in-out', duration: 750});
    sr.reveal('.side_right', {delay: 300, origin:'bottom', scale: 0.8, ease: 'ease-in-out', duration: 500});
    }

    let video = <HTMLMediaElement> document.getElementById('videoMagnus'); 
    var button = document.getElementById('buttonMagnus'); 
    button.addEventListener('click',function(){ 
      video.play(); 
    },false);
  }



}
