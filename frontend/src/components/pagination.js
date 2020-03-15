import React from 'react';

const Pagination = ({ pageNumbers, current, onClick }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#!" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {[...Array(pageNumbers)].map((item, index) => {
                    return (<li className={`page-item ${index + 1 == current ? "active" : ""}`}>
                        <a className="page-link" onClick={() => onClick(index)}>
                            {index + 1}
                        </a>
                    </li>)
                })}
                <li className="page-item">
                    <a className="page-link" href="#!" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>

    );
};

export default Pagination;