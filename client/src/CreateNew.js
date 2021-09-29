import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



export default function CreateNew() {
    let history = useHistory();
    const createStudent = (event) => {
        if((!event.target.name.value || event.target.name.value.length === 0 )|| (!event.target.id.value )){
            alert('Fill All Details!')
        }else{
            const token = localStorage.getItem('token')
            event.preventDefault();
            axios.post('http://localhost:8000/api/new', {
                id: parseInt(event.target.id.value),
                division:event.target.divison.value,
                year:event.target.year.value,
                name:event.target.name.value,
                token: token
            }).then((response) => {
               
                if (response.status !== 200) {
                    //window.location.reload()
                    
                    alert(response.data['message'])
    
    
                } else {
                    history.goBack()
                   
                }
            });       // or directly
        }
       

    }

    return (
        <div className="w-full m-12 max-w-xs">
            <div className="flex flex-row justify-between text-3xl font-semibold font-body"> Add Student</div>
            <form className="bg-white mt-12 md:w-full" onSubmit={createStudent}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="division">
                        Division
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="divison" type="text" placeholder="E.g. K1 " />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                        Year
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" placeholder="E.g. SE , BE" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        ID
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="number" placeholder="E.g. 60009200042" />
                </div>
                <div className="mt-12 flex items-center justify-between">
                    <button className="flex flex-row gap-x-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Create
                        <FeatherIcon icon="check" />
                    </button>

                </div>
            </form>

        </div>)

}