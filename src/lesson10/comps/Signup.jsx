import React, {useContext} from 'react'
import { Context } from '..';
const Signup = () => {
    const {data, setArr}  = useContext(Context);

    const testData = () => {
    
        setArr([
          ...JSON.parse(localStorage.getItem("data")),
          ]);
     if (data.filter(item => item.name === document.getElementById("testName").value).length)
        {
            // console.log(token);
            // setToken(true)
            localStorage.setItem("TOKEN", "token");
        window.location.href = "/";
        } else {
            // console.log(token);
            // setToken(false)
    
        }
      
      };
  return (
    <div>
        <form>
    <div className="form-group row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Login</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
    </div>
    <div className="form-group row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
      </div>
    </div>
    <button className='btn btn-success' onClick={testData}>krish</button>

  </form>
  </div>
  )
}

export default Signup