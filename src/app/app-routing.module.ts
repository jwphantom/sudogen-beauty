import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './pages/produits/produits.component';
import { SingleProduitComponent } from './pages/produits/single-produit/single-produit.component';
import { AboutComponent } from './pages/about/about.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path : 'produits', component: ProduitsComponent},
  { path : 'produits/:id', component: SingleProduitComponent},
  { path : 'contact', component: AboutComponent},
  { path : 'politique-de-confidentialité', component: PolicyComponent},
  { path : '', component: ProduitsComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
