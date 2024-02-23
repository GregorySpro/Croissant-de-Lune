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
        Titre_boisson.textContent = Boissons[0].nomBoisson;
        Titre_boisson.className = "TitreObjet";


        let Description_boisson = document.createElement('p');
        Description_boisson.textContent = Boissons[0].descriptionBoisson;
        let DivDescription = document.createElement('div');
        DivDescription.className = "DivDescription";
        Description_boisson.className = "DescriptionObjet";
        DivDescription.appendChild(Description_boisson);


        let Prix_boisson = document.createElement('h3');
        Prix_boisson.textContent = Boissons[0].prixBoisson + ' €';
        Prix_boisson.className = "PrixObjet";


        let Photo_boisson = document.createElement('img');
        Photo_boisson.src = 'img/Logo.png';
        Photo_boisson.className = "PhotoObjet";


        nouvel_objet.appendChild(Titre_boisson);
        nouvel_objet.appendChild(Photo_boisson);
        nouvel_objet.appendChild(DivDescription);
        nouvel_objet.appendChild(Prix_boisson);
        


        document.getElementById('Boissons').appendChild(nouvel_objet);
        Boissons = []
        
    }
    else if (type == 'plat'){
        let nouveau_plat = Menu.ajouterPlat(nom, prix, type, description);
        let nouvel_objet = document.createElement('div');
        nouvel_objet.className = "item";
        

        let Titre_Plat = document.createElement('h4');
        Titre_Plat.textContent = Plats[0].nomPlat;
        Titre_Plat.className = "TitreObjet";


        let Description_Plat = document.createElement('p');
        Description_Plat.textContent = Plats[0].descriptionPlat;
        let DivDescription = document.createElement('div');
        DivDescription.className = "DivDescription";
        Description_Plat.className = "DescriptionObjet";
        DivDescription.appendChild(Description_Plat);


        let Prix_Plat = document.createElement('h3');
        Prix_Plat.textContent = Plats[0].prixPlat + ' €';
        Prix_Plat.className = "PrixObjet";


        let Photo_Plat = document.createElement('img');
        Photo_Plat.src = 'img/Logo.png';
        Photo_Plat.className = "PhotoObjet";


        nouvel_objet.appendChild(Titre_Plat);
        nouvel_objet.appendChild(Photo_Plat);
        nouvel_objet.appendChild(DivDescription);
        nouvel_objet.appendChild(Prix_Plat);
        


        document.getElementById('Plats').appendChild(nouvel_objet);
        Plats = []
        
    }else if (type == 'entrée'){
        let nouvelle_entrée = Menu.ajouterEntree(nom, prix, type, description);
        let nouvel_objet = document.createElement('div');
        nouvel_objet.className = "item";
        

        let Titre_Entree = document.createElement('h4');
        Titre_Entree.textContent = Entrees[0].nomEntree;
        Titre_Entree.className = "TitreObjet";


        let Description_Entree = document.createElement('p');
        Description_Entree.textContent = Entrees[0].descriptionEntree;
        let DivDescription = document.createElement('div');
        DivDescription.className = "DivDescription";
        Description_Entree.className = "DescriptionObjet";
        DivDescription.appendChild(Description_Entree);


        let Prix_Entree = document.createElement('h3');
        Prix_Entree.textContent = Entrees[0].prixEntree + ' €';
        Prix_Entree.className = "PrixObjet";


        let Photo_Entree = document.createElement('img');
        Photo_Entree.src = 'img/Logo.png';
        Photo_Entree.className = "PhotoObjet";


        nouvel_objet.appendChild(Titre_Entree);
        nouvel_objet.appendChild(Photo_Entree);
        nouvel_objet.appendChild(DivDescription);
        nouvel_objet.appendChild(Prix_Entree);
        


        document.getElementById('Entrées').appendChild(nouvel_objet);
        Entrees = []
        
    }else if (type == 'dessert'){
        let nouveau_dessert = Menu.ajouterDessert(nom, prix, type, description);
        let nouvel_objet = document.createElement('div');
        nouvel_objet.className = "item";
        

        let Titre_Dessert = document.createElement('h4');
        Titre_Dessert.textContent = Desserts[0].nomDessert;
        Titre_Dessert.className = "TitreObjet";


        let Description_Dessert = document.createElement('p');
        Description_Dessert.textContent = Desserts[0].descriptionDessert;
        let DivDescription = document.createElement('div');
        DivDescription.className = "DivDescription";
        Description_Dessert.className = "DescriptionObjet";
        DivDescription.appendChild(Description_Dessert);


        let Prix_Dessert = document.createElement('h3');
        Prix_Dessert.textContent = Desserts[0].prixDessert + ' €';
        Prix_Dessert.className = "PrixObjet";


        let Photo_Dessert = document.createElement('img');
        Photo_Dessert.src = 'img/Logo.png';
        Photo_Dessert.className = "PhotoObjet";


        nouvel_objet.appendChild(Titre_Dessert);
        nouvel_objet.appendChild(Photo_Dessert);
        nouvel_objet.appendChild(DivDescription);
        nouvel_objet.appendChild(Prix_Dessert);
        


        document.getElementById('Desserts').appendChild(nouvel_objet);
        Desserts = []
        
    }
}