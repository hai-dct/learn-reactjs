import React, {Fragment} from "react";
import {useParams} from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    return (
        <Fragment>
            detail {id}
        </Fragment>
    )
}

export default ProductDetail;