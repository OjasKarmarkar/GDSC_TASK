import FeatherIcon from 'feather-icons-react';
import axios from "axios";



export default function StudentCard(props) {

    const deleteStudent = (id, token) => {

        axios.post('http://localhost:8000/api/delete', {
            id: id,
            token: token
        }).then((response) => {
            if (response.status != 200) {
                //window.location.reload()
                alert(response.data['message'])


            } else {
                window.location.reload()
                alert(response.data['message'])
            }
        });
    }

    return (
        <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={props.k}>
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"></img>
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{props.data.name}</h2>
                <p className="mt-2 text-gray-600">Div : {props.data.division}</p>
                <p className="mt-2 text-gray-600">Year : {props.data.year}</p>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div className="flex flex-row justify-end mt-4 gap-x-4">
                <a href="#" className="text-xl font-medium text-indigo-500"><FeatherIcon icon="edit" /></a>
                <button className="text-xl font-medium text-red-500" onClick={() => deleteStudent(props.data.id, props.token)}><FeatherIcon icon="trash" /></button>
            </div>
        </div>
    );
}