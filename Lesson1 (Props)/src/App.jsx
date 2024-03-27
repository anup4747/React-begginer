import Student from "./student"
import PropTypes from 'prop-types'

function App() {
  

  return (
    <>
      <Student name="Anup Tarwade" age = {18} student= {true}/>
      <Student name="Abhishek Sharma" age = {19} student= {true}/>
      <Student name="Ateeb Sheikh" age = {19} student= {true}/>
      <Student name="Vinit Wagh" age = {18} student={true}/>
      <Student/>
    </>
  )
}

Student.propTypes= {
  name : PropTypes.string,
  age : PropTypes.number,
  student:PropTypes.bool, 
}

Student.defaultProps = {
  name : "Guest",
  age : 0,
  student:false, 
}

export default App
