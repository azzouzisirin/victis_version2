import React, { useState, useEffect } from 'react'
import { Dialog,  makeStyles } from '@material-ui/core';
import axios from "axios";

import {BASE_URL} from "../helper"
const useStyles = makeStyles(theme => ({ 
    dialogWrapper: {
        position: 'absolute'
        
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function ModelInscrit(props) {

    const {  openPopupModule, setopenPopupModule ,id,index} = props;
    const [checked, setChecked] = useState(false); 
    const [affich, setaffich] = useState(false); 

    const classes = useStyles();
    const [membre, setmembre] = useState({
      nom: "",
      telephne: "",
      email: "",
      information: "",
      session:""
  
    }); 

    const [formation, setformation] = useState({});
    useEffect(() => {
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/sessionFormation/${id}`);
        setformation(res.data);
        setmembre({ ...membre, session: res.data.Session[index] })
      console.log(res.data)
      };
       fetchData();
    }, [id,index]);
 
    const ajoutrInscript = async (e) => {
      e.preventDefault();
      if(checked==true){
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put(BASE_URL+"/sessionFormation/"+id, {
            membres:membre

            
            
            ,
         
          } ,
        
        config
      );
      setopenPopupModule(false)
      window.location.reload(false);


        }catch(err){
          console.log(err);
        }
      }
      else{
        setaffich(true)
      }
      
      
    
      }
      const handleChange = () => { 
    
        setChecked(!checked); 
        
      }; 
  
 
  

   
    return (
        <Dialog open={openPopupModule} maxWidth="xl"  classes={{ paper: classes.dialogWrapper,overflow: 'auto' }}>
                        <div  >

             
            <div style={{width:"650px" ,display:"flex",background:"black",color:"white"}}>
           <div style={{textAlign:"center",flex:"95%"}}>
            <h4>PRÉ-INSCRIPTION À UNE FORMATION</h4>
             </div>
             <button onClick={() =>setopenPopupModule(false)} style={{flex:"5%"}}>
           <p style={{margin:"auto",fontWeight:"600",fontSize:"22px"}}> X </p> 
         
            </button>
            </div>
            <br/>
          
            <div style={{marginLeft:"30px"}}>
            <p> <span style={{fontWeight:"bold",fontSize:"20px"}}>  Formation souhaitée : </span> 
            <br/> Formation {formation.formation } {formation.module } : Les Fondamentaux (<a href={'/DescriptModule/'+formation.idmodule } target='_blank' style={{color:"blue"}}>en savoir plus</a>) </p>
            <br/> 
      <p> <span style={{fontWeight:"bold",fontSize:"20px"}}>  Tarif : </span>  {formation.prix } € </p>
      <br/> 
      <p> <span style={{fontWeight:"bold",fontSize:"20px"}}> Date(s) :</span>  {membre.session.datedebut }</p>
      <br/> 
       <p><span style={{fontWeight:"bold",fontSize:"20px",marginBottom:"15px"}}>  Vos coordonnées : </span> </p>
       <br/> 
       <input type='text' style={{width:"570px",height:"30px",marginBottom:"15px"}} placeholder='Nom et prénom' required value={membre.nom} 
                           onChange={e => setmembre({ ...membre, nom: e.target.value })} /> <br/>
       <input type='text' style={{width:"570px",height:"30px",marginBottom:"15px"}} placeholder='Téléphone'  value={membre.telephne} required
                           onChange={e => setmembre({ ...membre, telephne: e.target.value })} /><br/>
       <input type='text' style={{width:"570px",height:"30px",marginBottom:"15px"}} placeholder='Email'  value={membre.email} required
                           onChange={e => setmembre({ ...membre, email: e.target.value })}/><br/>
       <textarea  style={{width:"570px",height:"90px",marginBottom:"15px"}} placeholder='Information complémentaire'  value={membre.information} required
                           onChange={e => setmembre({ ...membre, information: e.target.value })}/>
       <p> <span style={{fontWeight:"bold",fontSize:"20px"}}>  RGPD : </span> </p>
     <div style={{display:"flex"}}>
      
    <input type='checkbox' style={{marginRight:"15px"}} onChange={handleChange}/>
      <p style={{fontSize:"10px",marginTop:"10px"}}>En soumettant ce formulaire, j’accepte que les informations saisies  soient exploitées dans le cadre de la demande de <br/>  contact/devis et de la relation commerciale qui peut en découler. *</p>
      </div> 
     {affich==true? <p style={{color:'red'}}> Ce champ est obligatoire.</p>:null}
       </div> 
       <button style={{width:'80%',background:'black',color:"white",textAlign:"center",fontSize:"21px",margin:"20px 9%",borderRadius:"7px"}}onClick={e => ajoutrInscript(e)} > Envoye</button>
</div>
        </Dialog>
    )
}

