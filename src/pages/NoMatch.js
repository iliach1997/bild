import { Link } from "react-router-dom"
export const NoMatch=()=>{
    return(
        <div>
            <h2>eror 404;</h2>
            <Link to="/home">go to the hose</Link>
        </div>
    )
}