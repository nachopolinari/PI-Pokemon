import { useState } from 'react';

// La función usePagination acepta dos argumentos: 'data' (los datos a paginar) y 'itemsPerPage' (la cantidad de elementos por página).
function usePagination(data, itemsPerPage) {
  // Inicializa el estado local 'currentPage' con el valor 1. Esta variable rastrea la página actual.
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula la cantidad total de páginas ('totalPages') basándose en la longitud de los datos y la cantidad de elementos por página.
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Utiliza el método 'slice' para extraer los datos correspondientes a la página actual.
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // La función 'goToPage' permite navegar a una página específica, asegurándose de que el número de página esté dentro de los límites válidos.
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // La función 'nextPage' incrementa la página actual para navegar a la siguiente.
  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  // La función 'prevPage' disminuye la página actual para volver a la página anterior.
  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  // La función devuelve un objeto que contiene información relevante para la paginación.
  return {
    currentPage,    // La página actual.
    totalPages,     // La cantidad total de páginas.
    currentData,    // Los datos actuales para la página actual.
    goToPage,       // Función para navegar a una página específica.
    nextPage,       // Función para ir a la página siguiente.
    prevPage,       // Función para ir a la página anterior.
  };
}

// Exporta la función 'usePagination' como un módulo para que pueda ser utilizada en otros componentes.
export default usePagination;
