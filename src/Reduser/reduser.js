let rootreduser = (prstatus,action)=>{
    console.log(prstatus)
    let newstate = prstatus;
  
    switch(action.type){
      case 'add amount':
         return newstate = prstatus + action.data;
      
      case 'remove amount':
        return newstate = prstatus - action.data;
       
  
      default:
  
    }
    return newstate;
  
  }
  export default rootreduser;