import { useState, FormEvent, ChangeEvent } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchFieldProps {
  onSearch: (query: string) => void; // Function that takes a string and returns nothing
  placeholder?: string; // Optional string prop
}

function SearchField({
  onSearch,
  placeholder = 'Search...',
}: SearchFieldProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full py-2 pl-10 pr-4 border rounded-lg"
        />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CiSearch className="w-5 h-5 text-gray-400" />
      </div>
      <button
        type="submit"
        className="absolute px-4 py-1 text-white -translate-y-1/2 bg-blue-500 rounded right-2 top-1/2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchField;
