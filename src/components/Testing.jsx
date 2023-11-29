import {useState} from "react";
import {v4 as uuid} from "uuid";

import axios from "../api/axios.jsx";

export const Testing = () => {
    const [test, setTest] = useState([]);


    const handleTest = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/job-seeker/testing", {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(response => {
                setTest([...test, response.data])
                console.log(test)
            })
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <>
            {test.map((item) => (
                <div key={uuid()}>
                    {item}
                </div>
            ))}

            <button onClick={handleTest}>Click me</button>
        </>
    );
}
