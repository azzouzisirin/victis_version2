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

export default function Popup(props) {
    const [updtouNonText_1, setupdtouNonText_1] = useState(0);
    const [updtouNonList, setupdtouNonList] = useState(0);
    const [updtouNonText_2, setupdtouNonText_2] = useState(0);
    const { idforma, openPopupFormation, setopenPopupFormation } = props;
    const [typeModule, settypeModule] = useState("0");
    const [persos, setPersos] = useState([
   
    ]);

    const [Text_1, setText_1] = useState();
    const [Text_2, setText_2] = useState();
    const [TextList, setTextList] = useState();
    const [photo, setphoto] = useState();

    const [indexup, setindexup] = useState();

    const [picLoading, setprofilePictureLoading] = useState(false);
    const [profilePicture, setprofilePicture] = useState();
    const[ indText_1,setindText_1]= useState();
    const[ indList,setindList]= useState();
    const[ indText_2,setindText_2]= useState();
    const [numOrdre, setnumOrdre] = useState();
    const [TextProg, setTextProg] = useState();
    const [updList, setupdList] = useState(0);
    const [updProg, setupdProg] = useState(0);

    const [indexpersos, setindexpersos] = useState('');

    const [listText_1, setlistText_1] = useState([]);
    const [listText_2, setlistText_2] = useState([]);
    const [listDes, setlistDes] = useState([]);
    const [nomFormation, setnomFormation] = useState();
    const [listTextProg, setlistTextProg] = useState([]);

    const [listCategorie, setlistCategorie] = useState([]);
    const [categorie, setcategorie] = useState();

    const [new_data, setNew_data] = useState({
      titre: "",
      list: []
  
    }); 
    const [name, setName] = React.useState('');

    const [listProg, setListProg] = React.useState([]);
    const addhandlerListProg = e => {
      e.preventDefault();
      if(updProg==0){
      const newList = listTextProg.concat({ TextProg });
      setlistTextProg(newList);
    setNew_data({ ...new_data, titre: TextProg })
      setNew_data({ ...new_data, list: listProg })
      setPersos([...persos, new_data]);
      setNew_data({ titre: "", list: [] });
      setListProg ([])         
      }
      if(updProg==1){
        const newState = persos.map((obj,index) => {
          if (index === indexpersos) {
            return {...obj, titre: new_data.titre,list:listProg };
          }
    
          return obj;
        });
       setPersos(newState)
       setupdProg(0)
       setListProg([])
       setName('')
       setNew_data({ ...new_data, titre: '' })


      }
  
    };
    const [prix, setprix] = useState();
    const [duree, setduree] = useState();
    const deleteItem =  (titre) => {
      const newList = persos.filter((item) => item.titre !== titre);
  
      setPersos(newList);    
    }
    const updateItem =  (titre,index) => {
      setindexpersos(index)
      setNew_data({ ...new_data, titre: persos[index].titre})  
      setListProg( persos[index].list)  
      setupdProg(1)
    }
    function handleChange(event) {
      setName(event.target.value);

    }
    function handleAdd() {
      if(updList==0){
        const newList = listProg.concat({ name });
        setName('')
        setNew_data({ ...new_data, list: newList })
            setListProg(newList);
      }
      if(updList==1){
        const newState = listProg.map((obj,index) => {
          if (index === indexup) {
            return {...obj, name: name };
          }
    
          return obj;
        });
       
      setListProg(newState); 
      setName('')
      setupdList(0)
      }
    
       
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
      useEffect(() => {
        const fetchData = async () => { 
          const res = await axios.get(`${BASE_URL}/categorie/getAllCategorie`);
          setlistCategorie(res.data);
        
        };
         fetchData();
      }, []);
      useEffect(() => {
        if(idforma){
        const fetchData = async () => { 
          const res = await axios.get(`${BASE_URL}/formation/getFormationById/`+idforma);
          setnomFormation(res.data.Formation.nom);
          setcategorie(res.data.Formation.categorie)
          settypeModule(res.data.Formation.typeModelFormation) 
          setnumOrdre(res.data.Formation.numOrdre)
          setPersos(res.data.Formation.programme)
          setlistText_1(res.data.Formation.text_1)
          setlistDes(res.data.Formation.list)
          setlistText_2(res.data.Formation.text_2)
          setprix(res.data.Formation.prix)
          setduree(res.data.Formation.duree)

        };
         fetchData();
      }
      }, [idforma]);
      const addhandlerText_1 = e => {
        e.preventDefault();
     
        if(updtouNonText_1==0){
          const newList = listText_1.concat({ Text_1 });
          setlistText_1(newList);
      
   
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
       setText_1('')
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
      const deleteItemlist =  (TextList) => {
        const newList = listDes.filter((item) => item.TextList !== TextList);
 
        setlistDes(newList);    
      }

      const addhandlerList = e => {
        e.preventDefault();
     
        if(updtouNonList==0){
          const newList = listDes.concat({ TextList });
          setlistDes(newList);
      
        setTextList('')
        }else{
          const newState = listDes.map((obj,index) => {
             if (index === indList) {
               return {...obj, TextList: TextList};
             }
       
             return obj;
           });
       
           setlistDes(newState);
           setupdtouNonList(0)

           setTextList('')
          
       }
      };
      const updateItemList=({p,index})=>{
        setupdtouNonList(1)
        setTextList(p.TextList)
        setindList(index)


       }
 
      const deleteItemPetitList =  (name) => {
        const newList = listProg.filter((item) => item.name !== name);
 
        setListProg(newList);    
      }
      const addhandlerText_2 = e => {
        e.preventDefault();
     
        if(updtouNonText_2==0){
          const newList = listText_2.concat({ Text_2 });
          setlistText_2(newList);
      
        setText_2('')
        }else{
          const newState = listText_2.map((obj,index) => {
             if (index === indText_2) {
               return {...obj, Text_2: Text_2};
             }
       
             return obj;
           });
       
           setlistText_2(newState);
           setupdtouNonText_2(0)

           setText_2('')
          
       }
      };
      const updateItemText_2=({p,index})=>{
        setupdtouNonText_2(1)
        setText_2(p.Text_2)
        setindText_2(index)


       }
       const deleteItemText_2 =  (Text_2) => {
        const newList = listText_2.filter((item) => item.Text_2 !== Text_2);
 
        setlistText_2(newList);    
      }
    const classes = useStyles();
  const addFormation = async (e) => {
        e.preventDefault();
        if(idforma){
           try{
            const config = {
              headers: { 
                "Content-type": "application/json",
              },
            };
            const res = await axios.put(BASE_URL+"/formation/"+idforma, {
              categorie:categorie,
              text_1:listText_1,
              nom:nomFormation,
              prix:prix,
              duree:duree,
              programme:persos,
               numOrdre:numOrdre,
              typeModelFormation:typeModule,
              list:listDes,
              text_2:listText_2,
              photo:photo,
            } ,
          
          config
        );
        setopenPopupFormation(false)
        window.location.reload(false);


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
            const res = await axios.post(BASE_URL+"/formation/register", {
              categorie:categorie,
              text_1:listText_1,
              nom:nomFormation,
              prix:prix,
              duree:duree,
              programme:persos,
               numOrdre:numOrdre,
              typeModelFormation:typeModule,
              list:listDes,
              text_2:listText_2,
              photo:photo,
            } ,
          
          config
        );
        const res1 = await axios.post(BASE_URL+"/detailFormation/register", {
          nom:nomFormation,
         
        } ,
      
      config
    );
        setopenPopupFormation(false)
        window.location.reload(false);


          }catch(err){
            console.log(err);
          }
        }
        }
    return (
        <Dialog open={openPopupFormation} maxWidth="xl"  classes={{ paper: classes.dialogWrapper,overflow: 'auto' }}>
              <div style={{padding:"40px"}} >
            <button onClick={() =>setopenPopupFormation(false)} className="w-12 h-12 flex absolute top-4 right-4 hover:border-2 hover:border-blue rounded-md active:bg-grey-1">
           <p style={{margin:"auto",fontWeight:"600",fontSize:"22px"}}> X </p> 
         
            </button>
            <br/>
         <div > 
          <label style={{fontWeight:'600',fontSize:"20px"}}>  Catégorie</label>
          <select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
              onChange={e => setcategorie( e.target.value )} value={categorie}>
            <option value="">choisi</option>

            {listCategorie.map((option) => ( 
              <option value={option.nom}>{option.nom}</option>
            ))}
            </select>
            <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Type Module </label>

<select  style={{width:"150px",height:"45px",marginLeft:"20px"}} 
  onChange={e => settypeModule( e.target.value )} value={typeModule}>
 <option value="0">Model vide</option>
  <option value="1" >Model 1</option>   
  <option value="2" >Model 2</option>         

</select>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Nom de formation </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setnomFormation(e.target.value)} } value={nomFormation}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Numero d'ordre </label>
          <input style={{width:"80px" , borderWidth: "1px",borderStyle: "solid",borderColor : "black",height:"30px"}} type="number" placeholder='Ordre de categorie' onChange={e => {setnumOrdre(e.target.value)} } value={numOrdre}/><br/> <br/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Image </label>
          <input type="file" accept="image/*" onChange={(e) => postDetails(e.target.files[0])} value={profilePicture}/>
          {typeModule=="0"? <></>:null}
          {typeModule=="1"? <>

          {listText_1?   
          <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table  >
        <thead>
          <tr>
            <th style={{width:"900px"}}>1 ere texte</th>
           <th> Action</th>
          </tr> 
        </thead>
        <tbody>
          {listText_1.map((p,index)  => (
            <tr >
              <td>{p.Text_1}</td>
             
              <td>  
              <button onClick={() => updateItemText_1({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/> </button>

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
            <td>      <button onClick={addhandlerText_1} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/> </button>
 </td>

    </tr>
    </tfoot>
      </table>

      </div>:null}
      {listDes?   
       <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table  >
        <thead>
          <tr>
            <th style={{width:"900px"}}>Liste</th>
           <th> Action</th>
          </tr> 
        </thead>
        <tbody>
          {listDes.map((p,index)  => (
            <tr >
              <td>{p.TextList}</td>
             
              <td> 
              <button onClick={() => updateItemList({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/> </button>
              <button  onClick={() => deleteItemlist(p.TextList)}>   <Delete /></button>
                </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>

    <td>     <input
              type="text"
                         value={TextList}
              onChange={e => setTextList( e.target.value )}
            /> </td>
            <td>      <button onClick={addhandlerList} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/></button>
 </td>

    </tr>
    </tfoot>
      </table>

      </div>:null}
      {listText_2?    <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
  <table  >
        <thead>
          <tr>
            <th style={{width:"900px"}}>2 éme texte</th>
           <th> Action</th>
          </tr> 
        </thead>
        <tbody>
          {listText_2.map((p,index)  => (
            <tr >
              <td>{p.Text_2}</td>
             
              <td> 
              <button onClick={() => updateItemText_2({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/> </button>

                <button  onClick={() => deleteItemText_2(p.Text_2)}>   <Delete /></button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>

    <td>     <input
              type="text"
                         value={Text_2}
              onChange={e => setText_2( e.target.value )}
            /> </td>
            <td>      <button onClick={addhandlerText_2} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/> </button>
 </td>

    </tr>
    </tfoot>
      </table>

      </div>:null}
      </>:null}
      {typeModule=="2"? <>
      <br/> <br/>
      <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Durée </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setduree(e.target.value)} } value={duree}/>
          <label style={{marginLeft:"10px",fontWeight:'600',fontSize:"20px"}}> Prix </label>
          <input type="text" style={{width:"150px",height:"30px"}} onChange={e => {setprix(e.target.value)} } value={prix}/>
<br/>
      <div className='tableDiv tabledecore' style={{marginTop:"20px"}}> 
     
  <table  >
        <thead>
          <tr>
            <th style={{width:"900px"}}>1 ere texte</th>
           <th> Action</th>
          </tr> 
        </thead>
        <tbody>
          {listText_1.map((p,index)  => (
            <tr >
              <td>{p.Text_1}</td>
             
              <td> 
              <button onClick={() => updateItemText_1({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/> </button>

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
            <td>      <button onClick={addhandlerText_1} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/>  </button>
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
          {persos.map((p,index)  => (
            <tr >
              <td>{p.titre}</td>
              
             <td>
             {p.list.map((l)  => (
             <li style={{paddingLeft:'1px'}}> {l.name}</li>
             ))}
             </td>
             <td> <button  onClick={() => deleteItem(p.titre)}>   <Delete /></button>
             <button  onClick={() => updateItem(p.titre,index)}>   <Update /></button>
             </td>
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
           {listProg!= ""?listProg.map((item,index) => (
            <div style={{display:"flex"}}> 
            <p style={{flex:"70%"}}>{item.name}</p>
            <button style={{flex:"20%"}}  onClick={() => {setName(item.name);setupdList(1);setindexup(index)}}><Update />  </button>
            <button style={{flex:"20%"}}  onClick={() => {deleteItemPetitList(item.name)}}><Delete /> </button>

            </div>
           )):null}
         </ul>
           
           
            </td>
              <td>      <button onClick={addhandlerListProg} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/> </button>
   </td>
  
      </tr>
      </tfoot>
        </table>
  
        </div>
      
      </>:null}
    <br/>
      <button style={{width:"90px",height:"30px",background:"DodgerBlue",color:"white",marginLeft:"15px"}}onClick={e => addFormation(e)}> enregistrer</button>

      </div>
          </div>

        </Dialog>
    )
}

