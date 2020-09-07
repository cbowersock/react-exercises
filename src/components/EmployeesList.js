import React from "react";

class EmployeesList extends React.Component {
	constructor() {
		super();
		this.state = {
			input: "",
			filteredEmployees: [],
		};
	}

	handleChange = event => {
		const { employees } = this.props;
		const { value } = event.target;
		const newEmployees = [];

		this.setState({
			input: value,
		});

		employees.forEach(employee => {
			if (employee.name.toLowerCase().includes(value.toLowerCase())) {
				newEmployees.push(
					<li key={employee.name} data-testid="employee">
						{employee.name}
					</li>
				);
			}
		});

		this.setState({
			filteredEmployees: newEmployees,
		});
	};

	componentDidMount() {
		const newEmployees = [];
		const { employees } = this.props;
		employees.forEach(employee => {
			newEmployees.push(
				<li key={employee.name} data-testid="employee">
					{employee.name}
				</li>
			);
    });
		this.setState({
			filteredEmployees: newEmployees
    });
  }

	render() {
		return (
			<React.Fragment>
                <h1>Employee List Filtering</h1>
				<div className="controls">
					<input
						type="text"
						className="filter-input"
						data-testid="filter-input"
						onChange={this.handleChange}
						value={this.state.value}
					/>
				</div>
				<ul className="employees-list">{this.state.filteredEmployees}</ul>
			</React.Fragment>
		);
	}
}

export default EmployeesList;