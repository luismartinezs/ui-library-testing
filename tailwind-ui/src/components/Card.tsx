const Card = () => {
  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="mt-6 grid">
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://source.unsplash.com/random/400x200"
                alt="random"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Card title
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {" "}
                  Nisi ullamco laboris ullamco amet ex sit nulla nostrud
                  occaecat in incididunt ut in. Et cupidatat occaecat sit ipsum
                  ad duis ex dolor dolore. Ipsum nostrud nulla proident occaecat
                  do eu excepteur minim magna veniam et voluptate dolor. Duis in
                  nulla ex ad. Dolor ad aute pariatur laboris. Proident cillum
                  ipsum anim sunt aliqua quis aute laborum est anim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
