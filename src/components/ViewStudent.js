import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { studentGetById } from '../Server';

const ViewStudent = () => {

  const { id } = useParams();

  const [student, setStudent] = useState([])

  useEffect(() => {
    fetchData(id)
  },[id])

  const fetchData = async (id) => {
    try{
        const data = await studentGetById(id)
        setStudent(data)
    }catch(error){
        console.error(error)
    }
  }

  const { firstName, lastName, email, address, phone} = student

  return (
    <div className='view-container'>
    <div className='student-details'>
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt='Student Avatar' className='avatar' />
      <div className='details'>
        <h2>{firstName} {lastName}</h2>
        <p>Email : {email}</p>
        <p>Address : {address}</p>
        <p>Phone : {phone}</p>
      </div>
    </div>
  </div>
  )
}

export default ViewStudent