import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}){
  return(
    <input style={{marginBottom:'1rem'}} placeholder='Buscar'
      value = {searchValue}
      onChange={(event)=> {
        setSearchValue(event.target.value);
    }} />
  );
  }

export { TodoSearch }; 