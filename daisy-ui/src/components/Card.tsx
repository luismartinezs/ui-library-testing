const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">Card title</h3>
        <p>
          Nisi ullamco laboris ullamco amet ex sit nulla nostrud occaecat in
          incididunt ut in. Et cupidatat occaecat sit ipsum ad duis ex dolor
          dolore. Ipsum nostrud nulla proident occaecat do eu excepteur minim
          magna veniam et voluptate dolor. Duis in nulla ex ad. Dolor ad aute
          pariatur laboris. Proident cillum ipsum anim sunt aliqua quis aute
          laborum est anim.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
      <figure>
        <img src="https://source.unsplash.com/random/400x200" alt="random" />
      </figure>
    </div>
  );
};

export default Card;
