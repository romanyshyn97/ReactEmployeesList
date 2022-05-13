import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Oleg', salary: 15000, increase: true, rise:true, id: nextId()},
                {name: 'Andrej', salary: 5000, increase: false, rise:false, id: nextId()},
                {name: 'Petr', salary: 800, increase: false, rise:false, id: nextId()}
            ],
            dataSearch: '',
            filter: 'all'
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before,...after];
            return {
                data: data.filter(item => item.id !== id) // the same that are above
            }
        })
    }

    addItem = (name,salary) => {
       const newItem = {
           name,
           salary,
           increase: false,
           rise: false,
           id: nextId()
       }
       this.setState(({data}) => {
           const newArr = [...data, newItem];
           return {
               data: newArr
           }
       })
    }

    onToggleProp = (id, prop) => {
            this.setState(({data}) => ({ 
                data: data.map(item => {
                    if(item.id === id){
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            }))
    }

    searchEmployee = (items, dataSearch) => {
        if (dataSearch.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(dataSearch) > -1
        })
    }
   
    onUpdateSearch = (dataSearch) => {
        this.setState({dataSearch}); //dataSearch: dataSearch
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter});
    }

    render(){
        const {data,dataSearch, filter} = this.state;
        const employeesCounter = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(data,dataSearch), filter);

        return (
            <div className="app">
                <AppInfo 
                    employeesCounter={employeesCounter}
                    increasedEmployees={increasedEmployees}/>
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
    
}

export default App;