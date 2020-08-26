import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

//colour doesnt need to be displayed but will be needed for sort options
const ProductPreview =({ title, path, coverimage, imagepreview, coveralt, previewalt, price, colour }) => (
    <figure class="effect-chico">
		<img src={coverimage} alt={coveralt}/>
		<figcaption>
			<h3>{title}</h3>
            <p class="price">${price}</p>
			<Link to={path}>View Details</Link>
		</figcaption>
        <img src={imagepreview} alt={previewalt}/>
	</figure>
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