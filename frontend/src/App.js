import logo from './logo.svg';
import './App.css';
import Card from './Components/Card.tsx';
import Clicker from './Components/Clicker.tsx';
import Box from "@mui/material/Button";
import OptionsBox from './Components/OptionsBox.tsx';
import { useState, useEffect } from 'react';
import axios from 'axios';




function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/items');
      setMenu(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getFoodNameById = (id) => {
    const selectedItem = menu.find(item => item._id === id);
    return selectedItem ? selectedItem.food_name : 'Item not found';
  };

  const getRatingById = (id) => {
    const selectedItem = menu.find(item => item._id === id);
    return selectedItem ? selectedItem.current_rating : 'Item not found';
  };

  return (
    <div style={{justifyContent: 'center', textAlign: 'center', width: '100%', height: '100%', background: '#d1f0ff'}}>
      <div style={{background: '#d1f0ff', padding: '50px', marginBottom: '20px'}}>
        <h1 style={{marginTop: '30px', color: '#0d7fdb'}}>Welcome to Your Meal Ratings!</h1>
      </div>
      
      <div background= '#ffe6fe'>
        <h2 background= '#ffe6fe' color='#0d7fdb'>Today's Menu</h2>
        <div style={{height: "100%", background: '#ffe6fe'}}>
          <Card foodName={getFoodNameById('650cdbfd0d9b4ca248c91f26')} rating={getRatingById('650cdbfd0d9b4ca248c91f26')}/>
          <Card foodName={getFoodNameById('650cdbfd0d9b4ca248c91f27')} rating={getRatingById('650cdbfd0d9b4ca248c91f27')}/>
          <Card foodName={getFoodNameById('650cdbfd0d9b4ca248c91f26')} rating={getRatingById('650cdbfd0d9b4ca248c91f28')}/>
        </div>
      </div>
      <div>
      <div>
    </div>
      </div>
      <div style={{ background: "#d1f0ff" }}>
  <OptionsBox
    food1= {getFoodNameById('650cdbfd0d9b4ca248c91f26')}
    food2={getFoodNameById('650cdbfd0d9b4ca248c91f27')}
    food3={getFoodNameById('650cdbfd0d9b4ca248c91f28')}
  />
</div>
    </div>
  );
}

export default App;
