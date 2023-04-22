import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    const [apiData, setApiData]= useState([]);

    const getData = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
            setApiData(response.data)
        })

    }

    useEffect(()=>{
        getData()
    },[])


  return (
    <div>
        <Navbar/>
    <div className='container'>



  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>NAME</Table.HeaderCell>
        <Table.HeaderCell>E-MAIL</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {apiData.map((data)=>{
        return(
         
      <Table.Row>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
      </Table.Row>
        )
      })}
    </Table.Body>

  </Table>




    </div>
<br /><br /><br /><br /><br /><br /><br /><br />

    <Footer/>
    </div>

  )
}

export default Home