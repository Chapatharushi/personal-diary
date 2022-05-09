/** @format */
import React, { useState } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

function CreateUser() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(evt) {
    const username = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [username]: value,
    });
  }

  // const onSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const res = await axios({
  //       method: "post",
  //       baseURL: "http://localhost:3333",
  //       url: "/api/v1/user/",
  //       data: data,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     console.log(res.data);
  //     alert("Data Saved Successfully!");
  //     window.location.assign("http://localhost:3000");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <div>
  //     <h3>Create a New Account</h3>
  //     <br></br>
  //     <form noValidate onSubmit={(e) => onSubmitForm(e)}>
  //       <div className="form-group">
  //         <label>Username :</label>
  //         <input
  //           type="text"
  //           name="username"
  //           required
  //           className="form-control"
  //           value={data.username}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <br></br>
  //       <div className="form-group">
  //         <label>Password :</label>
  //         <input
  //           type="password"
  //           name="password"
  //           required
  //           className="form-control"
  //           value={data.username}
  //           onChange={handleChange}
  //         />
  //       </div>

  //       <br></br>
  //       <div className="form-group">
  //         <input
  //           type="submit"
  //           value="Create"
  //           className="btn btn-primary"
  //         />
  //       </div>
  //     </form>
  //   </div>
  // );

  //register function
  function register() {
    const { username, password } = data;
    if (username && password) {
      axios
        .post("http://localhost:3333/api/v1/user/", data)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }

    return (
      <>
        <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Create a new account
          </div>
          <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <link
              href="#"
              target="_blank"
              class="text-sm text-blue-500 underline hover:text-blue-700"
            >
              Sign in
            </link>
          </span>
          <div class="p-6 mt-8">
            <form action="#">
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="name"
                    value={data.username}
                    onChange={handleChange}
                    placeholder="UserName" />
                </div>
              </div>
              {/* <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div> */}
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="password"
                    id="create-account-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="password" />
                </div>
              </div>
              <div class="flex w-full my-4">
                <button
                  type="submit"
                  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateUser;
