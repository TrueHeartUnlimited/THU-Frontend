import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image"

//colour doesnt need to be displayed but will be needed for sort options
const ProductPreview =({ title, path, imagefluid, imagesrc, imagealt, price }) => (
    <figure class="effect-chico">
		<Img fuild={imagefluid} src={imagesrc} alt={imagealt}/>
		<figcaption>
			<h3>{title}</h3>
            <p class="price">${price}</p>
			<Link to={path}>View Details</Link>
		</figcaption>
	</figure>
);

ProductPreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    imagefuild: PropTypes.string.isRequired,
    imagesrc: PropTypes.string.isRequired,
    imagealt: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default ProductPreview;