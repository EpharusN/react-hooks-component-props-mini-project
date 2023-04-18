import React from "react";

const About = (props) => {
    return(
        <aside>
        <img src= {props.src}alt={props.alt}/>
        <p>{props.about}</p>
        </aside>

    )

}

export default About;