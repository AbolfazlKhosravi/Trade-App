import SwiperProducts from "./SwiperProducts";

const ProductsComponent = ({productsData, seeAll, text, type,favoritesData}) => {
  return (
    <article className="mt-7 px-1">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-slate-700 dark:text-slate-300 text-[1.1rem] font-bold lg:text-[1.15rem]">
          {text}
        </h3>
        <p className="opacity-70 text-[.75rem] text-slate-600 dark:text-slate-200">
          {seeAll}
        </p>
      </div>
      <SwiperProducts productsData={productsData} type={type} favoritesData={favoritesData}/>
    </article>
  );
};

export default ProductsComponent;