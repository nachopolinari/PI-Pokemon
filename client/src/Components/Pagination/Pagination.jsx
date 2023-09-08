import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Redux/actions"; // Asegúrate de tener esta acción definida

const Pagination = ({ currentPage, totalPages }) => {
    const dispatch = useDispatch();

    function nextPage() {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    }

    return (
        <div>
            <button onClick={prevPage}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={nextPage}>Next</button>
        </div>
    )
};

export default Pagination;
