import React, { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContuctUs from '../../components/ContuctUs';
import ModelInscrit from '../../components/ModelInscrit'
export default function TableCalendrie() {
    const [MoisDate, setMoisDate] = useState([]);
    const [data, setData] = useState([]);
    const [openPopupModule, setopenPopupModule] = useState(false)
    const [recordForEditModule, setRecordForEditModule] = useState(null)
    const [id, setid] = useState(null)
    const [index, setindex] = useState(null)

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
    
   const addOrEditModule = ( resetForm) => {

    resetForm()
    setRecordForEditModule(null)
    setopenPopupModule(false)
  }
function DeterminValeur({id,index, s,d}){
  if(s.datedebut.substring(5,7)==  (Number(d)+1)){
    return(<button style={{background:"rgb(40, 116, 252) ",width:"100%"}} onClick={()=>{setid(id);setindex(index);setopenPopupModule(true)}}> {s.datedebut.substring(8,10)} - {s.datefin.substring(8,10)} </button>)

  }
  else{
    return(null)

  }
}
    useEffect(() => {
   
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/sessionFormation/getAllSession`);
        setData(res.data);
     
      }; 
       fetchData();
    }, []);
return(
    <> 
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
    <DeterminValeur id={p._id} index={index} s= {p.Session[index]} d={MoisDate[0].toString().padStart(2, '0')}/> ))}
    
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id}  index={index}  s= {p.Session[index]} d={MoisDate[1].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} index={index}  s= {p.Session[index]} d={MoisDate[2].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} index={index}  s= {p.Session[index]} d={MoisDate[3].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} index={index}  s= {p.Session[index]} d={MoisDate[4].toString().padStart(2, '0')}/> ))}
    </td>
    <td> 
    {p.Session.map((m,index)  => (
    <DeterminValeur id={p._id} index={index}  s= {p.Session[index]} d={MoisDate[5].toString().padStart(2, '0')}/> ))}
    </td>



    </tr>
    ))}




      </tbody>
   </table>
   </div>
<ContuctUs/>
    <Footer/>
    <ModelInscrit 
                openPopupModule={openPopupModule}
                id={id}
                index={index}
                setopenPopupModule={setopenPopupModule}
                addOrEditModule={addOrEditModule} />
    
    </>
)


 

}