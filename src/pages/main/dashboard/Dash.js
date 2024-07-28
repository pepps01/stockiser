import React, {useEffect, useState}  from 'react'
import { BASEURL } from '../../../apis/api'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import MainBoard from '../../../components/main/MainBoard'
import NewsBoard from '../../../components/main/NewsBoard'

function Dash() {
  const [modal, setModal] = useState(false);
  const [records, setRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const token = localStorage.getItem('token')

  const getData = async () => {
    await fetch(`${BASEURL}/api/selector/selected`,{
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.result);
        console.log("data", data);
        console.log("data results", data.result);
        // console.log(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(  () => {
    getData();
  }, []);


  return (
    <div className='w-full'>
        <NavigationBar/>
        <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
            <DashboardSidebar/>
            <MainBoard records={records} />
            <NewsBoard/>
        </div>
        <Footerbar/>
    </div>
  )
}

export default Dash