import { searchTermState } from '@/atoms/postsAtom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {CiSearch} from 'react-icons/ci'


const Search = () => {
  const [term, setTerm] = useRecoilState(searchTermState);
  const [isInputVisible, setInputVisible] = useState(false);

  const handleButtonClick = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="flex-none gap-1">
      <div className="form-control">
        {isInputVisible ? (
          <div className='flex'>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input md:w-auto lg:w-[30rem] shadow-custom hover:shadow-custom-hover"
          />
          <button onClick={handleButtonClick} className="btn_icons">
          {/* Add your icon here */}
          <span><CiSearch size={28}/></span>
        </button>
        </div>
        ) : (
          <button onClick={handleButtonClick} className="btn_icons">
            {/* Add your icon here */}
            <span><CiSearch size={28}/></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
