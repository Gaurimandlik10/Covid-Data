import image from "./corona.jpg";

function App() {
    return (
        <>
        <div className=" bg-dark sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img  src={image} width="90" height="60" style={{marginLeft:"50px"}}  />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{marginRight:"250px"}}>
                    <li><a href="#" className="nav-link text-white font-weight-bold" ><h2>CORONA UPADATE</h2> </a></li>
                </ul>

                <nav className="navbar">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </div>
        </>
    );
}

export default App;