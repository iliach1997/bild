import { LeftNavigation } from "./LeftNavigation"
import { RightNavigation } from "./RightNavigation"
export const Header=()=>{

    return(
     <header className='bo'>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <LeftNavigation/>
  <RightNavigation/>
     
    </div>
  </div>
</nav>
     </header>
    )
}