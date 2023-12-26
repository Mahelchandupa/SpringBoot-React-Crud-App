import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { studentGetById, updateStudent } from '../Server';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        getStudentDetails(id);
    }, [id]);

    const getStudentDetails = async (id) =>{
        try{
            const data = await studentGetById(id)
            setStudentData(data)
        }catch(error){
            console.error(error)
        }
    }

    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateStudent(studentData, id);
            toast.success('Student update successfully');

            setStudentData({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                phone: ''
            });

            setTimeout(() => {
                navigate('/');
              }, 2000);
              
        } catch (error) {
            console.error(error);

            if (error.firstName) {
                toast.error(`${error.firstName}`);
            }
            else if (error.lastName) {
                toast.error(`${error.lastName}`);
            }
            else if (error.email) {
                toast.error(`${error.email}`);
            }
            else if (error.phone) {
                toast.error(`${error.phone}`);
            }
            else if (error.error) {
                toast.error(error.error);
            }
            else {
                toast.error('An unexpected error occurred');
            }
        }
    }

    return (

        <div className='student-form-container'>
            <div className='student-form'>
                <h2>Edit Student</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={studentData.firstName} name='firstName' placeholder='Enter First Name' onChange={handleChange} />
                    <input type='text' value={studentData.lastName} name='lastName' placeholder='Enter Last Name' onChange={handleChange} />
                    <input type='email' value={studentData.email} name='email' placeholder='Enter Email' onChange={handleChange} />
                    <input type='text' value={studentData.address} name='address' placeholder='Enter Address' onChange={handleChange} />
                    <input type='phone' value={studentData.phone} name='phone' placeholder='Enter Phone' onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default EditForm