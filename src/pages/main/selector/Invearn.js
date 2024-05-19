import React, { useEffect } from 'react'
import { useParams , useLocation } from 'react-router-dom'
import { BASEURL } from '../../../apis/api';
// import CryptoJS from 'crypto-js';

function Invearn() {
    // let {stock_name, stock_type} = useParams()
  // const [records, setRecords] = useState("");

  //   const location = useLocation();

  //   // Parse the query string parameters
  //   const queryParams = new URLSearchParams(location.search);
  
  //   // Access specific query parameters
  //   const stock_name = queryParams.get('stock_name').toLowerCase();
  //   const stock_type = queryParams.get('stock_type').toLowerCase();
    
  //   const token = localStorage.getItem('token')

  //   // const encryptedParam1 = CryptoJS.AES.encrypt(param1, 'secret-key').toString();
  //   // const hashedParam2 = CryptoJS.SHA256(param2).toString();
  //   const getData = async () => {
  //       await fetch(`${BASEURL}/api/selector/get-stocks?stock_name=${stock_name}&stock_type=${stock_type}`,{
  //         method: 'GET',
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`,
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setRecords(data.result);
  //           console.log("data", data);
  //           console.log("data results", data.result);
  //           // console.log(data.result);
  //         })
  //         .catch((error) => console.error("Error fetching data:", error));
  //     };

  //   useEffect(() => {
  //       console.log("stock_name", stock_name)
  //   }, [])
    

  return (
    <div>
        <h1>Invearn </h1>
    </div>  
  )
}

export default Invearn