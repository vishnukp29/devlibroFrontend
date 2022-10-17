import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { updateCommentAction } from "../../redux/slices/comments/commentSlices";

const EditComment = ({ open, setOpen, commentId, value }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (value) {
      console.log("123");
      setDescription(value);
    }
  }, [value]);

  // console.log(description,'description is')

  const handleChange = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: commentId,
      description: description,
    };

    dispatch(updateCommentAction(data));
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className=" w-full mx-8 md:mx-0 md:w-1/4 my-6  max-w-7xl ">
              <div className="rounded-lg shadow shadow-slate-500 relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none opacity-90">
                <div className="flex items-start justify-center p-5 ">
                  <h3 className="text-2xl font-semibold text-white text-center">
                    {" "}
                    Edit your Comment{" "}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <input
                    onChange={handleChange}
                    value={description}
                    ref={ref}
                    type="text"
                    name="text"
                    id="text"
                    className="bg-white  appearance-none  mx-4 pl-4  rounded w-full py-2  text-black font-semibold"
                    placeholder="Edit your comment"/>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b mt-4">
                  <button
                    className="text-black bg-gray-50 active:bg-gray-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-black bg-gray-200 active:bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditComment;
