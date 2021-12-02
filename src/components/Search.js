import React, { useState } from "react";
 

function SearchBar(props) {

const [term, setTerm] = useState("")

  return (
    <form>
      <div className = 'searchArea' >
        <input
            type="text"
            id="header-search"
            placeholder="Enter title"
            name="s" 
            onChange=  {props.onChange} 
        />
        
        <br />  

        <button
        type="submit"  
        className="btn btn-danger"
        onClick={props.onClick}
        onKeyDown={props.onClick}
        > Search Marvel for  { props.term ? props.term : "  ......." }
        </button>
 
        <br />  
        </div>
        </form>
 );
  };

export default SearchBar;