import React from "react";

function Login() {
  return (
    <div className="container-fluid ">
      <div className="container col-md-9  p-0 mb-5 p-5">
        <div className="col-lg-4 mx-auto ">
          <div className="bg-white shadow p-3 pb-4 loginbox">
            <div className="text-center">
            <img
              height={110}
              src="/images/logo.png"
              alt="My Image"
            />
           
            </div> <hr />
            <div className="text-center fw-light h4">signin </div>
         
            <form className="mt-4">
              <div class="mb-3">
                <input
                  type="email"
                  placeholder="email address"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  placeholder="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn-blue col-lg-12" title="signin">
              <i className="fa-solid fa-check fs-5"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
