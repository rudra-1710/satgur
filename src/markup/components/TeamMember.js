import React from 'react';

const TeamMember = ({ image, name, designation, email, social }) => {
    return (
        <div className="team-member">
            <figure>
                <img src={image} alt="team-member" />
                <div className="team-social">
                    <ul>
                        { 
                            social.map((item, index) => {
                                return (
                                    <li key={index}><a href={item.href}><i className={item.icon}></i></a></li>        
                                );
                            })
                        }
                    </ul>
                </div>
            </figure>
            <figcaption>
                <h4 className="heading-sm">{name}</h4>
                <p className="c-grey">{designation}</p>
                <a href={`mailto:${email}`} className="link">
                    <span>{email}</span>    
                </a>
            </figcaption>
        </div>
    );
};

export default TeamMember;
