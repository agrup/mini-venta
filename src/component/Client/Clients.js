import React,{useState, useEffect} from 'react'
import Client from './Client'
// const ListClient = () => {
    
const Clients = () => {

        const [client,setClient] = useState([])
        useEffect(() => {
            fetch('https://mini-venta.firebaseio.com/client.json',)
                .then(response => response.json())
                .then(responseData => {
                    const loadesclient=[];
                    for (const key in responseData){
                        loadesclient.push({
                            key:key,
                            name:responseData[key].Name,
                            city:responseData[key].city,
                            taxId:responseData[key].taxId,
                            tel:responseData[key].tel,
                        });
                    }
                    setClient(loadesclient);
                    // console.log(responseData)
                })
                .catch(error => {
                    alert(error);
                }) 
         },[]);
    return(
        <div>
            {client.map( art => {
                return (
                    <Client 
                        key= {art.key}
                        name= {art.name}
                        city={art.city}
                        taxId={art.taxId}
                        tel={art.taxId}
                    />
                )
            })}
    </div>
)
} 

export default Clients;