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
            ]
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

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     // const index = data.findIndex(elem => elem.id === id);
        //     // const old = data[index];
        //     // const newItem = {...old, increase: !old.increase};
        //     // const newArr = [...data.slice(0, index) , newItem, ...data.slice(index + 1)];
        //     // return {
        //     //     data: newArr
        //     // }
        // })
            this.setState(({data}) => ({ /// the same that above
                data: data.map(item => {
                    if(item.id === id){
                        return {...item, increase: !item.increase}
                    }
                    return item;
                })
            }))
    }
    onToggleRise = (id) => {
        this.setState(({data}) => ({ /// the same that above
            data: data.map(item => {
                if(item.id === id){
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render(){
        const employeesCounter = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                    employeesCounter={employeesCounter}
                    increasedEmployees={increasedEmployees}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem} 
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
    
}

export default App;