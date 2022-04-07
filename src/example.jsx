/* import React from 'react'
import { useRef } from 'react';
function example () {

const inputRef= useRef(null);
const resultRef = useRef(null);

const addTask =()=>{
alert(inputRef.current.value);
resultRef.current.innerHTML = inputRef.current.value;
   } 
   
   return (
      
    <div>
    <input type="text" ref={inputRef} />
    <button onClick={addTask}> Añadir tarea </button>
    <div ref={resultRef}></div>
    </div>
  )
} */
//definimos el estado incial en este caso es un objeto
/* const estadoInicial =()=> ({
    count:0,
})
//si no tengo un estado le paso mi estaado inicial
const reducer =(state = estadoInicial(), action = {}) => {
    if(action.type ==='AUMENTA'){
          return {count:state.count +1};
    }
  return state
};

export default (props) =>{
    Primero tenemos el estado y la funcion dispatch que se encarga de pasar las props luego recibimos el reducer y el estado inicial 
    const [state, dispatch] = React.useReducer(reducer, reducer())
    const increment =()=> dispatch({type: 'AUMENTA'});
    return (
<Counter
value={state.count}
increment={increment}/>
    );
}; */