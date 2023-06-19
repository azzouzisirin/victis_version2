import React, { useState, useEffect } from 'react'
import { Dialog, makeStyles } from '@material-ui/core';
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

export default function ModelDesFormation(props) {
    const [updtouNonText_1, setupdtouNonText_1] = useState(0);
    const { nomForma, openPopupDetailForma, setopenPopupDetailForma } = props;

    const [Text_1, setText_1] = useState();
   
    const[ indText_1,setindText_1]= useState();

    const [listText_1, setlistText_1] = useState([]);

    const [prix, setprix] = useState();
    const [duree, setduree] = useState();
    const classes = useStyles(); 

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
  
        const fetchData = async () => { 
          const res = await axios.get(`${BASE_URL}/detailFormation/getModuleByNom/`+nomForma);
          setlistText_1(res.data.text_1)
          setPersos(res.data.programme)
          setprix(res.data.prix)
          setduree(res.data.duree)

        };
         fetchData();
      }, [nomForma]);

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
        setopenPopupDetailForma(false)

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
    return (
        <Dialog open={openPopupDetailForma} maxWidth="xl"  classes={{ paper: classes.dialogWrapper,overflow: 'auto' }}>
              <div style={{padding:"40px"}} >
            <button onClick={() =>setopenPopupDetailForma(false)} className="w-12 h-12 flex absolute top-4 right-4 hover:border-2 hover:border-blue rounded-md active:bg-grey-1">
           <p style={{margin:"auto",fontWeight:"600",fontSize:"22px"}}> X </p> 
         
            </button>
            <br/>
         <div > 
     
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Nom de Formation </label>
          <p style={{width:"150px",height:"30px"}} >{nomForma} </p>
         
           <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Durée </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setduree(e.target.value)} } value={duree}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Prix </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setprix(e.target.value)} } value={prix}/>
          <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table  >
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
    <table  >
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
          </div>

        </Dialog>
    )
}

