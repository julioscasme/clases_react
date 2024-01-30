// const estilos = {
//   fontSize: '24px',
//   backgroundColor: 'red',
//   textAlign: 'center',
//   margin: 0,
//   padding: '48px',
// }

import './TodoCounter.css' 

function TodoCounter( {total, completed} ){
    return(
      // <h1 style={estilos}>
      <h1>
        {completed === total
        ? '!TODOS COMPLETADOS SATISFACTORIAMENTE!'
        : `Has completado ${completed} de ${total} TODOS`}
      </h1>
    );
  }

export { TodoCounter }; 