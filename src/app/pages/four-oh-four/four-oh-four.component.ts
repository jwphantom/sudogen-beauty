import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.css']
})
export class FourOhFourComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Sudogen Beauty - Page Introuvable");

    
    this.loadScript('../assets/js/jquery-3.2.1.min.js');
		this.loadScript('../assets/js/bootstrap.min.js');
		this.loadScript('../assets/js/owl.carousel.min.js');
		this.loadScript('../assets/js/jquery.nicescroll.min.js');
		this.loadScript('../assets/js/isotope.pkgd.min.js');
		this.loadScript('../assets/js/imagesloaded.pkgd.min.js');
		this.loadScript('../assets/js/circle-progress.min.js');
		this.loadScript('../assets/js/main.js');

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
