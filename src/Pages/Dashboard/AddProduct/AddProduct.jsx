import React from "react";

const AddProduct = () => {
  return (
    <div className="p-5">
      <h3 className="text-2xl font-semibold mb-2">Add Product</h3>
      <form action="" className="shadow rounded bg-base-100 p-5 md:p-10">
        <div className="my-2">
          <label htmlFor="name" className="my-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <div className="my-2 w-full">
            <label htmlFor="availableProduct" className="my-2">
              Available Product Quantity
            </label>
            <input
              type="text"
              placeholder="Available Product Quantity"
              className="input input-bordered w-full"
              id="availableProduct"
            />
          </div>
          <div className="my-2 w-full">
            <label htmlFor="maximum" className="my-2">
              Maximum Product Quantity
            </label>
            <input
              type="text"
              placeholder="Maximum Product Quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="my-2 w-full">
            <label htmlFor="name" className="my-2">
              Product Per Price
            </label>
            <input
              type="text"
              placeholder="Product Per Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2">
            Product Description
          </label>
          <textarea
            name=""
            id="desc"
            className="textarea textarea-bordered w-full my-1"
            cols="30"
            placeholder="Product Description"
            rows="4"
          ></textarea>
        </div>
        <div>
          <input type="file" name="file" className="block" id="file" />
        </div>
        <div className="my-3 text-right">
          <button className="btn btn-primary">Save Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
