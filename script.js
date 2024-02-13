let Boissons = []
let Plats = []
let Desserts = []

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

    
}