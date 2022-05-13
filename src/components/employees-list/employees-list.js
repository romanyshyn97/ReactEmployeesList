import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const propsElements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={()=>onDelete(id)}/> // name={item.name} salary={item.salary}

        )
    })

    return (
        <ul className="app-list list-group">
            {propsElements}
        </ul>
    )
}

export default EmployeesList;