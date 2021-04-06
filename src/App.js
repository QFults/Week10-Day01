const App = () => {
  const name = 'John Doe'
  const bool = true

  return (
    <>
      <h1>Hello World! {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores inventore fugit voluptate ex nemo, aspernatur, magni corrupti itaque est libero recusandae dicta non hic reiciendis rem reprehenderit earum at!</p>
      {/* <p>{5 * 7}</p> */}
      <p>{bool ? 'true' : 'false'}</p>
      {/* <form>
        <label htmlFor='name'>name</label>
        <input type='text' name='name' id='name' className='form-control' />
      </form> */}
    </>
  )
}

export default App
