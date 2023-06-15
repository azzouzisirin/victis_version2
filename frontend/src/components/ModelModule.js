import React, { useState, useEffect } from 'react'
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

export default function ModelModule(props) {
    const [updtouNonText_1, setupdtouNonText_1] = useState(0);

    const { idforma, openPopupModule, setopenPopupModule } = props;

    const [Text_1, setText_1] = useState();

    const [TitreModule, setTitreModule] = useState();
    const[ indText_1,setindText_1]= useState();
    const [programme, setprogramme] = useState([]);

    const [listProgModel2, setlistProgModel2] = useState([]);
    const [TextProgModel2, setTextProgModel2] = useState();
    const [GrandProg, setGrandProg] = useState([]);
  
    const [new_dataTout, setNew_dataTout] = useState({
      grandtitre: "",
      prog: []
    });
    const [new_dataModel2, setNew_dataModel2] = useState({
      titre: "",
      list: []
    });
    const [nameModel2, setNameModel2] = useState("");
  
const [numOrdre,setnumOrdre]=useState();
    const [listText_1, setlistText_1] = useState([]);
    const [nomModule, setnomModule] = useState();
    const [prix, setprix] = useState();
    const [duree, setduree] = useState();
    const classes = useStyles(); 
    const [typeModule, settypeModule] = useState("0");
    const [listformation, setlistformation] = useState([]);
    const [formation, setformation] = useState();
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
          const res = await axios.get(`${BASE_URL}/formation/getAllFormation`);
          setlistformation(res.data);
        
        };
         fetchData();
      }, []);
      const addhandlerlistProgModel2 = (e) => {
        e.preventDefault();
    
        setNew_dataModel2({ ...new_dataModel2, titre: TextProgModel2 });
        setNew_dataModel2({ ...new_dataModel2, list: listProgModel2 });
        setprogramme([...programme, new_dataModel2]);
    
        setNew_dataModel2({ titre: "", list: [] });
        setlistProgModel2([]);
        setTextProgModel2("");
      };
      useEffect(() => {
        setNew_dataTout({ ...new_dataTout, prog: programme });

      }, [programme]);
      const handleChangeModel2 = (event) => {
        setNameModel2(event.target.value);
      };
    
      const handleAddModel2 = () => {
        const newList = listProgModel2.concat({ nameModel2 });
        setNameModel2("");
        setNew_dataModel2({ ...new_dataModel2, list: newList });
        setlistProgModel2(newList);
      };
    
    
    
    
      const addhandlerBloc =async (e) => {
        e.preventDefault();
        setGrandProg([...GrandProg, new_dataTout]);
        setprogramme([]);
        setNew_dataModel2({ titre: "", list: [] });
        setNew_dataTout({ titre: "", list: [] });

      };
      useEffect(() => {
  
        const fetchData = async () => { 
          const res = await axios.get(`${BASE_URL}/module/getModuleById/`+idforma);
          setnomModule(res.data.nom);
          setformation(res.data.nomFormation)
          setlistText_1(res.data.text_1)
          setPersos(res.data.programme)
          setprix(res.data.prix)
          settypeModule(res.data.typeModule)
          setGrandProg(res.data.progModel)
         setTitreModule(res.data.TitreModule)
          setduree(res.data.duree)
          setnumOrdre(res.data.numOrdre)

        };
         fetchData();
      }, [idforma]);

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
        if(idforma){
          try{
          

            const config = {
              headers: { 
                "Content-type": "application/json",
              }, 
            };
            const res = await axios.put(BASE_URL+"/module/"+idforma, {
              nomFormation:formation,
              text_1:listText_1,
              nom:nomModule,
              progModel:GrandProg,
              programme:persos,
              duree:duree,
              prix:prix,
              typeModule:typeModule,
              TitreModule:TitreModule,
              numOrdre:numOrdre,
            } ,
          
          config
        );
        setPersos([])
        setText_1('')
        setName('')
        setlistformation([])
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
            const res = await axios.post(BASE_URL+"/module/register", {
              nomFormation:formation,
              text_1:listText_1,
         
              TitreModule:TitreModule,
              nom:nomModule,
              programme:persos,
              progModel:GrandProg,
              duree:duree,
              prix:prix,
              typeModule:typeModule,
              numOrdre:numOrdre,
            } ,
          
          config
        );
        setPersos([])
        setText_1('')
        setopenPopupModule(false)

          }catch(err){
            console.log(err);
          }

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
          setListProg ([])         
      
      
        };
      
        const deleteItem =  (titre) => {
          const newList = persos.filter((item) => item.titre !== titre);
      
          setPersos(newList);    
        }
    return (
        <Dialog open={openPopupModule} maxWidth="xl"  classes={{ paper: classes.dialogWrapper,overflow: 'auto' }}>
              <div style={{padding:"40px"}} >
            <button onClick={() =>setopenPopupModule(false)} class="w-12 h-12 flex absolute top-4 right-4 hover:border-2 hover:border-blue rounded-md active:bg-grey-1">
           <p style={{margin:"auto",fontWeight:"600",fontSize:"22px"}}> X </p> 
         
            </button>
            <br/>
         <div > 
          <label style={{fontWeight:'600',fontSize:"20px"}}>  Formation</label>
          <select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
              onChange={e => setformation( e.target.value )} defaultValue={formation}>

            {listformation.map((option) => ( 
              <option value={option.nom}>{option.nom}</option>
            ))}
            </select>
            <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Type Module </label>

            <select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
              onChange={e => settypeModule( e.target.value )} defaultValue={typeModule}>
             <option value="0">Model vide</option>
              <option value="1" >Model 1</option>   
              <option value="2" >Model 2</option>         
      
            </select>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Nom de Module </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setnomModule(e.target.value)} } value={nomModule}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Titre de Module  </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setTitreModule(e.target.value)} } value={TitreModule}/> <br/><br/>
         
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Numero d'ordre </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setnumOrdre(e.target.value)} } value={numOrdre}/> 
       {typeModule=="0"? <></>:null}
       {typeModule=="1"? <>
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
             <th> List</th>
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
           {listProg!= ""?listProg.map((item) => (
             <li key={item.id}>{item.name}</li>
           )):null}
         </ul>
           
           
            </td>
              <td>      <button onClick={addhandlerListProg} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/></button>
   </td>
  
      </tr>
      </tfoot>
        </table>
  
        </div>
       </>:null}
       {typeModule=="2"?
        <>
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
        <div style={{borderRadius:"20px",border:'5px solid black',marginTop:"20px",paddingBottom:"40px"}}> 
            <div style={{display:"flex",marginTop:"20px",marginLeft:"240px" }}>
              <h3 style={{marginRight:"50px",marginTop:"5px",fontSize:"20px"}}> Grand Titre </h3>
          <input
              type="text"
              value={new_dataTout.grandtitre} style={{width:"250px",height:"20px",marginRight:"50px"}}
              onChange={(e) =>
                setNew_dataTout({ ...new_dataTout, grandtitre: e.target.value })
              }
            />
            <button onClick={addhandlerBloc} style={{background:"black",color:"white",width:"90px",height:"30px"}}>Ajouter</button>
          </div>
            <div className="tableDiv tabledecore" style={{ marginTop: "20px",marginLeft:"50px" }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "900px" }} colSpan="2">
                      Programme
                    </th>
                    <th rowSpan="3">Action</th>
                  </tr>
                  <tr>
                    <th>Titre</th>
                    <th>List</th>
                  </tr>
                </thead>
                <tbody>
                  {programme.map((p) => (
                    <tr key={p.titre}>
                      <td>{p.titre}</td>
                      <td>
                        {p.list.map((l, index) => (
                          <li key={index} style={{ paddingLeft: "1px" }}>
                            {l.nameModel2}
                          </li>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={new_dataModel2.titre}
                        onChange={(e) =>
                          setNew_dataModel2({ ...new_dataModel2, titre: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={{ width: "80%" }}
                        value={nameModel2}
                        onChange={handleChangeModel2}
                      />
                      <button type="button" onClick={handleAddModel2}>
                        <Check />
                      </button>
                      <ul>
                        {listProgModel2.map((item, index) => (
                          <li key={index}>{item.nameModel2}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button
                        onClick={addhandlerlistProgModel2}
                        style={{ margin: "20px", background: "#D0E3FA", border: "none" }}
                      >
                        
                        <Check />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <br/> 
            <div >
              {GrandProg ? (
                <div>
                  {GrandProg.map((s, index) => (
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
            </div>
          </>
      :null}
    
 
      
      <button style={{width:"90px",height:"30px",background:"DodgerBlue",color:"white",marginLeft:"15px"}}onClick={e => addFormation(e)}> enregistrer</button>

      
      </div>
          </div>

        </Dialog>
    )
}

