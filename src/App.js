import Navbar from './components/Navbar'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Form />
          </div>
          <div className='col-md-6'>
            <List />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
