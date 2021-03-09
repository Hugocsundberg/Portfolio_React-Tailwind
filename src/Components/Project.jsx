import React from 'react';

const Project = (props) => {
    return (
        <div>
            <img src="" alt=""/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.body}</p>
                <div>
                    <img src="" alt=""/>
                    <a href={props.link}>Visit the site</a>
                </div>
                <div>
                    <img src="" alt=""/>
                    <a href={props.github}>Or check out the github repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;
