import { ProductCard } from "@/feature/product/components/product-card";
import { Loader } from "@/components/loader";
import { useGetProductsQuery } from "@/redux/services/all-services";
import "@/styles/productsPage.css";

export const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  // LOADING
  if (isLoading) {
    return <Loader text="Loading products..." />;
  }

  // ERROR FROM BACKEND / NETWORK
  if (error) {
    return (
      <div className="state-container">
        <h2 className="state-title">Something went wrong</h2>
        <p className="state-text">
          We couldn’t load products right now. Please try again later.
        </p>
      </div>
    );
  }

  // NO DATA OR EMPTY ARRAY
  if (!products || products.length === 0) {
    return (
      <div className="state-container">
        <h2 className="state-title">No products found</h2>
        <p className="state-text">
          There are no products available at the moment.
        </p>
      </div>
    );
  }

  // SUCCESS
  return (
    <main>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
