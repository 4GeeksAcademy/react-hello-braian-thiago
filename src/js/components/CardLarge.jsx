import React from "react";

const CardLarge = ({ titulo, texto }) => {
    return (
        <div className="row justify-content-center mt-4 ">
            <div className="col-12 col-md-12 text-dark p-5 rounded-2" style={{ backgroundColor: "#f2f2f2" }}>

                <h1>{titulo}</h1>
                <p>
                    {texto}
                </p>
                <button className="btn btn-primary btn-lg">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default CardLarge;