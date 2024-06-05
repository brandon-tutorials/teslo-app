import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import {ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector} from "@/components";

interface Props {
  params:{
    slug: string;
  }
}
export default function ({params}: Props) {
  const { slug } = params; 
  const product = initialData.products.find( product => product.slug === slug);

  if (!product){
    notFound();
  }  

  return (
    <div className="mt-5 mb-20  md:grid grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

        {/* Mobile slideshow */}
        <ProductMobileSlideshow title={product.title} images={product.images} className="block md:hidden"/>

        {/* Desktop slideshow*/}
        <ProductSlideshow title={product.title} images={product.images} className="hidden md:block"/>

      </div>

      {/* Detalles */}
      <div className="col-span-1">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product?.price}</p>
        {/* Selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          avaibleSizes={product.sizes}

        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2}/>

        {/* Botton */}

        <button className="btn-primary my-5">
          Agregar al carrito
        </button>
         {/* Descripccion */}
         <h3 className="font-bold text-sm">Descripción</h3>
         <p className="font-light">{product.description}</p>
      </div>

    </div>

  );
}
