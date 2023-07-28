import React from "react";

const AllProduct = ({ allProducts }) => {
  //   console.log(allProducts);
  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold my-4">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        {allProducts &&
          allProducts?.map((product) => {
            const { title, img, price, status, category, rating } = product;
            return (
              <>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                  <figure>
                    <img src={img} width="auto" height="250px" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <p>{status}</p>
                    <h2 className="card-title">
                      {title}
                      <div className="badge badge-secondary">{price}৳</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                      <div className="badge badge-outline">
                        Category: {category}
                      </div>
                      <br />
                      <div className="badge badge-outline">
                        Rating: {rating}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default AllProduct;

/* 



*/
