import { Subject } from 'rxjs';

export class ProduitService{

    produitsSubject = new Subject<any[]>();

    
    produits = [
        {
            id : 0,
            nom : 'Thé Express',
            short_name: 'tex',
            prix : '9.000FCFA',
            description : 
            ["Notre thé corps express 100% naturel et bien plus performant que le thé corps simple agit dans votre organisme en coupe faim et brûleur de graisses. De plus il lutte contre la reprise du poids et brûle en moyenne 8kg en 20 jours "],
            client_satisfait : '78',
            duree : '3',
            mois_ajout :'Mar',
            annee_ajout :'2020'

        },
        {
            id : 1,
            nom : 'Thé Ventre Plat Express',
            short_name: 'tvx',
            prix : '7.000FCFA',
            description : 
            ["Reconnu par son éfficacité auprès de nos clients, notre thé ventre plat express 100% naturel et coupe faim de base vient brûler les graisses abdominales, et vous empêcher une reprise du ventre. Généralement utilisé après la maternité et consommation de bières il vous permet une perte de 8cm du tour de taille en 25 jours"],
            client_satisfait : '101',
            duree : '3',
            mois_ajout :'Avr',
            annee_ajout :'2020'



        },
        {
            id : 2,
            nom : 'Thé Corps',
            short_name: 'tcc',
            prix : '6.000FCFA',
            description : 
            ["Notre thé amincissant fait a base d'ingrédients 100% naturels agit sur l'organisme comme brûleurs de graisse. Utilisé pour les moins de 90kg, il élimine les graisses du corps, coupe la famine et élimine les toxines de votre organisme. Le tout pour une perte de poids de 5kg en 25 jours",
            ],
            client_satisfait : '47',
            duree : '3',
            mois_ajout :'Dec',
            annee_ajout :'2019'


        },
        {
            id : 3,
            nom : 'Thé Ventre plat',
            short_name: 'tvp',
            prix : '5.000FCFA',
            description : 
            ["Notre thé ventre plat, composé uniquement d'ingrédients naturels, est utilisé pour éliminer les graisses abdominales. Généralement conseillé pour des ventres pas très gros. Il agit en coupe faim et vous permet une perte de 7cm du tour de taille en 25 jours",],
            client_satisfait : '59',
            duree : '3',
            mois_ajout :'Mar',
            annee_ajout :'2020'


        },
        {
            id : 4,
            nom : 'Crème anti vergetures',
            short_name: 'cav',
            prix : '4.000FCFA',
            description : 
            ["Notre crème antivergetures 100% naturels est à la base une huile corporelle conçu pour hydrater votre peau et la protéger des rayonnement solaire. Mais sa particuliraté est sa lutte contre les vergetures, elle vous permet d'effacer vos vergetures jusqu'a 95% en seulement 15 jours."],
            client_satisfait : '163',
            duree : '5',
            mois_ajout :'Janv',
            annee_ajout :'2020'


        },
        {
            id : 5,
            nom : 'Huile tâches noires',
            short_name: 'htn',
            prix : '5.000FCFA',
            description : 
            ["Rien ne vaut le fait de savoir que votre peau est douce et lisse mais avec le produit adapté, vous pouvez profiter de cette sensation chaque jour. C'est ainsi que notre huile tâches noires vient éliminer les tâches de votre visage, aisselles, entre jambes, pieds .....etc. Et c'est pas tout, elle permet aussi à votre peau d'être plus douce et éclatante. "],
            client_satisfait : '35',
            duree : '5',
            mois_ajout :'Mai',
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