import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import {  Link } from "react-router-dom";
import ModelSession from "../../components/ModelSession";

import './dashbord.css'
import { Delete,Update } from '@material-ui/icons'
export default function CompSession() {
    const [data, setData] = useState([]);


    const [listformation, setlistformation] = useState([]);
    const [listmodule, setlistmodule] = useState([]);
    const [recordForEditModule, setRecordForEditModule] = useState(null)

    const [openPopupModule, setopenPopupModule] = useState(false)

    const [duree, setduree] = useState();
    const [prix, setprix] = useState();
    const [nomCateg, setnomCateg] = useState();

    const [idforma, setidforma] = useState();

    const [formation, setformation] = useState(); 
    const [module, setmodule] = useState();

    useEffect(() => {
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/formation/getAllFormation`);
        setlistformation(res.data);
        setformation(res.data[0].nom)
      
      };
       fetchData();
    }, []);
    useEffect(() => {
   
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/sessionFormation/getAllSession`);
      setData(res.data);
   
    }; 
     fetchData();
  }, []);
  useEffect(()=>{
   if(formation){
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/module/getModulByForma/${formation}`);
      setlistmodule(res.data);
      setmodule(res.data[0].nom)

    };
     fetchData();
   }
  },[formation])
  useEffect(()=>{ 
    if(module&&formation&&nomCateg){
     const fetchData = async () => { 
       const res = await axios.get(`${BASE_URL}/module/getModule/${nomCateg}/${formation}/${module}`);
       setprix(res.data.prix);
       setduree(res.data.duree);

 
     };
      fetchData();
    }
   },[module,formation,nomCateg])



    const updateItemList=({item,index})=>{
        setduree(item.nom)
     setformation(item.formation)
     setprix(item.prix)
     setidforma(item._id)
     setopenPopupModule(true)
   
        }
    
    const deleteItemCategorie = async (id) => {
        try{ 
          const res = await axios.delete(`${BASE_URL}/sessionFormation/${id}`)
          const newListItems = data.filter(item=> item._id !== id);
          setData(newListItems);

        }catch(err){
          console.log(err);
        }
      }
  
return(
    <div > 
    <br/>
    <button style={{color:"black"}} onClick={() =>setopenPopupModule(true)}>ajouter</button>
    <br/>


<div className='tabledecore' style={{overflow:"auto",height:"600px",width:"80%"}}> 
<table >
<thead>
<tr>  
<th style={{width:"2%"}} > Numero d'ordre</th>

<th style={{width:"10%"}}> Formation</th>
<th style={{width:"10%"}}> Module </th>

  <th style={{width:"10%"}}> Durée</th>
  <th style={{width:"10%"}}> Prix </th>
  <th style={{width:"20%"}}> Session</th>

  <th style={{width:"40%"}}> Les membres</th>
 
<th> Action</th>
</tr> 
</thead> 
    <tbody>
{data.map((item,index) => (
           

           <tr >
            <td>{item.numDordre}</td>
            <td>{item.formation}</td>
            <td>{item.module}</td>

             <td>{item.duree}</td>
            <td >{item.prix}</td>
          <td>
          {item.Session.map((p)  => (
              <p>  {p.datedebut.substring(5, 10)} / {p.datefin.substring(5, 10)}  </p>
          ))}
          </td>
          <td>
          {item.membres.map((p)  => (
              <p>  {p.nom }  </p>
          ))}
          </td>
             <td>
 
               <Link  onClick={() => deleteItemCategorie(item._id)}>   <Delete /></Link>
               <button onClick={() => updateItemList({item,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/></button>


  </td>
   

           </tr>
          
         ))}  
           </tbody>
</table></div>
<ModelSession
idforma={idforma}
                openPopupModule={openPopupModule}
                setopenPopupModule={setopenPopupModule}
                 />
</div>
)
}
