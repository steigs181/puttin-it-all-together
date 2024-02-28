import React, { useState } from 'react';


const Person = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [birthday, setBirthday] = useState(age);
    return (
        <>
            <div className="person-card">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick= {(event) => setBirthday(birthday + 1)}>Button for {firstName}</button>
            </div>
        </>
    );
}


export default Person;