
import React, {useState} from "react";



function Main() {
    const images = [
    "https://i.ibb.co/hxxXhgQg/main4.webp",
    "https://i.ibb.co/842Sd7q0/IMG-20250507-WA0110.webp",
    "https://i.ibb.co/ynvfNF5d/main2.webp",
    
    ];
    const [current, setCurrent] = useState(0);

    const siguienteImg = () => {
        setCurrent((prev) => (prev === images.length -1 ? 0: prev +1))
    };
    const anteriorImg = () => {
        setCurrent((prev) =>(prev === 0 ? images.length -1: prev -1))
    };
    

    return (
    <>
        <h3 >Creamos lo que sea! impresiones 3D y otras manufacturas!!!</h3>        
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
    </>
    );
} export default Main;

