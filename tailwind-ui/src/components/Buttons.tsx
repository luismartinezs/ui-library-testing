const Buttons = () => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
        Primary
      </button>
      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-600 hover:bg-secondary-700 md:py-4 md:text-lg md:px-10">
        Secondary
      </button>
      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10">
        Outline
      </button>
    </div>
  );
};

export default Buttons;
