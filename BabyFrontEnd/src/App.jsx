import React, {Component} from 'react';
import {api} from './const.jsx'

export default class App extends Component {
    
    requestBabyName(){
        Axios.post(api, {
            length : document.getElementById('length').value,
            beginning : document.getElementById('nameStart').value})
            .then(function(response) {
            document.getElementById('output').innerHTML += response.data.name + <br/> })
    }


    render() {
        return (
            <div>
                <form>
                    <input type='text' id='length'/> <input type='number' id='nameStart'/> <br/>
                    <input type='button' onClick={this.requestBabyName}/>
                </form>

                <p id='output'></p>


            </div>
        );
    }
}