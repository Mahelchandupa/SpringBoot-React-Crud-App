import axios from 'axios';

// export const fetchStudents = ({setError}) => {
//     return fetch("http://localhost:8080/student/getAll",
//     )
//         .then((res) => res.json())
//         .catch((error) => {
//             setError(error)
//         });
// };

export const fetchStudents = async () => {
    try {
        const response = await axios.get('http://localhost:8080/students/getAll');
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to maintain consistent error handling
    }
};


// export const addStudent = (student) => {
//     return fetch("http://localhost:8080/student/add", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(student),
//     })
//         .then((res) => res.json())
//         .catch((error) => {
//             console.error("Error adding student:", error);
//         });
// };

export const addStudent = async (student) => {
    try {
        const response = await axios.post("http://localhost:8080/students/add", student, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : error.message;
    }
};


export const deleteStudent = async (id) => {
    try{
        return await axios.delete(`http://localhost:8080/students/${id}`)
    }catch(error){
        console.error(error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : error.message
    }
}


// export const deleteStudent = (id) => {
//     return fetch(`http://localhost:8080/student/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
// }

export const studentGetById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/students/byId/${id}`)
        return response.data
    }catch(error){
        console.error(error.response ? error.response.data : error.response.message)
        throw error.response ? error.response.data : error.response.message
    }
} 

export const updateStudent = async (student, id) => {
    try{
      const response = await axios.put(`http://localhost:8080/students/update/${id}`, student,{
        headers: {
            'Content-Type' : 'application/json'
        }
      })
      return response.data
    }catch(error){
        console.error(error.response ? error.response.data : error.response.message)
        throw error.response ? error.response.data : error.response.message
    }
}