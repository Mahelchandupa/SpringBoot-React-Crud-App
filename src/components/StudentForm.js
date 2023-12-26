import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addStudent } from '../Server';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {

    const navigate = useNavigate();

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
            await addStudent(studentData);
            toast.success('Student added successfully');

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
                <h2>Add Student</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='firstName' placeholder='Enter First Name' onChange={handleChange} />
                    <input type='text' name='lastName' placeholder='Enter Last Name' onChange={handleChange} />
                    <input type='email' name='email' placeholder='Enter Email' onChange={handleChange} />
                    <input type='text' name='address' placeholder='Enter Address' onChange={handleChange} />
                    <input type='phone' name='phone' placeholder='Enter Phone' onChange={handleChange} />
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

export default StudentForm