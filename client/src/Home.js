import StudentCard from "./studentList";
import FeatherIcon from 'feather-icons-react';
import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Home() {

    const [students, setStudents] = useState(null);
    const [token , setToken] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/createJWT').then((response) => {

            if (response.data['token']) {
                setToken(response.data['token'])
                axios.get('http://localhost:8000/api/all?token=' + response.data['token']).then((response) => {
                   
                    setStudents(response.data['students']);
                })
            }

        });
    }, []);


    if(!students){
        return <div className="h-screen w-screen flex m-auto justify-center items-center text-black">
       <div class="bg-blue-600 p-2 w-4 h-4 rounded-full"></div>
<div class="bg-green-600 p-2 w-4 h-4 rounded-full mx-4"></div>
<div class="bg-red-600 p-2 w-4 h-4 rounded-full"></div>
     
     </div>
    }
    return (<div className="m-12">
        <div className="flex flex-row justify-between text-3xl font-semibold font-body"> StudentOps
            <button
                className="text-xl text-white p-2 px-8 text-center flex justify-center items-center rounded-md  bg-indigo-600 hover:bg-indigo-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                New
            </button>
        </div>
        {students.length==0?(<div className="mt-10 text-black">
No Students! Add new from the button!
     
     </div>):  <div >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {students.map(function(d, idx){
         return (<StudentCard k={idx} data={d} token={token}/>)
       })}
            </div>

        </div>}
      
    </div>);
}