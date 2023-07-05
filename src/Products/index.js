import React,{useState,useEffect} from "react";

const Products = ()=>{
    const [products,setProducts] = useState ([]);
    const [loading,setLoading ] =useState(false)
    useEffect (()=>{
        (async()=>{
            await getProducts()

        })();

    },[]);

    const getProducts = async ()=>{
       try{
        setLoading (true)
        const response = await fetch ('https://dummyjson.com/products');
        const result = await response.json()

        setProducts(result.products);
        setLoading(false);

       }catch (error){
        console.log(error.mesage);
       }
      
      

    };

    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
          {products.map((item)=>(
            <>
            <h1>
                {item.title}
            </h1>
            </>
          ))}
            
        </div>

           

    )  
    }

export default Products;