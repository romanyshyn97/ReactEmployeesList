import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const propsElements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} // name={item.name} salary={item.salary}
                onDelete={()=>onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
                /> 

        )
    })

    return (
        <ul className="app-list list-group">
            {propsElements}
        </ul>
    )
}

export default EmployeesList;