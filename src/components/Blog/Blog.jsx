import React from 'react'
import './Blog.css'
import contexto from './Assets/contexto.png'
import JSX from './Assets/JSX.png'
import clase from './Assets/componenteClase.png'
import estado from './Assets/estado.png'
import condicional from './Assets/condicional.png'
import listas from './Assets/listas.png'
import use from './Assets/usestate.png'
import effect from './Assets/use effect.png'
import useRef from './Assets/useRef.png'
import call from './Assets/useCallback.png'
import volver from './Assets/volver.png'
import useContext from './Assets/useContext.png'
import personal from './Assets/hook personalizado.png'
import memo from './Assets/useMemo.png'

export const Blog = () => {
  return (
    <section className='blog'> 
    <div>
    <h1 className='titulo'  id='inicio' >BLOG</h1>
    <h2 className='reactT'  > Aprendiendo React </h2>
    </div> 
    <div className='tema'>
      <h3 className='subtitulo'> Create react app </h3>
      <p className='explica'>
      Primeros pasos con react, para crear una aplicación con react es necesario ejecutar el siguiente comando en tu terminal, recuerda que el nombre de tu app debe estar escrito en minúsculas y cada palabra separada por un  guión  my-app.
npx create-react-app my-app
Una vez que el el comando termine de ejecutarse tendrás tu proyecto listo para verlo en el navegador con el comando : npm start
      </p>
    </div>

     <div className='tema'>
      <h3 className='subtitulo'> JSX  </h3>
      <p className='explica'>
      JSX es como una combinación en js y html, la cual nos permite tener la parte funcional de js con la parte visual, esto ayuda a que comprendamos de mejor manera como funciona nuestro componente.
      </p>
      <img  className='ilustracion' src={JSX} alt="card__image" />
    </div>

   <div className='tema'>
      <h3 className='subtitulo'> Components  </h3>
      <p className='explica'>
      Pensemos que tu app es una casa, la cual tiene habitaciones, esta tiene muebles y a su vez muebles que tienen partes más pequeñas que los componen, esto asemeja a un componente en react, la casa sería la aplicación que tiene partes más pequeñas que forman con funciones individuales que forman al todo.  
      </p>
      <img  className='ilustracion' src={clase} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Props </h3>
      <p className='explica'>
      Los props son argumentos que pasamos a un componente los cuales permiten pasar valores entre los componentes. 
      </p>
      <img  className='ilustracion' src={contexto} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Estado </h3>
      <p className='explica'>
      Un estado es un espacio de memoria el cual se actualiza con los cambios que se generan con la interacción en nuestra aplicación. 
La manera en la que podemos guardar este estado es a partir de useState el cual al ejecutarse devuelve un arreglo con 2 posiciones, en la primera posición una variable que guarda el valor y en la segunda la función que actualiza el valor.
      </p>
      <img  className='ilustracion' src={estado} alt="card__image" />
    </div>

   <div className='tema'>
      <h3 className='subtitulo'> Conditional rendering  </h3>
      <p className='explica'>
      El renderizado condicional ayuda a mostrar uno u otro contenido en la interfaz dependiendo si la condición es verdadera o falsa.
      </p>
      <img  className='ilustracion' src={condicional} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Component life cycle  </h3>
      <p className='explica'>
      Montaje
Se usa cuando se crea una instancia de un componente y se inserta en el Dom.
constructor():
Se usa para inicializar un estado local asignando un objeto a this.state, también se usa para enlazar manejadores de eventos a una instancia.
render()
se usa en componentes de clase y examina a this.state and this.props y devuelve: elementos de react por ejemplo un div, arrays fragmentos, portales, strings y números, booleanos o null.
componentDidMount()
Se invoca después de que se inserte un componente en el DOM.
Actualización 
La podemos notar cuando tenemos cambios en props y estado.
render()
componentDidUpdate()
Se invoca después de la actualización. 
desmontaje 
componenteWillUnmount()
Con este método puedes realizar todas las tareas de limpieza necesarias.
      </p>
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> List and keys </h3>
      <p className='explica'>
      En React es posible renderizar listas de elemento de varios tipos usando diversos métodos como por ejemplo map, pero es importante que al hacerlo cada uno de los elementos tengan identificadores únicos que permitan que react identifique a aquellos que cambian sea que se agregan o eliminan, para ello es importante dar un key a cada uno.
      </p>
      <img  className='ilustracion' src={listas} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Basic Hooks/useState  </h3>
      <p className='explica'>
      Este hook nos permite guardar información u obtenerla de un estado para componentes de funciones, se compone de una un arreglo de dos posiciones en la primera una variable y en la segunda una función que lo actualiza y recibe un único argumento que es el estado inicial 

      </p>
      <img  className='ilustracion' src={use} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> useEffect </h3>
      <p className='explica'>
      Tiene la capacidad de realizar efectos secundarios desde un componente de función, cuando lo llamamos le decimos a react que ejecute la función de efecto después de vaciar los cambios en el dom estos efectos se declaran dentro del componente para que tenga acceso a sus props y estado.

      </p>
      <img  className='ilustracion' src={effect} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> ADVANCED TOPICS/Hooks
  </h3>
  <h2 className='reactT'> Reglas de uso </h2>
      <p className='explica'>
      
No llames Hooks dentro de ciclos, condicionales o funciones anidadas. 
Llama Hooks solo en funciones de React.
Para reforzar estas reglas podemos instalar "eslint-plugin-react-hooks".  Este plugin está incluido por defecto en Create React App.
      </p>
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Escribiendo Hooks </h3>
      <p className='explica'>
      Los Hooks personalizados permiten combinar los Hooks proporcionados por React en sus propias abstracciones y reutilizar la lógica de estado común entre los diferentes componentes.
Los hooks personalizados preferentemente deben nombrarse empezando por use.
Estos hooks nos permiten tener un código más limpio y también rehusar la lógica dentro de este hook en otra parte.

      </p>
      <img  className='ilustracion' src={personal} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> useCallback   </h3>
      <p className='explica'>
      Devuelve una función de devolución de llamada memorizada. Esto ayuda a guardar un valor para no volver a calcularlo. Para usarla cuando no quieras que se renderice la función. al igual que ayuda a optimizar recursos y que no se ejecuten funciones que consumen muchos datos.devuelve una función memorizada
      </p>
      <img  className='ilustracion' src={call} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> use ref </h3>
      <p className='explica'>
      A diferencia de useState que actualiza con cada cambio con useRef solo obtenemos algo así como el valor final o current.
Solo devuelve un artículo. Cuando lo inicializamos el valor inicial: useRef(0). También nos ayuda a acceder a un elemento del dom, o podemos guardar estados anteriores.

      </p>
      <img  className='ilustracion' src={useRef} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'>use memo  </h3>
      <p className='explica'>
      Nos ayuda a guardar un valor para que no se vuelva a recalcular, devuelve un valor memorizado que solo se actualiza una de sus dependencias.
      </p>
      <img  className='ilustracion' src={memo} alt="card__image" />
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> useReducer  </h3>
      <p className='explica'>
      Este HOOK utiliza 2 estados …use Reducer(reducer, initialState)
Reducer contiene la lógica de estado y initialState puede ser un valor simple pero generalmente contiene un objeto. Nos devuelve el estado actual y un dispach método.
      </p>
    
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> useContext  </h3>
      <p className='explica'>
      Lo usamos para poder compartir estados entre componentes, algo similar a props pero este funciona de manera más global ya que usa Context envuelve a los componentes y aquellos que estén dentro podrán obtener los valores de los estados.
      </p>
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Context   </h3>
      <p className='explica'>
      La context API de react es una forma de crear variables globales que pueden pasar valores de padre a hijos usando un  orden descendiente.
Podemos usarlo a través de un Provider que es quien provee el valor.
const value= useContext (MyContext);

      </p>
    
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> Refs </h3>
      <p className='explica'>
      Una referencia es una característica opcional que podemos usar para que algunos componentes tomen una referencia que reciben y la reenvien a un hijo.
Te ayuda a acceder a componentes del DOM desde otra parte como si fuese un componente común de DOM.
      </p>
    </div>

    <div className='tema'>
      <h3 className='subtitulo'> High order components   </h3>
      <h4>Portals</h4>
      <p className='explica'>
      Nos ayudan a renderizar al hijo en un nodo del DOM que está fuera de la jerarquía del DOM del componente padre. Comúnmente se usan cuando queremos que visualmente un elemento salga de su contenedor. 
Permiten renderizar hijos a otro subárbol del DOM
      </p>
      <h3 className='subtitulo'> Error boundaries </h3>
      <p className='explica'>
      Crean un repuesto en la interfaz cuando captan errores de javascript en cualquier parte de su árbol de componentes.Funcionan algo así como un catch de javascript pero con componentes de clase y solo capturaron en aquellos que están bajo el mismo árbol.
No capturan errores de: Manejadores de eventos, código asíncrono, renderizado del servidor, errores del propio límite.
      </p> 
      <div>
      <a href="/#inicio"> <img  className='ilustracion' src={volver} alt="card__image" /></a>
        
         </div>
       
    </div> 
 
    </section>
  )
}
