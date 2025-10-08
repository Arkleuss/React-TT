import React from "react";


function Gallery(){
const images = [
    "./src/img/main.webp",
    "./src/img/main2.webp",
    "./src/img/main3.webp",
    "./src/img/main4.webp"
];

return(
    <>
        <div id="carouselExample" className="carousel slide" >
            {images.map((src, index) =>(
                <div className="carousel-inner carousel-img-container">
                    <div className="carousel-item active">
                            <img className="d-block w-100 carousel-img" key={index} src={src} alt={'Imagen ${index +1}'} style={{width: "80vw", height: "500px"}}/>
                    </div>
                </div>
            ))}
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
    </> 
);

} export default Gallery;