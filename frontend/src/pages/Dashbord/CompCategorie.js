import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import {  Link } from "react-router-dom";

import './dashbord.css'
import { Delete,Update } from '@material-ui/icons'
export default function CompCategorie() {
    const [data, setData] = useState([]);
    const [picLoading, setprofilePictureLoading] = useState(false);
    const [profilePicture, setprofilePicture] = useState();
        const [photo, setphoto] = useState();

    const [idCateg,setidCateg]= useState();
    const [Modf, setModf] = useState(false);


    const [nomCateg, setnomCateg] = useState();
    const [textHome, settextHome] = useState();

    const [numOrdre, setnumOrdre] = useState();

    useEffect(() => {
   
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
      setData(res.data);
   
    };
     fetchData();
  }, []);
  const addCategorie = async (e) => {
    e.preventDefault();
    if(Modf==false){
       try{
        const config = {
          headers: { 
            "Content-type": "application/json",
          },
        };
        const res = await axios.post(BASE_URL+"/categorie/register", {
          nom:nomCateg,
          textHome:textHome,
          photo:photo,
          numOrdre:numOrdre,

        } ,
      
      config
    );
    window.location.reload(false);
      }catch(err){
        console.log(err);
      }
    }
    if(Modf==true){
      try{
        const config = {
          headers: { 
            "Content-type": "application/json",
          },
        };
        const res = await axios.put(BASE_URL+"/categorie/"+idCateg, {
          nom:nomCateg,
          textHome:textHome,
          photo:photo,
          numOrdre:numOrdre,

        } ,
      
      config
    );
    window.location.reload(false);
      }catch(err){
        console.log(err);
      }
    }
    }
    const updateItemList=({item,index})=>{
        setnomCateg(item.nom)
     setnumOrdre(item.numOrdre)
     settextHome(item.textHome)
   
     setModf(true)
     setidCateg(item._id)
        }
        const postDetails = (pics) => {
            setprofilePictureLoading(true);
            if (pics === undefined) {
             
              return;
            }
            if (pics.type === "image/jpeg"|| pics.type === "image/jpg" || pics.type === "image/png") {
              const dataa = new FormData();
              dataa.append("file", pics);
              dataa.append("upload_preset", "chat-app");
              dataa.append("cloud_username", "piyushproj");
              fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
                method: "post",
                body: dataa,
              })
                .then((res) => res.json())
                .then((dataa) => {
                  console.log(dataa.url.toString());
                setphoto(dataa.url.toString());

                })
        
                .catch((err) => {
                  console.log(err);
                });
            } else {
            
              return;
            }
          };
    const deleteItemCategorie = async (id) => {
        try{
          const res = await axios.delete(`${BASE_URL}/categorie/${id}`)
          const newListItems = data.filter(item=> item._id !== id);
          setData(newListItems);

        }catch(err){
          console.log(err);
        }
      }
  
return(
    <div > 
    <br/>
            <form style={{borderRadius:"20px",border:'5px solid black',marginTop:"20px",paddingBottom:"40px",width:"70%"}} onSubmit={e => addCategorie(e)}>
              <div style={{display:"flex" }}>
              <div style={{flex:'50%',paddingTop:"10px"}}>
              <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Ordre de Catégorie</label>
            <input style={{width:"80px" , borderWidth: "1px",borderStyle: "solid",borderColor : "black",height:"30px",marginLeft:"10px"}} type="number" placeholder='Ordre de categorie' onChange={e => {setnumOrdre(e.target.value)} } value={numOrdre}/> <br/><br/>
            <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Image de Catégorie</label>

            <input style={{width:"300px", marginLeft:"10px"}} type="file" accept="image/*"  onChange={(e) => postDetails(e.target.files[0])} value={profilePicture} /> 

              
             </div>
            <div style={{flex:'50%',paddingTop:"10px"}}>
            <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Nom de Catégorie</label>

            <input style={{width:"180px" , borderWidth: "1px",marginLeft:"30px",borderStyle: "solid",borderColor : "black",height:"30px"}} type="text" placeholder='Nom de categorie' onChange={e => {setnomCateg(e.target.value)} } value={nomCateg}/> <br/>
          <br/>
            <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Texte de Catégorie</label>


            <input style={{width:"180px" , borderWidth: "1px",marginLeft:"30px",borderStyle: "solid",borderColor : "black",height:"30px"}} type="text" placeholder='Nom de categorie' onChange={e => {settextHome(e.target.value)} } value={textHome}/> <br/>

                 </div>
           

             </div>
             <button style={{width:"90px",height:"30px",background:"DodgerBlue",color:"white",marginLeft:"40%",marginTop:"10px"}} > Ajouter</button>

      </form>
<br/>
<div className='tabledecore' style={{overflow:"auto",height:"600px",width:"1050px"}}> 
<table >
<thead>
<tr>  
<th> Ordre de Catégorie</th>

  <th> Nom de Catégorie</th>
  <th> Photo de Catégorie </th>
  <th> Texte</th>

<th> Action</th>
</tr> 
</thead>
    <tbody>
{data.map((item,index) => (
           

           <tr key={item._id}>
            <td>{item.numOrdre}</td>
             <td>{item.nom}</td>
            <td style={{width:'300px'}}> <img src={item.photo}/></td>
            <td style={{width:'300px'}}>{item.textHome}</td>

             <td>
 
               <Link  onClick={() => deleteItemCategorie(item._id)}>   <Delete /></Link>
               <button onClick={() => updateItemList({item,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/></button>


  </td>
  

           </tr>
          
         ))} 
           </tbody>
</table></div>
</div>
)
}
