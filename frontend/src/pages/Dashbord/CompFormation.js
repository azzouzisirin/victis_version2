import React, { useState,useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import {  Link } from "react-router-dom";
import ModelFormation from "../../components/ModelFormation";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Delete , Update,Check} from '@material-ui/icons'


import './dashbord.css'

export default function CompFormation(props) {
    const [DataFormation, setDataFormation] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [openDetail, setopenDetail] = React.useState(false);

    const handleClose = () => {setOpen(false);setopenDetail(false)}

    const [idforma,setIdforma] = useState('')
    const [nomForma,setnomForma] = useState('')

    const [recordForEditFormation, setRecordForEditFormation] = useState(null)
    const [recordForEditDetailForma, setRecordForEditDetailForma] = useState(null)
    const [updtouNonText_1ModifModif, setupdtouNonText_1ModifModif] = useState(0);
    const [updtouNonListModif, setupdtouNonListModif] = useState(0);
    const [updtouNonText_2ModifModif, setupdtouNonText_2ModifModif] = useState(0);
    const [typeModuleModif, settypeModuleModif] = useState("0");
    const [persosModif, setpersosModif] = useState([
   
    ]);

    const [Text_1Modif, setText_1Modif] = useState();
    const [Text_2Modif, setText_2Modif] = useState();
    const [TextListModif, setTextListModif] = useState();
    const [photoModif, setphotoModif] = useState();

    const [indexupModif, setindexupModif] = useState();
    const [openPopupFormation, setopenPopupFormation] = useState(false)

    const [nomCatg, setnomCatg] = useState("")
    const [nomModul, setnomModul] = useState("")

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
  const [updtouNonText_1, setupdtouNonText_1] = useState(0);

  const [Text_1, setText_1] = useState();
 
  const[ indText_1,setindText_1]= useState();

  const [listText_1, setlistText_1] = useState([]);

  const [prix, setprix] = useState();
  const [duree, setduree] = useState();

  const [listProg, setListProg] = React.useState([]);
  const [name, setName] = React.useState('');
  const [TextProg, setTextProg] = useState();
  const [new_data, setNew_data] = useState({
    titre: "",
    list: []

  }); 
  const [persos, setPersos] = useState([
 
  ]);
  const [listTextProg, setlistTextProg] = useState([]);


 
  


    useEffect(() => {
      if(nomCatg&&nomForma&&nomModul){
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/detailFormation/getModuleByNom/`+nomCatg+"/"+nomForma+"/"+nomModul);
        setlistText_1(res.data.text_1)
        setPersos(res.data.programme)
        setprix(res.data.prix)
        setduree(res.data.duree)

      };
       fetchData();
       }
    }, [nomForma,nomCatg,nomModul]);

    const addhandlerText_1 = e => {
      e.preventDefault();
   
      if(updtouNonText_1==0){
        const newList = listText_1.concat({ Text_1 });
        setlistText_1(newList);
    
      setText_1('')
      }else{
        const newState = listText_1.map((obj,index) => {
           if (index === indText_1) {
             return {...obj, Text_1: Text_1};
           }
     
           return obj;
         });
     
         setlistText_1(newState);
         setupdtouNonText_1(0)

         setText_1('')
        
     }
    };
    const updateItemText_1=({p,index})=>{
      setupdtouNonText_1(1)
      setText_1(p.Text_1)
      setindText_1(index)


     }
     const deleteItemText_1 =  (Text_1) => {
      const newList = listText_1.filter((item) => item.Text_1 !== Text_1);

      setlistText_1(newList);    
    }

const addFormation = async (e) => {
      e.preventDefault();
   

        try{
        

          const config = {
            headers: { 
              "Content-type": "application/json",
            }, 
          };
          const res = await axios.put(BASE_URL+"/detailFormation/"+nomForma, {
            text_1:listText_1,
       
            programme:persos,
            duree:duree,
            prix:prix,
          } ,
        
        config
      );
      setPersos([])
      setText_1('')
      setName('')

        }catch(err){
          console.log(err);
        }
      
      
      }
      function handleChange(event) {
        setName(event.target.value);
      }
 
      function handleAdd() {
        const newList = listProg.concat({ name });
     setName('')
     setNew_data({ ...new_data, list: newList })
         setListProg(newList);
         
       }
       const addhandlerListProg = e => {
        e.preventDefault();
     
        const newList = listTextProg.concat({ TextProg });
        setlistTextProg(newList);
      setNew_data({ ...new_data, titre: TextProg })
        setNew_data({ ...new_data, list: listProg })
        setPersos([...persos, new_data]);
        setNew_data({ titre: "", list: [] });
        setListProg([]);
        
    
    
      };
    
      const deleteItem =  (titre) => {
        const newList = persos.filter((item) => item.titre !== titre);
    
        setPersos(newList);    
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
<td>   <Link  onClick={() => { setOpen(true); setRecordForEditDetailForma(null);setnomForma(item.nom)}}>   Voir </Link> </td>
         
             <td>
 
               <Link  onClick={() => deleteItemFormation(item._id)}>   <Delete /></Link>
               <Link  onClick={() => { setopenPopupFormation(true); setRecordForEditFormation(null);setIdforma(item._id)}}>   <Update /></Link>


  </td>
  

           </tr>
          
         ))} 
           </tbody>
</table></div>

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
        <Fade in={open}    style={{width:"67%",height:"75%",overflow:"auto"}}>
          <Box sx={style}>
 
         <div > 
     <h2 style={{textAlign:"center"}}> Détail formation par pays</h2><br/>
          <p style={{marginLeft:"10px",fontSize:"20px"}}> <span style={{marginRight:"10px",fontWeight:'600'}}> Nom de Formation </span>  {nomForma} </p>
          <p style={{width:"150px",height:"30px"}} > </p>
         
           <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Durée </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setduree(e.target.value)} } value={duree}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Prix </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setprix(e.target.value)} } value={prix}/>
          <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table style={{width:'90%'}}  >
        <thead>
          <tr>
            <th style={{width:"900px"}}>1er Texte</th>
           <th> Action</th>
          </tr> 
        </thead>
        <tbody>
          {listText_1.map((p,index)  => (
            <tr >
              <td>{p.Text_1}</td>
             
              <td> 
              <button onClick={() => updateItemText_1({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/></button>

                <button  onClick={() => deleteItemText_1(p.Text_1)}>   <Delete /></button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>

    <td>     <input
              type="text"
                         value={Text_1}
              onChange={e => setText_1( e.target.value )}
            /> </td>
            <td>      <button onClick={addhandlerText_1} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/></button>
 </td>

    </tr>
    </tfoot>
      </table>

      </div>
 
      <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
    <table style={{width:'90%'}} >
          <thead>
            <tr>
              <th style={{width:"900px"}} colspan="2">Programme</th>
             <th rowSpan="2"> Action</th>
            </tr> 
            <tr>
              <th >Titre</th>
             <th> Liste</th>
            </tr> 
          </thead>
          <tbody>
          {persos.map((p)  => (
            <tr >
              <td>{p.titre}</td>
              
             <td>
             {p.list.map((l)  => (
             <li style={{paddingLeft:'1px'}}> {l.name}</li>
             ))}
             </td>
             <td> <button  onClick={() => deleteItem(p.titre)}>   <Delete /></button></td>
                 </tr>
          ))}
        </tbody>
          <tfoot>
        <tr>
  
      <td>     <input
                type="text"
                value={new_data.titre}
                           onChange={e => setNew_data({ ...new_data, titre: e.target.value })}

              /> </td>
               <td>   <input type="text" style={{width:"80%"}} value={name} onChange={handleChange} />
           <button type="button" onClick={handleAdd}>
             <Check/>
           </button>
           <ul>
           {listProg.map((item) => (
             <li key={item.id}>{item.name}</li>
           ))}
         </ul>
           
           
            </td>
              <td>      <button onClick={addhandlerListProg} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/></button>
   </td>
  
      </tr>
      </tfoot>
        </table>
  
        </div>
 
      
      <button style={{width:"90px",height:"30px",background:"DodgerBlue",color:"white",marginLeft:"15px"}}onClick={e => addFormation(e)}> enregistrer</button>

      
      </div>
          </Box>
        </Fade>
      </Modal>
      <ModelFormation
                title="Nouvelle formation "
                openPopupFormation={openPopupFormation}
                setopenPopupFormation={setopenPopupFormation}
                addOrEditFormation={addOrEditFormation} idforma={idforma}/>

</div>
)
}