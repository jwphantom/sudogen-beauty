import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import * as $ from 'jquery'


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(){
    this.title.setTitle("Sudogen Beauty - Politique de Confidentialité");


    this.loadScript('assets/js/jquery-3.2.1.min.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadScript('assets/js/owl.carousel.min.js');
    this.loadScript('assets/js/jquery.nicescroll.min.js');
    this.loadScript('assets/js/isotope.pkgd.min.js');
    this.loadScript('assets/js/imagesloaded.pkgd.min.js');
    this.loadScript('assets/js/circle-progress.min.js');
    this.loadScript('assets/js/main.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
