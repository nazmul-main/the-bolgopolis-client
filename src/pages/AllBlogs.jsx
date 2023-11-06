

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 py-2 pl-10 pr-14 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          className="absolute right-3 top-2"
          onClick={() => {
            // Handle the search action here
            alert('Search button clicked');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.293 12.293a7 7 0 10-1.414 1.414l4.31 4.31a1 1 0 101.414-1.414l-4.31-4.31zM12 7a5 5 0 100 10 5 5 0 000-10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
