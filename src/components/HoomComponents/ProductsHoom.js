import ProductsComponent from "./ProductsComponent";

const ProductsHoom = () => {
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0]  dark:bg-slate-900  lg:py-6 md:px-4 lg:px-20 " id="store">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl lg:pb-2">
        فروشگاه
      </h2>
      <ProductsComponent
        seeAll="دیدن همه"
        type="discount"
        text=" پیشنهاد شگفت انگیز"
      />
      <ProductsComponent seeAll="دیدن همه" type="all" text="همه محصولات" />
    </section>
  );
};
export default ProductsHoom;
