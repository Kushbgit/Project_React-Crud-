const EmpDesign=(props)=>{
    return(
        <>
        <div id="data">
        <div className="data" >
        <h1>Employee Name : {props.name}</h1>
        <h1>Emp Number : {props.empno}</h1>
        <h2>Department : {props.dept}</h2>
        <h2>Total Salary : {props.sal}</h2>
        </div>
       
        </div>
        
        </>
    )
}
export default EmpDesign;