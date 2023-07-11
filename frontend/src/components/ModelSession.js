import React, { useState,useEffect } from 'react'
import { Dialog,  makeStyles } from '@material-ui/core';
import { Delete , Update,Check} from '@material-ui/icons'
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
 
export default function ModelSession(props) {
    const [updtouNonText_1, setupdtouNonText_1] = useState(0);

    const {  openPopupModule, setopenPopupModule,idforma } = props;

    const [Text_1, setText_1] = useState();

    const[ indText_1,setindText_1]= useState();
    const [listformation, setlistformation] = useState([]);

    const [listmodule, setlistmodule] = useState([]);
    const [module, setmodule] = useState();
    const [idmodule, setidmodule] = useState();
    const [nomCateg, setnomCateg] = useState();

 

const [numOrdre,setnumOrdre]=useState();
    const [listText_1, setlistText_1] = useState([]);
    const [prix, setprix] = useState();
    const [duree, setduree] = useState();
    const classes = useStyles(); 
   
    const [formation, setformation] = useState();


    const [new_data, setNew_data] = useState({
      datedebut: "",
      datefin:""
  
    }); 

  
    const [session, setsession] = useState([
   
    ]);
    useEffect(() => {
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/formation/getAllFormation`);
        setlistformation(res.data);
        setformation(res.data[0].nom)
      
      };
       fetchData();
    }, []);
    useEffect(()=>{
      if(formation){
       const fetchData = async () => { 
         const res = await axios.get(`${BASE_URL}/module/getModulByForma/${formation}`);
         setlistmodule(res.data);
         setmodule(res.data[0].nom)
         setprix(res.data[0].prix)
         setduree(res.data[0].duree)
         setidmodule(res.data[0]._id)

       };
        fetchData();
      }
     },[formation])
    useEffect(() => {
  if(idforma){
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/sessionFormation/`+idforma);
        setnumOrdre(res.data.numDordre);
        setformation(res.data.formation)
        setduree(res.data.duree)
        setprix(res.data.prix)
        setsession(res.data.Session)
        setidmodule(res.data._id)

   

      };
       fetchData();}
    }, [idforma]);
    useEffect(()=>{
      if(module&&nomCateg&&formation){
       const fetchData = async () => {  
         const res = await axios.get(`${BASE_URL}/module/getModule/${nomCateg}/${formation}/${module}`);
         setprix(res.data.prix);
         setduree(res.data.duree);
         setidmodule(res.data._id)

   
       };
        fetchData();
      }
     },[module,formation,nomCateg])
      const addhandlerSession = e => {
        e.preventDefault();
     
        if(updtouNonText_1==0){
          setsession([...session, new_data]);
          
   setNew_data({
      datedebut: "",
      datefin: ""
  
    }); 

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
      const updateItemSession=({p})=>{
        setupdtouNonText_1(1)
        setNew_data({ ...new_data, datedebut: p.datedebut })    
        setNew_data({ ...new_data, datefin: p.datefin })


       }
       const deleteItemSession =  (datedebut) => {
        const newList = session.filter((item) => item.datedebut !== datedebut);
  
        setsession(newList);    
      }
  const addSession = async (e) => {
        e.preventDefault(); 
        if(idforma){
          try{
          

            const config = {
              headers: { 
                "Content-type": "application/json",
              }, 
            };
            const res = await axios.put(BASE_URL+"/sessionFormation/updateSession/"+idforma, {
              formation:formation,
              idmodule:idmodule,
              duree:duree,
              module:module,
              prix:prix,
              numDordre:numOrdre,
              Session:session,
            } , 
          
          config
        );
    
        setopenPopupModule(false)

          }catch(err){
            console.log(err);
          }
        }else{
          try{
          

            const config = {
              headers: { 
                "Content-type": "application/json",
              }, 
            };
            const res = await axios.post(BASE_URL+"/sessionFormation/register", {
              formation:formation,
              idmodule:idmodule,
              duree:duree,
              module:module,
              prix:prix,
              numDordre:numOrdre,
              Session:session,
          
            } ,
          
          config
        );
        setText_1('')
        setopenPopupModule(false)

          }catch(err){
            console.log(err);
          }

        }
        
        }
   
    return (
        <Dialog open={openPopupModule} maxWidth="xl"  classes={{ paper: classes.dialogWrapper,overflow: 'auto' }}>
              <div style={{padding:"40px"}} >
            <button onClick={() =>setopenPopupModule(false)} className="w-12 h-12 flex absolute top-4 right-4 hover:border-2 hover:border-blue rounded-md active:bg-grey-1">
           <p style={{margin:"auto",fontWeight:"600",fontSize:"22px"}}> X </p> 
         
            </button>
            <br/>
         <div > 
         <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Numero d'ordre </label>
            <input type='number'  style={{width:"80px" , borderWidth: "1px",borderStyle: "solid",borderColor : "black",height:"40px",marginLeft:"10px"}}
              onChange={e => setnumOrdre( e.target.value )} value={numOrdre}/>

          <label style={{fontWeight:'600',fontSize:"20px"}}>  Formation</label>
         
<select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
              onChange={e => setformation( e.target.value )} value={formation}>

            {listformation.map((option) => ( 
              <option value={option.nom}>{option.nom}</option>
            ))}
            </select>
            <label style={{fontWeight:'600',fontSize:"20px"}}>  Module</label>
         
         <select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
                       onChange={e => setmodule( e.target.value )} value={module}>
         
                     {listmodule.map((option) => ( 
                       <option value={option.nom}>{option.nom}</option>
                     ))}
                     </select>
       
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Durée   </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setduree(e.target.value)} } value={duree}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Prix  </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setprix(e.target.value)} } value={prix}/> <br/><br/>
         
          <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table  >
        <thead>
          <tr>
            <th style={{width:"900px"}} colspan="2">Session</th>
           <th rowSpan="2"> Action</th>
          </tr> 
          <tr>
              <th >Date de debut</th>
             <th> Date de fin</th>
            </tr> 
        </thead>
        <tbody>
          {session.map((p)  => (
            <tr >
              <td>{p.datedebut}</td>
              <td>{p.datefin}</td>

              <td> 
              <button onClick={() => updateItemSession({p})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}>  <Update/></button>

                <button  onClick={() => deleteItemSession(p.datedebut)}>   <Delete /></button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>

    <td>     <input
                type="date"
                value={new_data.datedebut}
                           onChange={e => setNew_data({ ...new_data, datedebut: e.target.value })}

              /> </td>
                 <td>     <input
                type="date"
                value={new_data.datefin}
                           onChange={e => setNew_data({ ...new_data, datefin: e.target.value })}

              /> </td>
            <td>      <button onClick={addhandlerSession} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/> </button>
 </td>

    </tr>
    </tfoot>
      </table>

      </div>
    
 
      
      <button style={{width:"90px",height:"30px",background:"DodgerBlue",color:"white",marginLeft:"15px"}}onClick={e => addSession(e)}> enregistrer</button>

      
      </div>
          </div>

        </Dialog>
    )
}

