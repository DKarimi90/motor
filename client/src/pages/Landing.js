// import React from 'react'

// function Landing() {
//   return (
//     <div className='landing'>
//       <div className='right'>
//           <h4>
//           Motor World Kenya
//             </h4>
//           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   ibus nibh. Duis vel tellus consectetur, iaculis ligula ac, convallis lacus.</span>
//         </div>
       
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
        
        
//     </div>
//   )
// }

// export default Landing


// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleShowCars = () => {
//     setShowCars(true);
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <h4>Motor World Kenya</h4>
//         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   ibus nibh. Duis vel tellus consectetur, iaculis ligula ac, convallis lacus.</span>
//         <button onClick={handleShowCars}>Show Cars</button>
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;




//ALTERNATIVE 

// import React, { useState, useEffect } from 'react';

// function Landing() {
//   const [cars, setCars] = useState([]);
//   const [showCars, setShowCars] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/cars")
//       .then(res => res.json())
//       .then(data => setCars(data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleToggleCars = () => {
//     setShowCars(!showCars);
//   }

//   return (
//     <div className='landing'>
//       <div className='right'>
//         <div className='motor'>
//         <h4>Motor World Kenya</h4>
//         <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
//             To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
//         </div>
//         <button onClick={handleToggleCars} className="btn">{showCars ? 'Hide Cars' : 'Show Cars'}</button>
        
//       </div>
//       {!showCars && (
//         <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
//       )}
//       {showCars && (
//         <div className='card'>
//           {cars.map(car => (
//             <div key={car.id} className='car'>
//               <h4>{car.name}</h4>
//               <img src={car.image_url} alt={car.make + " " + car.model} />
//               <p>Model: {car.model}</p>
//               <p>Transmission: {car.transmission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Landing;



//ALTERNATIVE 
import React, { useState, useEffect } from 'react';

function Landing() {
  const [cars, setCars] = useState([]);
  const [showCars, setShowCars] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error(err));
  }, []);

  const handleToggleCars = () => {
    setShowCars(!showCars);
  }

  const handleCarClick = (car) => {
    setSelectedCar(car);
  }

  const handleBackClick = () => {
    setSelectedCar(null);
  }

  return (
    <div className='landing'>
      <div className='right'>
        <div className='motor'>
        <h4>Motor World Kenya</h4>
        <p>Hola! We’re so excited you are a part of Motor World Kenya. We love all our customers, and that includes you too!
            To show our happiness at having you here, we are offering you a 20% discount on any unit of your choice. Enjoy & spread the love!</p>
        </div>
        <button onClick={handleToggleCars} className="btn">{showCars ? 'Hide Cars' : 'Show Cars'}</button>
      </div>
      {!showCars && (
        <img src="https://static.wixstatic.com/media/0031ef_b041ebb505684b8a9219231149f74ad8~mv2.png/v1/crop/x_43,y_25,w_872,h_491/fill/w_872,h_491,al_c,q_90,enc_auto/img.png" alt="suv" />
      )}
      {showCars && !selectedCar && (
        <div className='card'>
          {cars.map(car => (
            <div key={car.id} className='car'>
              <h4>{car.name}</h4>
              <img src={car.image_url} alt={car.make + " " + car.model} />
              <p>Model: {car.model}</p>
              <p>Transmission: {car.transmission}</p>
              <button onClick={() => handleCarClick(car)} className='details'>View Car Details</button>
            </div>
          ))}
        </div>
      )}
      {selectedCar && (
        <div className='car-details'>
          <h4>{selectedCar.name}</h4>
          <img src={selectedCar.image_url} alt={selectedCar.make + " " + selectedCar.model} />
          <p>Model: {selectedCar.model}</p>
          <p>Transmission: {selectedCar.transmission}</p>
          <p>Price: {selectedCar.price}</p>
          <p>Mileage: {selectedCar.mileage}</p>
          <button onClick={handleBackClick} className="details">Back to Cars</button>
        </div>
      )}
    </div>
  );
}

export default Landing;


