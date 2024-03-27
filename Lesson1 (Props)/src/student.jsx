import "./student.css"

function student(props){
    return (
        <>

            <div className="student-card">
            <p>Student Details</p>
            <p>Name : {props.name}</p>
            <p>age : {props.age}</p>
            <p>Student: {props.student ? "Yes" : "no"} </p>

            </div>
            
        </>
    )
}

export default student