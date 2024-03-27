import React from 'react'
import { BASEURL } from '../apis/api';
import { useEffect } from 'react';

function Test() {
    const loadData = () => {
        fetch(`${BASEURL}/api/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data ", data);
          })
          .catch((err) => console.log(err));
      };
      
      useEffect(() => {
        loadData()  
      },[])
  return (
    <div>Test</div>
  )
}

export default Test