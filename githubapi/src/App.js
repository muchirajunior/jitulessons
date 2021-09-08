import './App.css';
import { useEffect, useState } from 'react';
import NoData from "./noData"

function App() {

  var [data, setData]=useState([])

   async function getData(){
    try {
      let results=await fetch("https://api.github.com/repos/scala/scala/contributors?");
      let response= await results.json();
      console.log(response);
      response.length ? setData(response) : setData([]);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className="App">
      <h1> GITHUB API TOP 30 CONTRIBUTERS RANKING </h1>
      <br/>

      <div className="body" >
        {
          data.length ? data.map((item)=> <div className="card card-body" >
          <img src={item.avatar_url} class="card-img-top"  alt=""/>
           <div className="card-body">
             <h5 className="card-title"> {item.login}  </h5>
             <p className="card-text"> id : {item.id} <br/> type : {item.type} <br/> contributions : {item.contributions}   </p>
             <a href={item.html_url} className="btn btn-primary">Go somewhere</a>
           </div>
         </div>
      ) : < NoData />
        }
       </div> 
     
    </div>
  );
}

export default App;
