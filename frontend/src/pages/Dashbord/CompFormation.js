import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import {  Link } from "react-router-dom";
import ModelFormation from "../../components/ModelFormation";
import ModelDesFormation from "../../components/ModelDesFormation";

import './dashbord.css'
import { Delete,Update } from '@material-ui/icons'

export default function CompFormation(props) {
    const [DataFormation, setDataFormation] = useState([]);
    
    const [idforma,setIdforma] = useState('')
    const [nomForma,setnomForma] = useState('')

    const [recordForEditFormation, setRecordForEditFormation] = useState(null)
    const [recordForEditDetailForma, setRecordForEditDetailForma] = useState(null)

    const [openPopupFormation, setopenPopupFormation] = useState(false)
    const [openPopupDetailForma, setopenPopupDetailForma] = useState(false)

    useEffect(() => {
   
    const fetchData = async () => { 
     
      const res1 = await axios.get(`${BASE_URL}/formation/getAllFormation`);
      setDataFormation(res1.data);
   
    };
     fetchData();
  }, []);

  const addOrEditFormation = ( resetForm) => {

    resetForm()
    setRecordForEditFormation(null)
    setopenPopupFormation(false)

  }
  const addOrEditDetail = ( resetForm) => {

    resetForm()
    setRecordForEditDetailForma(null)
    setopenPopupDetailForma(false)

  }
  const deleteItemFormation = async (id) => {
    try{
      const res = await axios.delete(`${BASE_URL}/formation/${id}`)
      const newListItems = DataFormation.filter(item=> item._id !== id);
      setDataFormation(newListItems);

    }catch(err){
      console.log(err);
    }
  }

return( 
<div > 
    <br/>
    <button style={{color:"black"}} onClick={() =>setopenPopupFormation(true)}>ajouter</button>

<br/>
<div className='tabledecore' style={{overflow:"auto",height:"700px",width:"90%"}}> 
<table>
<thead>
<tr>  
<th> Catégorie</th>
<th> Numéro d'ordre</th>
<th> Type de Model </th>

<th> Photo de Formation </th>
  <th> Nom de Formation</th>
<th> 1er Texte</th>
<th> Liste</th>
<th> 2 éme Texte</th>
<th> Détail Formation</th>

<th> Action</th>
</tr> 
</thead>
    <tbody>
{DataFormation.map((item) => (
           

           <tr key={item._id}>
        
            <td style={{fontSize:"12px"}}> {item.categorie}</td>
            <td style={{fontSize:"12px"}}> {item.numOrdre}</td>
            <td style={{fontSize:"12px"}}> {item.typeModelFormation}</td>

            <td style={{width:"200px",height:"90px"}}><img src={item.photo} alt={item.photo}/> </td>
            <td style={{fontSize:"12px"}}> {item.nom}</td>

        <td >   <div style={{height:"90px",overflow:'auto'}}>  {item.text_1.map((item) => <p style={{fontSize:"12px"}}> {item.Text_1}<br/></p>)}</div></td>
        <td >   <div style={{height:"90px",overflow:'auto'}}>  {item.list.map((item) => <p style={{fontSize:"12px"}}> {item.TextList} <br/></p>)}</div></td>
        <td >   <div style={{height:"90px",overflow:'auto'}}> {item.text_2.map((item) => <p style={{fontSize:"12px"}}> {item.Text_2} <br/></p>)}</div></td>
<td>   <Link  onClick={() => { setopenPopupDetailForma(true); setRecordForEditDetailForma(null);setnomForma(item.nom)}}>   Voir </Link> </td>
         
             <td>
 
               <Link  onClick={() => deleteItemFormation(item._id)}>   <Delete /></Link>
               <Link  onClick={() => { setopenPopupFormation(true); setRecordForEditFormation(null);setIdforma(item._id)}}>   <Update /></Link>


  </td>
  

           </tr>
          
         ))} 
           </tbody>
</table></div>
<ModelDesFormation
                title="Nouvelle formation "
                openPopupDetailForma={openPopupDetailForma}
                setopenPopupDetailForma={setopenPopupDetailForma}
                addOrEditFormation={addOrEditDetail} nomForma={nomForma}/>
<ModelFormation
                title="Nouvelle formation "
                openPopupFormation={openPopupFormation}
                setopenPopupFormation={setopenPopupFormation}
                addOrEditFormation={addOrEditFormation} idforma={idforma}/>
</div>
)
}