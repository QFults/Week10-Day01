import './App.css'

const App = () => {
  const name = 'John Doe'
  // const bool = true

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>Navbar</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Link</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Dropdown
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li><a className='dropdown-item' href='#'>Action</a></li>
                  <li><a className='dropdown-item' href='#'>Another action</a></li>
                  <li><hr className='dropdown-divider' /></li>
                  <li><a className='dropdown-item' href='#'>Something else here</a></li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>
              </li>
            </ul>
            <form className='d-flex'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>
      <h1>Hello World! {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores inventore fugit voluptate ex nemo, aspernatur, magni corrupti itaque est libero recusandae dicta non hic reiciendis rem reprehenderit earum at!</p>
      <div className='card' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href='#' className='card-link'>Card link</a>
          <a href='#' className='card-link'>Another link</a>
        </div>
      </div>
      {/* <p>{5 * 7}</p> */}
      {/* <p>{bool ? 'true' : 'false'}</p> */}
      {/* <form>
        <label htmlFor='name'>name</label>
        <input type='text' name='name' id='name' className='form-control' />
      </form> */}
    </>
  )
}

export default App
