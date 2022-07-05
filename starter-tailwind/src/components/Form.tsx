import React from "react";

const Form = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Essay:
        <textarea />
      </label>
      <select aria-label="Fruit">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
      <label>
        Select file:
        <input type="file" />
      </label>
      <label>
        Is going:
        <input name="isGoing" type="checkbox" />
      </label>
      <label>
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
      <label>
        Enter your email:
        <input type="email" pattern=".+@.\.com" />
      </label>
      <label>
        Number of tentacles (10-100):
        <input type="number" name="tentacles" min="10" max="100" />
      </label>
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label htmlFor="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label htmlFor="louie">Louie</label>
        </div>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
