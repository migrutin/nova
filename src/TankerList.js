import React from 'react';
import Tanker from './Tanker';
import Header from './Header';

function TankerList() {
  const tankerData = [
    { number: 1, name: "Tanker 1" },
    { number: 2, name: "Tanker 2" },
    { number: 3, name: "Tanker 3" },
    { number: 4, name: "Tanker 4" },
    { number: 5, name: "Tanker 5" },
    { number: 6, name: "Tanker 6" },
    { number: 7, name: "Tanker 7" },
    { number: 8, name: "Tanker 8" },
    { number: 9, name: "Tanker 9" },
    { number: 10, name: "Tanker 10" },
    { number: 11, name: "Tanker 11" },
    { number: 12, name: "Tanker 12" },
  ];

  return (
        
    <div className="tanker-list">
        <Header/>
      {tankerData.map((tanker) => (
        <Tanker 
          key={tanker.number}
          tankerNumber={tanker.number}
          tankerName={tanker.name}
        />
      ))}
    </div>
  
  );
}

export default TankerList;
