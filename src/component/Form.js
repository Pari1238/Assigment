import React, { Component } from 'react'
import './Dottedbox.css';
//import Curd, { Crud } from './Crud';
//import { Router, BrowserRouter as Route, Link } from 'react-router-dom';

export class Form extends Component {
  constructor(props) {
     super(props)
  
   }
  
  render() {
        return (
      
       <center> 
       <div className="col-md-6 " >
             <div className="dottedbox">
            <center> <button className="btn btn-primary"><h1>ONLINE LOGIN FORM
            </h1></button></center>
            <br/>
            <div className="container">
            <form ref="myform" >
            <div className="from-group">
          <center><input type="textbox" 
          className="form-control" ref="name" placeholder="ENTER FULL NAME"/>
            </center>
             <br/>
             <center><input name="email" type="email" ref="mail"  className="form-control"
        placeholder="EXAMPLE:  XYZ@GMAIL.COM"/></center>
        <br/>
         <center><input type="tel"  className="form-control" 
         placeholder="ENTER MOBILE NUMBER"/></center>
         <br/>
         <center><input type="date" placeholder="DD/MM/YYYY " className="form-control" /></center>
         <br/>
         <center>
<select className="form-control" placeholder="CITY" name="city"><br/>
<option>MUMBAI</option><br/>
<option>HYDRABAD</option><br/>
<option>BANGLORE</option><br/>
<option>DEHLI</option><br/>
<option>INDORE</option><br/>
<option>NAGPUR</option></select></center>
<br/>
<center><select className="form-control" name="degree"><br/>
<option>B.E./B.TECH</option><br/>
<option>BCA</option><br/>
<option>BBA</option><br/>
<option>B.COM</option><br/>
<option>MCA</option></select></center>
<br/>
<center>
 <input type="submit" onClick="this.datasubmit"  class="btn btn-primary" value="SUBMIT"/>
</center>
</div>
</form></div>
</div>

  </div>
</center>
        )        
    }
}
export default Form