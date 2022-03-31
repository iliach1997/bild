import { Link } from "react-router-dom"
export const NoMatch=()=>{
    return(
        <div>
            <h1>eror 404;</h1>
            <Link to="/home">go to the hose</Link>
        </div>
    )
}