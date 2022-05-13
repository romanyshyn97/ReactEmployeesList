import './app-filter.css';

const AppFilter = (props) => {
    const btnsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For promotion'},
        {name: 'moreThan1000', label: 'Salary more than 1000$'}
    ];
    const buttons = btnsData.map(({name,label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    For promotion
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary more than 1000$
            </button> */}
        </div>
    );
}

export default AppFilter;