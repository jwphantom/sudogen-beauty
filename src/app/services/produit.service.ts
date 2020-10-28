import { Subject } from 'rxjs';

export class ProduitService{

    produitsSubject = new Subject<any[]>();

    
    produits = [
        {
            id : 0,
            nom : 'Thé Corps Express',
            short_name: 'tex-new',
            prix : '9.000FCFA',
            description : 
            ["Notre thé corps express 100% naturel et bien plus performant que le thé corps simple agit dans votre organisme en coupe faim et brûleur de graisses. De plus il lutte contre la reprise du poids et brûle en moyenne 8kg en 20 jours "],
            client_satisfait : '98',
            duree : '30',
            mois_ajout :'Mar',
            annee_ajout :'2020'

        },
        {
            id : 1,
            nom : 'Thé Ventre Plat Express',
            short_name: 'tvx-new',
            prix : '7.000FCFA',
            description : 
            ["Reconnu par son éfficacité auprès de nos clients, notre thé ventre plat express 100% naturel et coupe faim de base vient brûler les graisses abdominales, et vous empêcher une reprise du ventre. Généralement utilisé après la maternité et consommation de bières il vous permet une perte de 8cm du tour de taille en 25 jours"],
            client_satisfait : '167',
            duree : '30',
            mois_ajout :'Avr',
            annee_ajout :'2020'



        }

    ];

    emitProduitsSubject() {
        this.produitsSubject.next(this.produits.slice());
      }

    getProduitById(id: number) {
        const produit = this.produits.find(
          (s) => {
            return s.id === id;
          }
        );
        return produit;
    }
}