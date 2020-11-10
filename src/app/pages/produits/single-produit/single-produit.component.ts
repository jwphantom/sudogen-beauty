import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ProduitService } from 'src/app/services/produit.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { BrowserModule, Title } from '@angular/platform-browser';


@Component({
	selector: 'app-single-produit',
	templateUrl: './single-produit.component.html',
	styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent implements OnInit {

	nom: String;
	prix: String;
	description;
	client_satisfait: String;
	duree: String;
	short_name: String;

	constructor(private produitService: ProduitService,
		private route: ActivatedRoute,
		private title: Title) { }

	ngOnInit() {

		this.loadScript('../assets/js/jquery-3.2.1.min.js');
		this.loadScript('../assets/js/bootstrap.min.js');
		this.loadScript('../assets/js/owl.carousel.min.js');
		this.loadScript('../assets/js/jquery.nicescroll.min.js');
		this.loadScript('../assets/js/isotope.pkgd.min.js');
		this.loadScript('../assets/js/imagesloaded.pkgd.min.js');
		this.loadScript('../assets/js/circle-progress.min.js');
		this.loadScript('../assets/js/main.js');

		const id = this.route.snapshot.params['id'];
		this.nom = this.produitService.getProduitById(+id).nom;
		this.prix = this.produitService.getProduitById(+id).prix;
		this.description = this.produitService.getProduitById(+id).description;
		this.client_satisfait = this.produitService.getProduitById(+id).client_satisfait;
		this.duree = this.produitService.getProduitById(+id).duree;
		this.short_name = this.produitService.getProduitById(+id).short_name;



		this.title.setTitle("Sudogen Beauty - Produits -" + this.nom);

	}

	public loadScript(url: string) {
		const body = <HTMLDivElement>document.body;
		const script = document.createElement('script');
		script.innerHTML = '';
		script.src = url;
		script.async = false;
		script.defer = true;
		body.appendChild(script);
	}

}
