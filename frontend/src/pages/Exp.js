import React, { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from "axios";
import {BASE_URL} from "../helper"
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContuctUs from '../components/ContuctUs';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [MoisDate, setMoisDate] = useState([]);
  const [data, setData] = useState([]);
  const [nomFormation, setnomFormation] = useState([]);
  const [datedebut, setdatedebut] = useState([]);
  const [idmodule, setidmodule] = useState([]);
  const [prix, setprix] = useState();

  const [openPopupModule, setopenPopupModule] = useState(false)
  const [categ, setcateg] = useState(null)
  const [id, setid] = useState(null)
  const [index, setindex] = useState(0)

  const month = ["Janv.","Févr.","Mars","Avr.","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."];
  useEffect(()=>{
      var dateActuelle = new Date();
      var dateActuelle = new Date();
      var dateDans4Mois =""
      var x=[]
      for(var i=0; i<6;i++){
           dateDans4Mois = new Date(dateActuelle.getFullYear(), dateActuelle.getMonth() + i, dateActuelle.getDate());
           x[i] = dateDans4Mois.getMonth();
         

      }
      setMoisDate(x);


  },[])
  const [checked, setChecked] = useState(false); 
  const [affich, setaffich] = useState(false); 

  const [membre, setmembre] = useState({
    nom: "",
    telephne: "",
    email: "",
    information: "",
    session:""

  }); 

  const [module, setmodule] = useState({});


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

  useEffect(() => {
 
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/sessionFormation/getAllSession`);
      setData(res.data);
   
    }; 
     fetchData();
  }, []);

  function DeterminValeur({id,index, s,d,nomFormation,prix,categ,module,datedebut,idmodule}){
    setnomFormation(nomFormation)
    setmodule(module)
    

    setdatedebut(datedebut[index].datedebut)
    setcateg(categ)
    setidmodule(idmodule)
    setprix(prix)
    if(s.datedebut.substring(5,7)==  (Number(d)+1)){
      return(<button style={{background:"rgb(40, 116, 252) ",width:"100%"}} onClick={()=>{setid(id);setmembre({ ...membre, session: index });setindex(index);setOpen(true)}}> {s.datedebut.substring(8,10)} - {s.datefin.substring(8,10)} </button>)
  
    }
    else{
      return(null)
  
    }
  }
      
  return (
    <div>
    <NavBar/>

<div className="divTablesite"> 
   <table > 
   <thead>
    <tr >
        <th style={{width:"40%"}}> Formations </th>
        <th> Durée</th>
        <th> Prix</th>
    <th>  {month[MoisDate[0]]}</th> 
    <th>   {month[MoisDate[1]]}</th> 
    <th>   {month[MoisDate[2]]}</th> 
    <th>   {month[MoisDate[3]]}</th> 
    <th>   {month[MoisDate[4]]}</th> 
    <th>   {month[MoisDate[5]]}</th> 

 
    </tr>
    </thead>
    <tbody style={{textAlign:'center'}}>
   
    {data.map((p)  => (
         <tr > 
    <td style={{textAlign:'left',paddingLeft:'30px'}}>
    Formation  {p.formation} {p.module}
    </td>
    <td>
      {p.duree}
    </td>
    <td>
      {p.prix}   
    

    </td>

    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} nomFormation={p.formation} module={p.module} datedebut={p.Session} index={index} s= {p.Session[index]} d={MoisDate[0].toString().padStart(2, '0')}/> ))}
    
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} index={index}  nomFormation={p.formation} module={p.module} datedebut={p.Session}   s= {p.Session[index]} d={MoisDate[1].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} index={index} nomFormation={p.formation} module={p.module} datedebut={p.Session}  s= {p.Session[index]} d={MoisDate[2].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} index={index} nomFormation={p.formation} module={p.module} datedebut={p.Session}  s= {p.Session[index]} d={MoisDate[3].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} index={index} nomFormation={p.formation} module={p.module} datedebut={p.Session}   s= {p.Session[index]} d={MoisDate[4].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} prix={p.prix} categ={p.categorie} index={index} nomFormation={p.formation} module={p.module} datedebut={p.Session} s= {p.Session[index]} d={MoisDate[5].toString().padStart(2, '0')}/> ))}
    </td>



    </tr>
    ))}




      </tbody>
   </table>
   </div>
<ContuctUs/>
    <Footer/>

    
   
   
   
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
     

      >
        <Fade in={open}    style={{width:"650px"}}>
          <Box sx={style}>
          <div  >

             
<div style={{textAlign:"center",background:"black",color:"white"}}>
<h4>PRÉ-INSCRIPTION À UNE FORMATION</h4>
 </div>

<br/>

<div style={{marginLeft:"30px"}}>
<p> <span style={{fontWeight:"bold",fontSize:"20px"}}>  Formation souhaitée : </span> 
<br/> Formation {nomFormation} {module} : Les Fondamentaux (<a href={'/DescriptModule/'+categ +"/"+nomFormation+"/"+module } target='_blank' style={{color:"blue"}}>en savoir plus</a>) </p>
<br/> 
<p> <span style={{fontWeight:"bold",fontSize:"20px"}}>  Tarif : </span>  {prix } € </p>
<br/> 
<p> <span style={{fontWeight:"bold",fontSize:"20px"}}> Date(s) :</span>  {datedebut }</p>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}