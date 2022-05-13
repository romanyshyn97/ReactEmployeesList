import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const propsElements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} // name={item.name} salary={item.salary}
                onDelete={()=>onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/> 

        )
    })

    return (
        <ul className="app-list list-group">
            {propsElements}
        </ul>
    )
}

export default EmployeesList;