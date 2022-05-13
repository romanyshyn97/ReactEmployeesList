import './app-info.css';

const AppInfo = ({employeesCounter, increasedEmployees}) => {
    return (
        <div className="app-info">
            <h1>Employees acounting in company</h1>
            <h2>Total number of employees: {employeesCounter}</h2>
            <h2>Will receive premium: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;