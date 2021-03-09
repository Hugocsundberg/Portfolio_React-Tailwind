import React, { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';


const MoveShape = () => {
    return (
        <div className="absolute w-screen top-36">
           <div className="move-shape animate-moveAround absolute right-36 bg-fuchsia-500 w-44 h-44"></div>
           <div className="move-shape animate-moveAroundReverse absolute right-36 rounded-full bg-blue-500 w-44 h-44"></div> 
        </div>
    );
}

export default MoveShape;
