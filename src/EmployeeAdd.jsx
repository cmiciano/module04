import React from 'react'


export default class EmployeeAdd extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        /*
        setTimeout(() => {
            this.props.createEmployee(sampleEmployee)
        }, 2000

        )
        this.state = { employees: [] } //using hard-coded array to initialize state
        */

    }

    handleSubmit(e) {
        e.preventDefault()
        const form = document.forms.employeeAdd
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value,
   

        }
        this.props.createEmployee(employee)
        form.name.value = ''
        form.ext.value = ''
        form.email.value = ''
        form.title.value = ''


    }

	render() {
        return(
            <form name="employeeAdd" onSubmit={this.handleSubmit}>
                Name: <input type="text" name="name" /><br/>
                Extension: <input type="text" name="ext" maxLength={4} /><br/>
                Email: <input type="text" name="email" /><br/>
                Title: <input type="text" name="title" /><br/>
                <button>Add</button>


            </form>
        )
		//return(<div>This is a placeholder for the employee add form.</div>)
    }
	
}
