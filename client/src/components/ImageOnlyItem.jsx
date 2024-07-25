import React from 'react';
import { Link } from 'react-router-dom';

const ImageOnlyItem = ({ imageUrl, listingId }) => {
  return (
    <Link to={`/listing/${listingId}`} className="w-full h-full flex justify-center items-center">
      <img
        src={imageUrl || 'https://example.com/default-image.jpg'}
        alt="Listing"
        className="w-full h-full object-cover"
      />
    </Link>
  );
};

export default ImageOnlyItem;
