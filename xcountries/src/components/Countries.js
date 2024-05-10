import React, { useEffect,useState } from "react"
import styles from "./Countries.module.css"

const Card = ({country})=>{

    return(

        <div className={styles.card}>
        <img src={country.flags.png} className={styles.flag}/>
        <p className={styles.title}>{country.name.common}</p>
        </div>
    )
}
const FetchCountries = () =>{

const [countries,setcountries] = useState([]);

const countriesFetch = async()=>{

    try{
     const fetchUrl = await fetch('https://restcountries.com/v3.1/all')
     if(!fetchUrl.ok){
        console.log("some error occured",fetchUrl.status)
     }
     const response = await fetchUrl.json()
     setcountries(response)
     console.log(response)

}
 catch(err){
console.log("error occured",err)
 }
}

// const countriesFetch = ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then((res)=>{
//     return res.json()
//     })
//     .then((data)=>{
//       setcountries(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }


useEffect(()=>{
    countriesFetch()
},[]) // RUNS USE EFFECT ONLY ONCE - ON PAGE LOAD

console.log("countries",countries)

  
return (
<> 
<div className={styles.container}> 
    { countries.length>0 && (
     countries.map((country)=>(
     <Card country={country} />
     ))

         )
    }
       </div>
</>
)
}

export default FetchCountries