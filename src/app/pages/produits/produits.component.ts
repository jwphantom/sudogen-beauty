import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ProduitService } from '../../services/produit.service';
import { Router, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrowserModule, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : any[];
  produitSubscription : Subscription;

  constructor(public produitService : ProduitService,
              public router : Router,
              private title: Title) { }

  ngOnInit(){

    this.title.setTitle("Sudogen Beauty - Produits");


    this.produitSubscription = this.produitService.produitsSubject.subscribe(
      (produits: any[]) => {
        this.produits = produits;
      }
    );
    this.produitService.emitProduitsSubject();

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

  onViewProduct(id : number){
    this.router.navigate(['/produits', id]);
  }
}
