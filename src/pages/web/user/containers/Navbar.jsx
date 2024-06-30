import React from "react";
import checkAuth from "../../../../app/auth.js";
import { LoginButton } from "./LoginButton.jsx";
import { AvatarButton } from "./AvatarButton.jsx";

const token = checkAuth();

export default function Navbar() {
  return (
    <>
      <div className="">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Calo!</a>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            {token === null ? <LoginButton /> : <AvatarButton />}
          </div>
        </div>
      </div>
    </>
  );
}
