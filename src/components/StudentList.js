import React, { useEffect, useState } from 'react'
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { deleteStudent, fetchStudents } from '../Server';
import { Link } from 'react-router-dom';
import SearchField from './SearchField';

const StudentList = () => {

    const [students, setStudents] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        try {
            const data = await fetchStudents();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id)
            toast.success("Student Deleted Successfully!");
            getAllStudents()

        } catch (error) {
            console.error(error)
            toast.error(error.error)
        }
    }

    return (
        <div className='student-list-container'>
            <div className='student-list'>
                <div className='student-list-header'>
                    <h2>List Of Students</h2>
                    <SearchField search={search} setSearch={setSearch} />
                </div>
                <div className='table-container'>
                    <table border={1} style={{ overflowY: 'auto' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone No</th>
                                <th colSpan={3}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students && students.filter((stu) => stu.firstName.toLowerCase().includes(search)).map((student, index) => (
                                    <tr key={student.id}>
                                        <th style={{ textAlign: "center" }}>{++index}</th>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>{student.phone}</td>
                                        <td align='center' className='action-container'>
                                            <div className='action-ico-container'>
                                                <Link to={`/view/${student.id}`}>
                                                    <FaEye className='action-ico' style={{ color: "blue" }} />
                                                </Link>
                                            </div>
                                        </td>
                                        <td align='center'>
                                            <div className='action-ico-container'>
                                                <Link to={`/edit/${student.id}`}>
                                                    <FaRegEdit className='action-ico' style={{ color: "#04AA6D" }} />
                                                </Link>
                                            </div>
                                        </td>
                                        <td align='center'>
                                            <div className='action-ico-container' onClick={() => handleDelete(student.id)}>
                                                <MdDeleteForever className='action-ico' style={{ color: "rgb(245, 96, 66)" }} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
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

export default StudentList