import React, { useState, useEffect} from 'react'
import { BASE_URL } from '../../../apis/api';

function Test() {
    const [records, setRecords] = useState()
    const token =localStorage.getItem('token');
    
    const getData = async () => {
        await fetch(`${BASE_URL}/api/selector`,{
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setRecords(data.result);
            console.log("data", data);
            // console.log(data.result);
          })
          .catch((error) => console.error("Error fetching data:", error));
      };

    useEffect(() => {
    getData()
    }, [])
    
  return (
    <div>Test</div>
  )
}

export default Test