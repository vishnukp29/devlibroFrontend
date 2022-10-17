import React, { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { blockUserAction, fetchUsersAction, unBlockUserAction } from "../../redux/slices/users/userSlices";


const BlockuserAction = ({ open, setOpen, commentId, value }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

   //data from store
   const users = useSelector(state => state?.users);
   const { usersList, appErr, serverErr, block, unblock } = users;
   //fetch all users
   useEffect(() => {
     dispatch(fetchUsersAction());
   }, [block, unblock]);

    setOpen(false);

  return (
    <>
      {open ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className=" w-full mx-8 md:mx-0 md:w-1/4 my-6  max-w-7xl ">
              <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 ">
                  <h3 className="text-2xl font-semibold text-gray-900 text-center">
                    {" "}
                    Edit your Comment{" "}
                  </h3>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-500 active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => dispatch(blockUserAction(users?.user?._id))}
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

export default BlockuserAction;
