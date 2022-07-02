import { useEffect, useState } from 'react';
import emailIcon from './asset/email.svg';
import locationIcon from './asset/location.svg';
import phoneIcon from './asset/phone.svg';
// import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState();

  const handleClick = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setData(data.results);
        console.log(data.results[0]);
      });
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="App">
      {data?.map((per, index) => (
        <div key={index} className="user-container">
          <div className="profile">
            <img src={per.picture.large} alt="user" />
            <h3>
              {per.name.title} {per.name.first} {per.name.last}
            </h3>
          </div>
          <div className="email">
            <img src={emailIcon} alt="email" />
            <p>{per.email}</p>
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="phone" />
            <p>{per.cell}</p>
          </div>
          <div className="location">
            <img src={locationIcon} alt="location" />
            <p>
              {per.location.city} - {per.location.country}
            </p>
          </div>
          <div className="age">
            <p>Age: {per.dob.age}</p>
            <p>Register Date: {per.registered.date.substr(0, 10)}</p>
          </div>
        </div>
      ))}

      <button className="btn-random" onClick={handleClick}>
        Random User
      </button>
    </div>
  );
}

export default App;
