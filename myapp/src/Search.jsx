import React, { useState } from 'react'
import "./searchCss.css"
const Search = () => {

const[query,setQuery]=useState('');
const[results,setResults]=useState([]);

//dummy api
const data=[

{name:'apple',category:'fruit'},
{name:'banana',category:'fruit'},
{name:'mango',category:'fruit'}

];

const handleSearch=()=>
{
    const filteredResult=data.filter(item=>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResult);
}


  return (
    <div className='search-frame'>
      <h1 style={{ textAlign: 'center' }}>Search for Drugs</h1>
      <input
        className='search-field'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>

      <table className='results-table' style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((result, index) => (
              <tr key={index}>
                <td>{result.name}</td>
                <td>{result.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Search