import React from 'react';
import axios from 'axios';
import OptionComponent from './OptionComponent';
class AutoComplete extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            input_value: "",
            response_arr: [],
            limit: 5,                    //By default set to 5
            character_count: 3,         // By default set to 3
        };
        
        //binding these functions
        this.onChange = this.onChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.onhandleClick = this.onhandleClick.bind(this);
    }
    onChange(event){
        //setting state on changing text in input_box
        this.setState({input_value: event.target.value}, afterUpdate);
        
        //callback function after value is set
        function afterUpdate(){
            
            //only perform get request when length of input_val is >= 3
            if(this.state.input_value.length >= 3){ 
                axios.get(`https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${this.state.input_value}&limit=${this.state.limit}`)
                .then(res => {
                    this.setState({response_arr: res.data.data.result});    //response array is where all 5 responses are stored
                });
            }
        }
    }
    handleOnBlur(){
        setTimeout(() =>{
            if(this.state.input_value.length >=3){
                document.getElementsByClassName('optionthing')[0].style.display = 'none';
            }
        },200);
        
    }
    handleOnFocus(){
        document.getElementsByClassName('optionthing')[0].style.display = 'block';
    }
    onhandleClick(place, country){

        //Add whatever operation you want to add here
        console.log(`You clicked on ${place}, ${country}`);     
    }
    render(){

        // Mapping each obtained response from get request to OptionComponent
        let optioncomp = this.state.response_arr.map((val) => {
            return this.state.input_value.length >=3 ? 
            <OptionComponent 
                onhandleClick = {this.onhandleClick} 
                key = {val.id} 
                value = {val.name} 
                country = {val.location.country.long_name}
            /> 
            : null;
        });


        return(
            <div>
                <input 
                    onFocus = {this.handleOnFocus} 
                    onBlur = {this.handleOnBlur} 
                    placeholder = "Search by College or city" 
                    id="datas" 
                    type='text' 
                    name = "input_value" 
                    value = {this.state.input_value} 
                    onChange = {this.onChange}
                />
                <button 
                    onClick= {() => console.log('Clicked Search Button')} 
                    id = "submitbtn">
                        <i className="fa fa-search" style={{fontSize:'18px', color: 'white'}}></i> Search
                </button>

                <div className = "optionthing">
                    {this.state.input_value.length >= 1 && this.state.input_value.length <3 ? 
                    <div 
                        style = {{position: "relative", 
                                right: "64px",
                                margin: "auto",
                                fontSize: "14px", 
                                backgroundColor: "white", 
                                width: "524px",
                                padding: "10px 16px", 
                                textAlign:"left", 
                                borderRadius: "8px"}}>
                        please type {`${3 - this.state.input_value.length}`} more character to get suggestions 
                    </div> : null}
                    {optioncomp}
                </div>
            </div>
        )
    }
}

export default AutoComplete;