import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router';


export default function Edit(props) {
    const location = useLocation()
   const { id , div , year , nm } = location.state
    let history = useHistory();
    const editStudent = (event) => {
        if((!event.target.name.value || event.target.name.value.length === 0 )){
            alert('Fill All Details!')
        }else{
            const token = localStorage.getItem('token')
            event.preventDefault();
            axios.post('http://localhost:8000/api/edit', {
                id: id,
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
                    //alert(response.data['message'])
                }
            });       // or directly
        }
       

    }

    return (
        <div className="w-full m-12 max-w-xs">
            <div className="flex flex-row justify-between text-3xl font-semibold font-body"> Edit Student</div>
            <form className="bg-white mt-12 md:w-full" onSubmit={editStudent}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"  defaultValue={nm} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="division">
                        Division
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="divison" type="text" placeholder="E.g. K1 "  defaultValue={div} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                        Year
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="text" placeholder="E.g. SE , BE"  defaultValue={year}  />
                </div>
                <div className="mt-12 flex items-center justify-between">
                    <button className="flex flex-row gap-x-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save
                        <FeatherIcon icon="save" />
                    </button>

                </div>
            </form>

        </div>)

}