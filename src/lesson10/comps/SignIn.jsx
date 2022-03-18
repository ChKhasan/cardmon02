import React,{} from 'react'
import { useContext,useState } from 'react';
import { Context } from '..';

const SignIn = () => {
    const {data, setArr}  = useContext(Context);
    const [obj, setObj] = useState({name: "",number: ''});

    const handleInput1 = (e) => {
        obj.name = e.target.value
       setArr([obj])
        console.log(data);
      };
      const handleInput2 = (e) => {
        obj.number = e.target.value
        setArr([obj])
       
        console.log(data);
      }

const click = () => {

    if (localStorage.getItem('data')) {
            if (localStorage.getItem('data').length !== 0) {
                console.log(JSON.parse(localStorage.getItem("data")))
                console.log(data)
                let  a = [
                    ...JSON.parse(localStorage.getItem("data")),
                    ...data
                ]

                console.log(a,'aa ')
                localStorage.setItem("data", JSON.stringify(a));
            } else {
                console.log('bbl')
                localStorage.setItem("data", JSON.stringify(data));
            }
    } else {
        console.log('qweee')
        localStorage.setItem("data", JSON.stringify(data));
    }
    

  }
  return (
    <div>
        <form>
    <div className="form-group row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Login</label>
      <div className="col-sm-10">
        <input type="text" onChange={handleInput1} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
    </div>
    <div className="form-group row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password"onChange={handleInput2} className="form-control" id="inputPassword" placeholder="Password" />
      </div>
    </div>
    <button className='btn btn-success' onClick={click}>ok</button>
  </form>
  </div>
  )
}

export default SignIn