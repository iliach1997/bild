export const Loader=({message='loading...'})=>{
    return (
       <div className="spinner-grow" style={{width:'3rem', height:'3rem'}}role="status">
          <span className="visually-hidden">{message} </span>
       </div>
    )
}