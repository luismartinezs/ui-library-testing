import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Essay</span>
          <textarea
            className="textarea textarea-primary h-24"
            placeholder="Bio"
          />
        </label>
      </div>
      <select
        aria-label="Fruit"
        className="select select-bordered w-full max-w-xs block"
      >
        <option disabled selected>
          Fruit
        </option>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
      <label className="block w-full">
        Select file:
        <input type="file" />
      </label>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Is going:</span>
          <input
            name="isGoing"
            type="checkbox"
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <label className="block w-full">
        Start date:
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </label>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter your email</span>
          <input
            type="email"
            placeholder="Your email here"
            pattern=".+@.\.com"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Number of tentacles (10-100)</span>
          <input
            type="number"
            min="10"
            max="100"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
      </div>
      <fieldset className="max-w-sm">
        <legend>Select a maintenance drone:</legend>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Huey</span>
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              className="radio radio-red checked:bg-red-500"
              checked
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Dewey</span>
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              className="radio radio-blue checked:bg-blue-500"
              checked
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Louie</span>
            <input
              type="radio"
              id="louie"
              name="drone"
              value="louie"
              className="radio radio-green checked:bg-green-500"
              checked
            />
          </label>
        </div>
      </fieldset>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
};

export default Form;
