import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { SingleProduitComponent } from './pages/produits/single-produit/single-produit.component';
import { ProduitService } from './services/produit.service';
import { AboutComponent } from './pages/about/about.component';
import { PolicyComponent } from './pages/policy/policy.component';

import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { TopRightComponent } from './pages/top-right/top-right.component';
import { PrettyPrint } from './pipes/pretty-print.pipe';
import { LoaderComponent } from './pages/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProduitsComponent,
    SingleProduitComponent,
    AboutComponent,
    PolicyComponent,
    FourOhFourComponent,
    TopRightComponent,
    PrettyPrint,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    ProduitService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
