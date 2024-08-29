import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html","/js/script.js"),
    new Route("/services", "Services", "/pages/services.html","/js/script.js"),
    new Route("/contact", "Contact", "/pages/contact.html","/js/script.js"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";