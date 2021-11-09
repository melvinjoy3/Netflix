import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import YouTube from 'react-youtube';
// import {originals,action} from '../../Urls';
function RowPost(props) {
  const [details, setDetails] = useState([]);
  const [urlId,setUrlId] = useState('')

//   useEffect axios get data
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setDetails(response.data.results);
      })
      .catch((err) => {
        //    alert('Network Error')
      });
  }, []);

//   iframe design
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};

const handleMovie =(id)=>{
console.log(id)
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US&`).then((response)=>{
    if(response.data.results.length !==0 ){
        setUrlId(response.data.results[0])
    }else{
        console.log("array empty")
    }
    
})

}
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {details.map((item) => {
          return (
            <img onClick={()=> handleMovie(item.id)}
              className={props.isSmall ? 'smallposter' :"poster"}
              src={`${imageUrl+item.backdrop_path}`}
              alt=""
            />
          );
        })}
      </div>
      { urlId &&
          <YouTube style={{width:"100%"}} videoId={urlId.key} opts={opts}  /> 
      }
      
    </div>
  );
}
export default RowPost;
