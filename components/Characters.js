import React from "react";

const characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
            <div className="card" style={{minWidth: "200px"}}>
               <img src={item.image}/>
               <div className="card-body">
               <h5 className="card-title"> {item.name} </h5>
               <hr />
               <p> {item.gender} {item.species} </p>
               <p> location:{item.location.name} </p>
               <p> {item.status} </p>
               

               </div>
             </div>
        </div>
      ))}
    </div>
  );
};

export default characters;
