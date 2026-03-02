import React from "react";

const CardLarge = () => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-7 bg-secondary text-white p-4 rounded shadow">
                <h2>Título grande</h2>
                <p>
                    Esta es una card grande que ocupa aproximadamente 3/5 del ancho
                    en pantallas medianas y grandes.
                </p>
                <button className="btn btn-light mt-3">
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default CardLarge;