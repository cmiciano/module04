

// if you get an error try
import React from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'

const root = createRoot(document.getElementById('content'))
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
)

/*
import React from 'react'
import ReactDOM from 'react-dom'
//import EmployeeAdd from './EmployeeAdd.jsx'
import EmployeeList from './EmployeeList.jsx'


const contentNode = document.getElementById('content')
ReactDOM.render(
    <div>
     <EmployeeList />
    </div>,
  //what you want to render
    contentNode // where you want to render the element to
) //rendering component to contentNode element


*/


/*
// M5 and M6 and M7
function EmployeeTable(props) {

    // maps employee element in array to create 
    // multiple employee rows
    // creates properties "key" taking in employee.id and "employee"
    // taking in whole element in the array {id, name, ext etc}
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow 
        key={employee._id} 
        employee={employee}
        deleteEmployee={props.deleteEmployee}/> )
    // define style here
    // basically make a box around each cell in table

    
    return( //two braces since you're specifiying in-line style, also have to use "800px" instead of just number 800
        <table class="bordered-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Is Employed</th>
                    <th></th>

                </tr>
            </thead> 
            <tbody>
                {employeeRows}
            </tbody>
        </table>

    )
    
}

*/

// M8
// creating an array of employees

/*
const initialEmployees = [
    {   id: 1,
        name: 'Zak Ruvalcaba',
        ext: 1224,
        email: 'zak@vectacorp.com',
        title: 'CEO',
        dateHired: new Date('2018-08-15'),
        isEmployed: true,
    },
    {
        id: 2, 
        name: 'yuh Ruvalcaba',
        ext: 1234,
        email: 'zaak@vectacorp.com',
        title: 'CFO',
        dateHired: new Date('2019-08-15'),
        isEmployed: true,
    },
]

const sampleEmployee = {
    name: 'Holly Unlikely',
    ext: 1126,
    email: 'sally@vectacorp.com',
    title: 'Director of Sales',
    dateHired: new Date('2015-01-03'),
    isEmployed: true,

}

*/

// M4

/*
class EmployeeFilter extends React.Component {
	render() {
		return(<div>This is a placeholder for the employee filter.</div>)
    }
	
}
*/


/*

// class HTML attribute has to be called class_name in JSX since class is a specific keyword
// hyphens become camelcase in JSX max-hyphen-length ->  maxHyphenLength

function EmployeeRow(props) {
    //const employee = props.employee
    //const style = this.props.rowStyle // property passed onto built-in react compoment
    // need toDateString for it to work

    function onDeleteClick() {
        props.deleteEmployee(props.employee._id)
    }

    return(
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.extension}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.title}</td>
            <td>{props.employee.dateHired.toDateString()}</td> 
            <td>{props.employee.currentlyEmployed ? 'Yes' : 'No'}</td>
            <td><button onClick={onDeleteClick}>DELETE</button></td>
        </tr>
    )


	
}

*/

// M3

// gathering all components within employeelist
/*
class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = { employees: [] } //using hard-coded array to initialize state
        this.createEmployee = this.createEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)

    }

    componentDidMount() {
        this.loadData() //simulates asynchronous call, load employee data from state
    }
    

    loadData() {
        fetch('/api/employees')
         .then(response => response.json())
         .then(data => {
            console.log('Total count of employees:', data.count)
            data.employees.forEach( employee => {
                employee.dateHired = new Date(employee.dateHired)
            })
            this.setState({ employees: data.employees})
         })
        .catch(err => {console.log(err)})
        
       
    }

    createEmployee(employee) {
        fetch('/api/employees', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee),
        })
        .then(response => response.json())
        .then(newEmployee => {
            newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired)
            const newEmployees = this.state.employees.concat(newEmployee.employee)
            this.setState({ employees: newEmployees })
            console.log('Total count of employees:', newEmployees.length)  // modifying the state after adding to database

        })
        .catch(err => {console.log(err)} )

    }


    deleteEmployee(id) {
        fetch(`/api/employees/${id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                console.log('Failed to delete employee.')
            } else {
                this.loadData()
            }
        })
    }
    // passing employees to EmployeeTable via prop
    // passing method 
	render() { //have to have render() function within a class
		return(   
            <React.Fragment>
                    <h1>Employee Management Application</h1>
                    <EmployeeFilter />
                    <hr /> 
                    <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} /> 
                    <hr />
                    <EmployeeAdd createEmployee={this.createEmployee} />
            </React.Fragment>

        )
  }
}




/*
// M2
function Welcome(props) {
    return <h1>Hello, {props.name} </h1>
}
// <Welcome name="Zak Ruvalcaba" />
// one property called name
ReactDOM.render(<Welcome name="Zak Ruvalcaba" />, document.getElementById('content'))
*/

