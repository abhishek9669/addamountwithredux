
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  //stete
  let data = useSelector((state)=>{
    return state;
     
  });
  let dispatch = useDispatch();

  //function
  let addFund = ()=>{
    let addfunt = prompt('Add funt');
    let addfunt1 =parseInt(addfunt);
    dispatch({type:'add amount',data:addfunt1});

  }
  let withdraw = ()=>{
    let withdrol = prompt('enter ammount');

    dispatch({type:'remove amount',data:withdrol});
    

  }

  //return statement

  return (
    <>
      <div>
          <h2 className="a_Ammount">Amount = {data}</h2>
      </div>
      <div className="a_Ammount ">
        <button className="a_btn" onClick={(e)=>{addFund(e)}}>Add fund</button>&nbsp;&nbsp;&nbsp;
        <button className="a_btn" onClick={(e)=>{withdraw(e)}}>Withdraw</button>
      </div>
    </>
  );
}

export default App;
