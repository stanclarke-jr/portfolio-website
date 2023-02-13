import { brands } from '../data';

const Brands = () => {
  return (
    <section className="flex min-h-[146px] items-center bg-tertiary">
      <div className="container mx-auto flex flex-wrap items-center justify-evenly md:justify-center lg:justify-between">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
