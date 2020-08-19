import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

//colour doesnt need to be displayed but will be needed for sort options
const ProductPreview =({ title, path, coverimage, imagepreview, coveralt, previewalt, price, colour }) => (
    <div>
        <h2>{title}</h2>
        <Link to={path}>
            <img src={coverimage} alt={coveralt} />
        </Link>
        <h4>{price}</h4>
        <img src={imagepreview} alt={previewalt}/>
    </div>
);

ProductPreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    coverimage: PropTypes.string.isRequired,
    imagepreview: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    colour: PropTypes.array,
};

export default ProductPreview;