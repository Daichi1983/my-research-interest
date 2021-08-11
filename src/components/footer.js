import React from "react"
import "../components/layout.module.css"

const Footer = () =>{
    return(
        <footer
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>
            <p>©Daichi Uchibori 2021 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer