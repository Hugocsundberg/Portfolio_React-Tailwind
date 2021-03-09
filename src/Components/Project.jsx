import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";

const Project = (props) => {
    return (
        <div className={`${props.left ? "pr-8 sm:pr-12" : "pl-8 sm:pl-12"} mb-24 `}>
            <img className={`${props.left ? "right-side-border" : "left-side-border"} object-cover h-80 sm:h-96 w-full `} src={props.image} alt=""/>
            <div className={`${props.left ? "right-side-border mr-8 sm:mr-12" : "left-side-border ml-8 sm:ml-12"} " bg-white bg-opacity-70 bd-blur p-8 -mt-8 "`} >
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
