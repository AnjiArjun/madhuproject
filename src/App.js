import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';

function App() {
  
   const [selectedGenre, setselectedGenre] = useState()
  const [data,setData] = useState([])
  const [movie,setMovie] = useState([])
  const [finalmovie, setFinalmovie]= useState([])

 
  const movielist=(e)=>{

    setselectedGenre(e.target.innerHTML)
  }

  useEffect(() => {    
   
    let abcd = movie.filter((xyz)=>{

      if(xyz.Genre === selectedGenre)
      {
        return true
      }
    })
  
    setFinalmovie(abcd)
    console.log(finalmovie)

  }, [selectedGenre])

  
  useEffect(() => {

    axios.get("https://cultnerds.io/careers/410ed8f3-56cf-40af-ab45-d201f3e96cd3/genres.json").then(
      response=>(setData(response.data))
      
   )
   
  },[])
  useEffect(() => {

    axios.get("https://cultnerds.io/careers/410ed8f3-56cf-40af-ab45-d201f3e96cd3/movies.json").then(
      response=>(setMovie(response.data))
      
   )
   
  },[])

  return (
    <div className="App">

         <div>
           <div className='overButtons'>
           {
             data.map((obj)=>{
               return(
                 <div className='buttons'>
              <button  onClick={(e)=>{movielist(e)}} style={{width:"150px",height:"50px"}} >{obj}</button>
               
                </div>
               )
             })
           }
           </div>
              <h1 style={{textAlign:"start",marginLeft:"5%"}}>{selectedGenre}:</h1>
            <div className='rowPosters' >
           {
             finalmovie.map((obj)=>{
               return(
                   <div className='rowPoster'>
                       <div className='header'>
                      <a href={`https://en.wikipedia.org/wiki/${obj.Title}`} target={"_blank"}> {obj.Title}</a></div> 
                      </div>
               )
             })
           }
            </div>
         </div>  
    </div>
  );
}

export default App;
