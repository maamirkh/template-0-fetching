// /app/sanityData/page.tsx

import client from '../../../sanityClient';

// Data fetch karne ke liye, aapko async functions ka use karna hoga
const fetchProducts = async () => {
  try {
    const products = await client.fetch(`*[_type == 'product']`);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default async function Home() {
  const products = await fetchProducts();  // Data fetch kar rahe hain

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className='mx-auto ml-2'>
      <h1>Products</h1>
      
      <ul>
      <div className='grid grid-cols-5'>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <img src={product.imagePath} alt={product.name} width="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock Level: {product.stockLevel}</p>
            <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
          </li>
        ))}
        </div>
      </ul>
      
    </div>
  );
}


  
  