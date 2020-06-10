import React,{useState, useEffect} from 'react'
import Article from './Article'
// const ListArticle = () => {
    
const Articles = () => {

        const [articles,setArticles] = useState([])
        useEffect(() => {
            fetch('https://mini-venta.firebaseio.com/article.json',)
                .then(response => response.json())
                .then(responseData => {
                    const loadesarticles=[];
                    for (const key in responseData){
                        loadesarticles.push({
                            key:key,
                            name:responseData[key].Name,
                            size:responseData[key].Size,
                            description:responseData[key].Description,
                        });
                    }
                    setArticles(loadesarticles);
                    // console.log(responseData)
                })
                .catch(error => {
                    alert(error);
                }) 
         },[]);
    return(
        <div>
            {articles.map( art => {
                return (
                    <Article 
                        key= {art.key}
                        name= {art.name}
                        description={art.description}
                        size={art.size}
                    />
                )
            })}
    </div>
)
} 

export default Articles;