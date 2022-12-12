export const taskarr = {
    tasks: [],
  };
  export const stateReducer = (state, action) => {
    console.log(state,action);
    if(action.type==="order"){
        return {
            ...state,
            tasks: action.payload,
          };
    }

    else if (action.type === "islogon") {
      console.log("action", state, action);
      return { ...state, islogin:!state.islogin}
       
      }
   else if(action.type==="topayment"){
    console.log(state,action.payload);
    return {
        ...state,
                tasks: [...state.tasks.filter((item)=>item.id == action.payload)]
    };
    }

    else if(action.type==="rrr"){
      console.log("red");
    }


  }  