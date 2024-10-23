import axios from 'axios';
import React, { useState } from 'react'

function SearchDrugs() {
    const[searchItem,setSearchItem]=useState("");

    
    


    async function handleSubmit()
    {
        
       await axios
        .get(' https://rxnav.nlm.nih.gov/REST/drugs.json?name='+searchItem)
        .then((res)=>
        {
            alert('hii')
            console.log(res.data)
        })
    }

    
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label for='search'>Search</label>
        <input type='text' id='search' onChange={(e)=>setSearchItem(e.target.value)} name='search' value={searchItem}></input>

        <button type='submit'>Search</button>



     </form>

    </div>
  )
}

export default SearchDrugs