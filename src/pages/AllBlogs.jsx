

const SearchInput = () => {

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12">
      <div>
        <form className="flex flex-col md:flex-row gap-3">
          <div className="flex">
            <input type="text" placeholder="Search for the tool you like"
              className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#555843] focus:outline-none focus:border-[#555843]"
            />
            <button type="submit" className="bg-[#555843] text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
          </div>
          <select id="pricingType" name="pricingType"
            className="w-full h-10 border-2 border-[#555843] focus:outline-none focus:border-[#555843] text-[#555843] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
            <option value="All" selected="">All Category</option>
            <option value="Cooking" >Cooking</option>
            <option value="Travel">Travel</option>
            <option value="Technology">Technology</option>
            <option value="Fitness">Fitness</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Gardening">Gardening</option>
            <option value="Finance">Finance</option>
            <option value="Art">Art</option>
            <option value="Science">Science</option>
            <option value="Fashion">Fashion</option>
          </select>
        </form>
      </div>

    </div>
  );
}


export default SearchInput;
