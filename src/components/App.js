
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
  }

  

  render() {

    var arr = [];

    this.cityList.forEach( function (cityname){
      if(cityname.name=='Goa' || cityname.name=='Amsterdam' || cityname.name=='New York' || cityname.name=='Darjeeling' || cityname.name=='Tokyo' || cityname.name=='Lonavala'){
        arr.push(cityname);
      }
    })

    let indianCity = arr.filter((city,i)=>(city.country=='India'));
    
    
    
//     console.log("array is : ", arr);
    // console.log(this.cityList);YYY
    // var length = this.cityList.length;
    return (
      <div id="main">
        
        {/* var newArr = {this.cityList.map( item => {
          return { name : item.name , country : item.country }
        })}

        console.log(newArr); */}

        <ol>
           {indianCity.map( (item , index) => {
            return <li key={`location${index + 1}`}>{item[0]} {item.name}</li>;
          })}
        </ol>
         

      </div>
    )
  }
}


export default App;
