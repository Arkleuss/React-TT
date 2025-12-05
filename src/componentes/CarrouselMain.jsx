
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/CarrouselMain.css";

function CarrouselMain() {

    return (    
    <>
        <h3 >Creamos lo que sea! impresiones 3D y otras manufacturas!!!</h3>        
        
            <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{overflow:"hidden"}} >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/hxxXhgQg/main4.webp" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/842Sd7q0/IMG-20250507-WA0110.webp" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/ynvfNF5d/main2.webp" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
        
    </>
    );
} export default CarrouselMain;

/*

<section style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            marginTop: "20px" }}>
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    }}>
                    <button onClick={anteriorImg} alt ="Anterior"
                    style={{
                            position: "absolute",
                            left: "0px",
                            top: "80%",
                            height:"100vh",
                            width:"100px",
                            transform: "translateY(-50%)",
                            zIndex: 500,
                            background: "none",
                            border: "none",
                            fontSize: "2rem",
                            cursor: "pointer"
                        }}>{"<"}</button>
                    <img
                        src={images[current]}
                        alt={`Imagen ${current + 1}`}
                        style={{
                            zIndex:200,  
                            width: "100vw", 
                            height: "100vh", 
                            objectFit: "cover" 
                            }}/>
                    <button onClick={siguienteImg} alt = "Siguiente"
                        style={{
                            position: "absolute",
                            right: "0px",
                            top: "80%",
                            width:"100px",
                            height: "100vh",
                            transform: "translateY(-50%)",
                            zIndex: 500,
                            background: "none",
                            border: "none",
                            fontSize: "2rem",
                            cursor: "pointer"
                        }}>{">"}</button>
                </div>
                
        </section>

        */