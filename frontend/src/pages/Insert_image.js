import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Insert_image = () => {
    const [image,setImage]=useState();
    const [allImage,setAllImage]=useState();
    const onInputChnage=(e)=>{
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }
    const submitImage=async(e)=>{
        e.preventDefault();
        
        const formData=new FormData();
        formData.append('image',image);

        const response= await axios.post("https://first-mern-api.onrender.com/insertImage",formData,{
            headers:{
                "Content-Type":"multipart/form-data",
                    'Authorization':localStorage.getItem('token')

            },
        })
        console.log(response);

    }
    useEffect(()=>{
    
        getImages();
    },[])

    const getImages = async()=>{
        try {
            const response= await axios.get("https://first-mern-api.onrender.com/getImages",{
                headers:{
                    'Authorization':localStorage.getItem('token')

                }
            });
            console.log(response.data.data)
            setAllImage(response.data.data);

        } catch (error) {
            
        }
    }
  return (
    <div>
        <form onSubmit={submitImage}>
            <input type='file' accept='image/*' onChange={onInputChnage}/>
            <button type='submit'>Submit</button>
        </form>
        {allImage && allImage?.map((data,index)=>{
            return(
                <img
                key={index}
                src={`http://localhost:8000/Uploads/${data.image}`}
                alt='uploaded'
                style={{width:'150px', margin:'10px'}}
            />      
            )    
        })}
        
    </div>
  )
}

export default Insert_image
