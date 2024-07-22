import React from "react";
import SparklesText from "../../../../../components/magicui/sparkles-text";
import AnimatedGridPattern from "../../../../../components/magicui/animated-grid-pattern";
import { cn } from "../../../../../../lib/utils";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
export default function InternalPage() {
  return (
    <>
      <div className="flex justify-center">
        <form className="mt-9 w-2/3 bg-[#2c2c2c]  mb-20 p-12 rounded-2xl">
          <div className="space-y-12">
            <div className="border-b border-b-white border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-white text-center">Form Akun</h2>
              <div className="mt-3 col-span-full">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon aria-hidden="true" className="h-24 w-24 text-gray-300" />
                  <button
                    type="button"
                    className="rounded-md bg-[#6d6b6b80] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="konfirmasi-password" className="block text-sm font-medium leading-6 text-white">
                  Konfirmasi Password
                </label>
                <div className="mt-2">
                  <input
                    id="konfirmasi-password"
                    name="konfirmasi-password"
                    type="password"
                    autoComplete="konfirmasi-password"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label htmlFor="wallet" className="block text-sm font-medium leading-6 text-white">
                  Wallet
                </label>
                <div className="mt-2">
                  <input
                    id="wallet"
                    name="wallet"
                    type="text"
                    autoComplete="wallet"
                    className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-b border-b-white border-gray-900/10 pb-12 gap-y-2">
            <h2 className="text-2xl font-semibold leading-3 text-white text-center">Form Partner Information</h2>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}
            
            <div className="col-span-full">
              <label htmlFor="deskripsi" className="block text-sm font-medium leading-6 text-white">
                Deskripsi
              </label>
              <div className="mt-2">
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  defaultValue={''}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Tulis deskripsi mengenai vendor</p> */}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="kota" className="block text-sm font-medium leading-6 text-white">
                Kota vendor
              </label>
              <div className="mt-2">
                <select
                  id="kota"
                  name="kota"
                  autoComplete="kota"
                  className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option>Jember</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="akunIG" className="block text-sm font-medium leading-6 text-white">
                link akun Instagram
              </label>
              <div className="mt-2">
                <input
                  id="akunIG"
                  name="akunIG"
                  type="text"
                  autoComplete="akunIG"
                  placeholder="example : https://www.instagram.com/calo.project/"
                  className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-white">
                link Website vendor
              </label>
              <div className="mt-2">
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="website"
                  placeholder="example : https://kandang.divotahta.com/"
                  className="block w-full rounded-md border-0 py-1.5 bg-[#6d6b6b80] text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
          </div>
        </div>
            
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-white">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
