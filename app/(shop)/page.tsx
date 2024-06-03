import ProductGrid from "@/components/productos/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;


export default function () {
  return (  
  <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2"/>
      <ProductGrid products={products}/>
  </>

  );
}
