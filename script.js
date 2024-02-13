let Boissons = []
let Plats = []
let Desserts = []
let Entrees = []

let Menu = {
    ajouterBoisson: function(nom, prix, photo, description){
        let boisson = {
            nomBoisson: nom,
            prixBoisson: prix,
            photoBoisson: photo,
            descriptionBoisson: description,
        }
        Boissons.push(boisson);
    },

    ajouterPlat: function(nom, prix, photo, description){
        let plat = {
            nomPlat: nom,
            prixPlat: prix,
            photoPlat: photo,
            descriptionPlat: description,
        }
        Plats.push(plat);
    },

    ajouterDessert: function(nom, prix, photo, description){
        let dessert = {
            nomDessert: nom,
            prixDessert: prix,
            photoDessert: photo,
            descriptionDessert: description,
        }
        Desserts.push(dessert);
    },

    ajouterEntree: function(nom, prix, photo, description){
        let entree = {
            nomEntree: nom,
            prixEntree: prix,
            photoEntree: photo,
            descriptionEntree: description,
        }
        Entrees.push(entree);
    }


}


function ajouter(){
    let nom = prompt('Entrez le nom de l\' objet');
    let prix = prompt('Entrez le prix de l\'objet');
    let description = prompt('Entrez la description de l\'objet');
    let type = prompt('Entrez le type de l\'objet (boisson / plat / entrée / dessert)');

    if (type == 'boisson'){
        let nouvelle_boisson = Menu.ajouterBoisson(nom, prix, type, description);
        let nouvel_objet = document.createElement('div');
        nouvel_objet.className = "item";
        

        let Titre_boisson = document.createElement('h4');
        Titre_boisson.textContent = Boissons.nomBoisson;

        let Description_boisson = document.createElement('p');
        Description_boisson.textContent = Boissons.descriptionBoisson;

        let Prix_boisson = document.createElement('h3');
        Prix_boisson.textContent = Boissons.prixBoisson;


        nouvel_objet.appendChild(Titre_boisson);
        nouvel_objet.appendChild(Prix_boisson);
        nouvel_objet.appendChild(Description_boisson);


        document.getElementById('Entrées').appendChild(nouvel_objet);

        
    }
}