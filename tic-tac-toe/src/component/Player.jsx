import {useState} from "react";

// export default function Player({name, symbol}){
//
//     const[isEditing, setIsEditing] = useState(false);
//     return(
//         <li>
//               <span className="player">
//                 <span className="player-name">{name}</span>
//                 <span className="player-symbol">{symbol}</span>
//               </span>
//             <button>Edit</button>
//         </li>
//     )
// }


export default function Player({initialName, symbol, isActive, onChangeName}){

    function handleEditClick(){
        setIsEditing((editing) => !editing)
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    const[playerName, setPlayerName] = useState(initialName)
    let [isEditing, setIsEditing] = useState(false);

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = "Edit"

    if(isEditing){
        editablePlayerName = <input type="text"  value={playerName} onChange={handleChange} required/>
        //btnCaption = "Save"
    }
    return(
        <li className={isActive ? "active" : undefined}>
              <span className="player">
                  {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}