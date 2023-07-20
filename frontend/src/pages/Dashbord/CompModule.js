import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import './dashbord.css'
import { Delete,Update } from '@material-ui/icons'
import {  Link } from "react-router-dom";
import ModelModule from "../../components/ModelModule";


export default function CompModule() {
 
    const [DataModule, setDataModule] = useState([]);
    const [openPopupModule, setopenPopupModule] = useState(false)
    const [recordForEditModule, setRecordForEditModule] = useState(null)

    const [idforma,setIdforma] = useState('')


    useEffect(() => {
   
    const fetchData = async () => { 
    
      const res2= await axios.get(`${BASE_URL}/module/getAllModule`);
      setDataModule(res2.data);
    };
     fetchData();
  }, []);
  const addOrEditModule = ( resetForm) => {

    resetForm()
    setRecordForEditModule(null)
    setopenPopupModule(false)
  }
  const deleteItemModule = async (id) => {
    try{
      const res = await axios.delete(`${BASE_URL}/module/${id}`)
      const newListItems = DataModule.filter(item=> item._id !== id);
      setDataModule(newListItems);

    }catch(err){
      console.log(err);
    }
  }
return(
    <div > 
    <br/>
    <button style={{color:"black"}} onClick={() =>setopenPopupModule(true)}>ajouter</button>

<br/>
<div className='tabledecore' style={{overflow:"auto",height:"700px",width:"90%"}}> 
<table>
<thead>
<tr>  
<th style={{width:"2%"}}> Numero d'ordre</th>

<th style={{width:"8%"}}>  formation</th>
<th style={{width:"8%"}}> Nom de module </th>
<th style={{width:"8%"}}> Titre de module </th>
<th style={{width:"8%"}}> Type de model </th>

<th  style={{width:"8%"}}> 1 ere text</th>

<th style={{width:"30%"}}> programme</th>
<th style={{width:"8%"}}> Duree</th>
<th style={{width:"8%"}}> Prix</th>
<th style={{width:"8%"}}> Action</th>
</tr> 
</thead>
    <tbody>
{DataModule.map((item) => (
           
 
           <tr key={item._id}>
        
            <td style={{fontSize:"12px"}}> {item.numOrdre}</td>
            <td style={{fontSize:"12px"}}> {item.nomFormation}</td>
            <td style={{fontSize:"12px"}}> {item.nom}</td>
            <td style={{fontSize:"12px"}}> {item.TitreModule}</td>
            <td style={{fontSize:"12px"}}> Model {item.typeModule}</td>
        <td >   <div style={{height:"90px",overflow:'auto'}}>  {item.text_1?item.text_1.map((item) => <p style={{fontSize:"12px"}}> {item.Text_1}<br/></p>):""}</div></td>
       
        <td >   <div style={{height:"90px",overflow:'auto'}}> 
          <table style={{width:'100%'}}> 
         {item.programme?item.programme.map((item) => 
         <tr> 
         <td style={{fontSize:"12px"}}> {item.grandtitre} <br/></td>
         <td > {item.list.map((l) => 
          <li>{l.name}</li>
         )}</td>
         
         </tr>       
            ):""}
               {item.progModel ? (
                <div>
                  {item.progModel.map((s, index) => (
                    <div key={index}>
                      <h1 style={{fontSize:'29px',textDecoration:"underline"}}>{s.grandtitre}</h1>
                      {s.prog.map((m, index) => (
                        <div key={index}>
                          <h3 style={{fontSize:'24px',margin:"6px"}}>{m.titre}</h3>
                          <ul>
                         
                            {m.list.map((h, index) => (
                              <li style={{marginLeft:"12px"}}>{h.nameModel2}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}
         </table> </div></td>

        <td style={{fontSize:"12px"}}> {item.duree?item.duree:""}</td>
            <td style={{fontSize:"12px"}}> {item.prix?item.prix:""}</td>

             <td>
 
               <Link  onClick={() => deleteItemModule(item._id)}>   <Delete /></Link>
               <Link  onClick={() => { setIdforma(item._id);setopenPopupModule(true); setRecordForEditModule(null)}}>   <Update /></Link>


  </td>
  

           </tr>
          
         ))} 
           </tbody>
</table></div>
<ModelModule
                title="Nouvelle formation "
                openPopupModule={openPopupModule}
                setopenPopupModule={setopenPopupModule}
                addOrEditModule={addOrEditModule} idforma={idforma}/>
</div>
)
}