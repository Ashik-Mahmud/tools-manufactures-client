import React from "react";
import { BiSend } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  return (
    <div className="blog-details py-10">
      <div className="container mx-auto shadow  rounded">
        <div className="card p-4 md:p-10">
          <div className="card-body">
            <div className="title flex items-center gap-3 my-3">
              <MdArrowBackIos
                onClick={() => navigate(-1)}
                className="cursor-pointer"
              />
              <h2 className="text-2xl font-semibold">Blogs Title goes here</h2>
            </div>
            <div className="image h-52 w-full rounded-lg bg-base-300 grid place-items-center">
              Image Not Loaded
            </div>
            <ul className="meta flex items-center gap-4 my-2 flex-wrap">
              <li>
                Category - <strong>Tech</strong>
              </li>
              <li>
                CreateAt - <strong>23 Jan, 2022</strong>
              </li>
              <li>
                Author - <strong>Ashik Mahmud</strong>
              </li>
            </ul>
            <p className="desc text-slate-500 leading-7 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              dolorem maxime dolore? Soluta quam distinctio, quaerat itaque
              deserunt facilis eveniet tempora pariatur recusandae quasi
              reiciendis earum obcaecati quis, officiis provident laudantium
              commodi tenetur reprehenderit illo inventore, necessitatibus
              repellat molestias fugit non. Doloribus sint quibusdam, modi
              nostrum ipsum ex atque repudiandae, explicabo esse sunt eos.
              Eligendi unde rerum veniam sapiente pariatur vitae ipsum
              repudiandae quisquam! Itaque, nam incidunt adipisci quisquam
              repudiandae culpa laudantium ab minima non architecto laboriosam
              veniam aliquid eius voluptatum qui fuga minus aut! Quod aspernatur
              similique dolorem facere? Eligendi voluptates ipsam ipsa tempora
              excepturi minus vero quae fuga soluta possimus animi, atque
              molestias alias explicabo deserunt. Provident perferendis facilis
              a eius dolore possimus, iure autem doloremque voluptatum dolorem,
              expedita numquam atque sed eveniet quos aperiam blanditiis harum
              doloribus eaque, eligendi minima voluptate itaque porro?
              Architecto, velit. Nam quos repudiandae laborum aliquid harum sunt
              quisquam atque ducimus perspiciatis doloribus esse, vero
              accusantium ipsam itaque hic consequatur asperiores accusamus
              necessitatibus saepe vel eligendi officia? Quibusdam rem neque
              itaque molestiae, cumque sequi unde molestias nesciunt, temporibus
              ut voluptatibus illum maxime ducimus tenetur at perspiciatis
              aliquam minima, quas libero. Doloremque rem illo est suscipit
              molestias aut dicta. Perspiciatis cum pariatur exercitationem,
              provident, a ab sapiente sunt aut magni in voluptatibus, nemo
              repudiandae ad! Minus, similique quidem commodi consectetur quam
              voluptatum quos dolores doloremque itaque soluta facere eaque
              voluptas ipsum magni labore amet dicta veritatis cumque ab! Nulla
              magnam, inventore amet culpa totam facere corporis, quibusdam, et
              cupiditate rerum consequuntur. Culpa ex corporis facere recusandae
              in, distinctio nobis laboriosam rerum tenetur et magnam iste ipsum
              nemo consequatur minus tempora non cum optio doloribus.
              Repellendus velit nam porro deleniti dolor, facilis obcaecati? Est
              veritatis dolores, nemo illum unde, aut tempora nam at, eos dolore
              delectus recusandae natus blanditiis autem! Earum ab consectetur
              enim rem.
            </p>
          </div>
          <div className="card-footer">
            <hr />
            <div className="comments-area pt-5">
              <h3 className="text-xl font-semibold">Comments</h3>
              <div className="commentBox flex items-stretch border my-5 p-2">
                <input
                  type="text"
                  placeholder="Type Comment..."
                  className="w-full p-5 outline-none"
                />
                <button className="bg-base-300 px-6">
                  <BiSend />
                </button>
              </div>

              <div className="user-comments flex flex-col gap-4">
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
