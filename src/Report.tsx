import { type } from "@testing-library/user-event/dist/type";
import { useParams } from "react-router-dom";

type item = {
    name ? : string
}

function Report(){

    const data = useParams();

    return(
        <div>
            <h1>
                Name : {data.name}
            </h1>
            <h1>
                Class : {data.class1}
            </h1>
            {/* <h1>
                Roll No : {rollno}
            </h1> */}
        </div>
    )
}

export default Report;