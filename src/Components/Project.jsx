import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";

const Project = (props) => {
    return (
        <div className={`${props.left ? "pr-8 sm:pr-12 md:pr-16 lg:pr-56 xl:pr-100" : "pl-8 sm:pl-12 md:pl-16 md:pl-32"} mb-24 `}>
            {/* <img className={`${props.left ? "right-side-border" : "left-side-border"} object-cover h-80 sm:h-96 md:h-104 xl:h-128 w-full `} src={props.image} alt=""/> */}
            <div className={`${props.left ? "right-side-border" : "left-side-border"} bg-cover h-80 sm:h-96 md:h-104 xl:h-116 2xl:h-124 w-full `} style={{ backgroundImage: `url(${props.image})` }} ></div>
            <div className={`${props.left ? "right-side-border mr-8 sm:mr-12 md:ml-16 md:rounded-3xl md:max-w-2xl" : "left-side-border ml-8 sm:ml-12 md:mr-16 md:ml-auto md:rounded-3xl md:max-w-2xl "} " bg-white bg-opacity-70 bd-blur p-8 -mt-8 "`} >
                <h3 className="text-2xl mb-4 font-bold">{props.name}</h3>
                <p className="pb-8">{props.body}</p>
                <div className=" mb-2 flex flex-row items-center">
                    <MdWeb size="1.7rem" />
                    <a className="ml-2 underline" href={props.link}>Visit the site</a>
                </div>
                <div className="flex flex-row items-center">
                    <FaGithub size="1.7rem" />
                    <a className="underline ml-2" href={props.github}>Or check out the github repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;
