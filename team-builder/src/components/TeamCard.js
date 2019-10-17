import React from "react";

const TeamCard = props => {
    console.log("this is from TeamCard", props);
    return (
        <div className="team-card-list">
            {props.teamList.map((teamList, index) =>{
                return (
                    <div className="teamList" key={index}>
                        <h3>{teamList.fullName}</h3>
                        <p>{teamList.email}</p>
                        <p>{teamList.role}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default TeamCard;