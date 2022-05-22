import React from "react";

const Purchase = () => {
  return (
    <section className="p-4 md:p-10">
      <div className="container mx-auto">
        <h3 className="text-3xl">Purchase</h3>
        <div className="purchase-content shadow my-5 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl">Product name goes here</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
              alt=""
              className="w-full h-80 object-contain"
            />
            <ul className="flex flex-wrap items-center gap-3">
              <li>
                Maximum Order Quantity - <strong>100pcs</strong>
              </li>
              <li>
                Available Quantity - <strong>1000pcs</strong>
              </li>
              <li>
                Per Unit Prices - <strong>112$</strong>
              </li>
            </ul>
            <div className="desc my-4 text-sm text-slate-500 font-montserrat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              consequatur perferendis assumenda, harum deserunt, modi voluptatum
              voluptas obcaecati dolor beatae atque praesentium! Voluptatum,
              error voluptates dolores minus odio amet laudantium.
            </div>
          </div>
          <div>
            <form action="">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={"Ashik Mahmud"}
                  readOnly
                  className="bg-base-200 p-3 rounded outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  value={"ashikmahmud@gmail.com"}
                  readOnly
                  className="bg-base-200 p-3 rounded outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="address">Address</label>
                <textarea
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="address"
                  placeholder="Address"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="phone">Order Quantity</label>
                <input
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="phone"
                  placeholder="Phone Number"
                  defaultValue={100}
                />
              </div>
              <div className="my-3">
                <button className="btn btn-primary px-10">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
