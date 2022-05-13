import { render } from '@testing-library/react';
import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
   constructor(props){
       super(props);
       this.state = {
           dataSearch: ''
       }
   }

   onUpdateSearchLocal = (e) => {
        const dataSearch = e.target.value;
        this.setState({dataSearch});
        this.props.onUpdateSearch(dataSearch);
   }

    render(){
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="find an employee"
                value={this.state.dataSearch}
                onChange={this.onUpdateSearchLocal}/>
        )
   }
}

export default SearchPanel;