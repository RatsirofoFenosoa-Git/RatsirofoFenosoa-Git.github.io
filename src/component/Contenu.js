import React from 'react';
//import clsx from 'clsx'
//import { classes } from 'istanbul-lib-coverage';

class Contenu extends React.Component{
    render(){
        let cool=()=>{
            console.log("salut");
        }
        return(
            <div>
               <div id="player1">
                    <div id="l0_c0" className='rond' onClick={this.cool} ></div> 
                    <div id="l0_c1" className='rond' onClick={this.cool}></div> 
                    <div id="l0_c2" className='rond' onClick={this.cool}></div> 
                    <div id="l0_c3" className='rond' onClick={this.cool}></div> 
                    <div id="l1_c0" className='rond' onClick={this.cool}></div> 
                    <div id="l1_c1" className='rond' onClick={this.cool}></div> 
                    <div id="l1_c2" className='rond' onClick={this.cool}></div> 
                    <div id="l1_c3" className='rond' onClick={this.cool}></div>
               </div>
               <div id="player2"> 
                    <div id="l2_c0" className='rond' onClick={this.cool}></div>
                    <div id="l2_c1" className='rond' onClick={this.cool}></div>
                    <div id="l2_c2" className='rond' onClick={this.cool}></div>
                    <div id="l2_c3" className='rond' onClick={this.cool}></div>
                    <div id="l3_c0" className='rond' onClick={this.cool}></div>
                    <div id="l3_c1" className='rond' onClick={this.cool}></div>
                    <div id="l3_c2" className='rond' onClick={this.cool}></div>
                    <div id="l3_c3" className='rond' onClick={this.cool}></div>
               </div>
            </div>
        )
    }
}
export default Contenu;