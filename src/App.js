import React, {Component} from 'react';
import './App.css';
import ItemsList from './ItemsList';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            item: '',
            items: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
            this.setState({
                [event.target.name]: event.target.value
            });        
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            item: '',
            items: [...this.state.items, this.state.item]
        });

    }

    render(){
        return(
           <div className="App">
              <form onSubmit={this.handleSubmit}>
                <label>
                    item: <br/>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/>
                </label><br/>
                <input type="submit" value="Add" />
            </form>
            <ItemsList items={this.state.items}  />
           </div>
        );
    }
}