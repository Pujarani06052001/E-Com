import React from 'react';
import Link from 'next/link';

const ProductLink = ({ productId, children }) => (
  <Link href="/product/[id]" as={`/product/${productId}`}>
    <a>{children}</a>
  </Link>
);

export default ProductLink;