import {React, use, useEffect, useState} from "react";

function SEO() {

    useEffect(() => {
        document.title = "La Forja del Dragon";


    const updateMetaTag = (name, content, attribute ="name") => {
        let meta= document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
            meta= document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
            
        }
        meta.content = content
    };
        //meta tag basicos
    updateMetaTag("description", "Explora nuestra tienda en línea La Forja del Dragón, donde encontrarás una amplia variedad de productos de alta calidad para todos los amantes de la fantasía y los juegos de rol.");
    updateMetaTag("keywords", "tienda de juegos, productos de fantasía, accesorios de juegos de mesa, dados, remeras temáticas, impresiones 3D, pokemon, dungeons and dragons, regalos para gamers");
    updateMetaTag("author", "La Forja del Dragón");
    updateMetaTag("viewport", "width=device-width, initial-scale=1", "name");
    updateMetaTag("robots", "index, follow", "name");

    //meta tag open graph
    updateMetaTag("og:title", "La Forja del Dragón ", "property");
    updateMetaTag("og:description", "Explora nuestra tienda en línea La Forja del Dragón, donde encontrarás una amplia variedad de productos de alta calidad para todos los amantes de la fantasía y los juegos de mesa.", "property");
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:image", "https://la-forja-del-dragon.netlify.app", "property");
    updateMetaTag("og:url", window.location.href, "property");
    }, []);
}  export default SEO;