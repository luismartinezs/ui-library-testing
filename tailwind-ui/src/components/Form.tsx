import React from "react";

const Form = () => {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-neutral-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/*  */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-neutral-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Essay
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full sm:text-sm border border-neutral-300 rounded-md"
                        placeholder="Essay"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Fruit
                    </label>
                    <select
                      id="fruit"
                      name="fruit"
                      autoComplete="fruit-name"
                      className="mt-1 block w-full py-2 px-3 border border-neutral-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option selected value="coconut">
                        Coconut
                      </option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Select file
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-neutral-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-neutral-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-neutral-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="sr-only">Is going</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-neutral-700"
                          >
                            Is going
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="start"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Start date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          className="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-neutral-300"
                          type="date"
                          id="start"
                          name="trip-start"
                          value="2018-07-22"
                          min="2018-01-01"
                          max="2018-12-31"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Enter your email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="email"
                          pattern=".+@.\.com"
                          name="email"
                          id="email"
                          className="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-neutral-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="tentacles"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Number of tentacles (10-100)
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="tentacles"
                          min="10"
                          max="100"
                          id="tentacles"
                          className="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-neutral-300"
                        />
                      </div>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="contents text-base font-medium text-neutral-900">
                      Select a maintenance drone
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="huey"
                          name="drone"
                          value="huey"
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="huey"
                          className="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          Huey
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="dewey"
                          name="drone"
                          value="dewey"
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="dewey"
                          className="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          Dewey
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="louie"
                          name="drone"
                          value="louie"
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-neutral-300"
                        />
                        <label
                          htmlFor="louie"
                          className="ml-3 block text-sm font-medium text-neutral-700"
                        >
                          Louie
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-neutral-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
