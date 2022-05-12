import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data}) => {

    const propsElements = data.map(item => {
        return (
            <EmployeesListItem {...item}/> // name={item.name} salary={item.salary}
        )
    })

    return (
        <ul className="app-list list-group">
            {propsElements}
        </ul>
    )
}

export default EmployeesList;