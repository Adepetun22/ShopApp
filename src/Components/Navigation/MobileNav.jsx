import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../SearchContext';
import hamburgerIcon from '../../assets/harmburger0.svg';
import cartIcon from '../../assets/cart0.svg';
import frameIcon from '../../assets/frame0.svg';
import arrowDownIcon from '../../assets/Frame054rt.png';
import { useCart } from '../../CartContext';

const MobileNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { cartCount } = useCart();
  const { handleSearch } = useSearch();
  const navigate = useNavigate();
  
  console.log('MobileNav rendered');

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      handleSearch(searchInput);
      navigate('/category');
    }
  };

  // Search icon as data URL (the solid black one with 24x24 dimensions)
  const searchIconSolid = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.7959%2020.2041L17.3437%2015.75C18.6787%2014.0104%2019.3019%2011.8282%2019.087%209.64606C18.8722%207.46389%2017.8353%205.44515%2016.1867%203.99936C14.5382%202.55356%2012.4014%201.78898%2010.2098%201.8607C8.01829%201.93243%205.93607%202.83509%204.38558%204.38558C2.83509%205.93607%201.93243%208.01829%201.8607%2010.2098C1.78898%2012.4014%202.55356%2014.5382%203.99936%2016.1867C5.44515%2017.8353%207.46389%2018.8722%209.64606%2019.087C11.8282%2019.3019%2014.0104%2018.6787%2015.75%2017.3437L20.2059%2021.8006C20.3106%2021.9053%2020.4348%2021.9883%2020.5715%2022.0449C20.7083%2022.1015%2020.8548%2022.1307%2021.0028%2022.1307C21.1508%2022.1307%2021.2973%2022.1015%2021.4341%2022.0449C21.5708%2021.9883%2021.695%2021.9053%2021.7997%2021.8006C21.9043%2021.696%2021.9873%2021.5717%2022.044%2021.435C22.1006%2021.2983%2022.1298%2021.1517%2022.1298%2021.0037C22.1298%2020.8557%2022.1006%2020.7092%2022.044%2020.5725C21.9873%2020.4357%2021.9043%2020.3115%2021.7997%2020.2069L21.7959%2020.2041ZM4.12499%2010.5C4.12499%209.23914%204.49888%208.0066%205.19938%206.95823C5.89987%205.90987%206.89551%205.09277%208.06039%204.61026C9.22527%204.12775%2010.5071%204.00151%2011.7437%204.24749C12.9803%204.49347%2014.1162%205.10063%2015.0078%205.99219C15.8994%206.88375%2016.5065%208.01966%2016.7525%209.25629C16.9985%2010.4929%2016.8722%2011.7747%2016.3897%2012.9396C15.9072%2014.1045%2015.0901%2015.1001%2014.0418%2015.8006C12.9934%2016.5011%2011.7608%2016.875%2010.5%2016.875C8.80977%2016.8733%207.18927%2016.201%205.99411%2015.0059C4.79894%2013.8107%204.12673%2012.1902%204.12499%2010.5Z'%20fill='black'/%3e%3c/svg%3e";

  // Search icon as data URL (the lighter one with 24x22 dimensions and 0.4 fill-opacity)
  const searchIconLight = "data:image/svg+xml,%3csvg%20width='24'%20height='22'%20viewBox='0%200%2024%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.7959%2018.5204L17.3437%2014.4375C18.6787%2012.8429%2019.3019%2010.8426%2019.087%208.84223C18.8722%206.84191%2017.8353%204.9914%2016.1867%203.66609C14.5382%202.34078%2012.4014%201.63991%2010.2098%201.70566C8.01829%201.7714%205.93607%202.59884%204.38558%204.02013C2.83509%205.44141%201.93243%207.35011%201.8607%209.35903C1.78898%2011.368%202.55356%2013.3267%203.99936%2014.8378C5.44515%2016.349%207.46389%2017.2995%209.64606%2017.4964C11.8282%2017.6934%2014.0104%2017.1221%2015.75%2015.8984L20.2059%2019.9839C20.3106%2020.0798%2020.4348%2020.1559%2020.5715%2020.2078C20.7083%2020.2598%2020.8548%2020.2865%2021.0028%2020.2865C21.1508%2020.2865%2021.2973%2020.2598%2021.4341%2020.2078C21.5708%2020.1559%2021.695%2020.0798%2021.7997%2019.9839C21.9043%2019.888%2021.9873%2019.7741%2022.044%2019.6488C22.1006%2019.5234%2022.1298%2019.3891%2022.1298%2019.2534C22.1298%2019.1178%2022.1006%2018.9834%2022.044%2018.8581C21.9873%2018.7328%2021.9043%2018.6189%2021.7997%2018.523L21.7959%2018.5204ZM4.12499%209.625C4.12499%208.46922%204.49888%207.33939%205.19938%206.37839C5.89987%205.41739%206.89551%204.66838%208.06039%204.22608C9.22527%203.78378%2010.5071%203.66806%2011.7437%203.89354C12.9803%204.11902%2014.1162%204.67559%2015.0078%205.49285C15.8994%206.31011%2016.5065%207.35137%2016.7525%208.48494C16.9985%209.61852%2016.8722%2010.7935%2016.3897%2011.8613C15.9072%2012.9291%2015.0901%2013.8418%2014.0418%2014.4839C12.9934%2015.126%2011.7608%2015.4688%2010.5%2015.4688C8.80977%2015.4672%207.18927%2014.851%205.99411%2013.7554C4.79894%2012.6598%204.12673%2011.1744%204.12499%209.625Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-black py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-white text-sm xs:text-xs sm:text-sm">
            <span className="font-normal">Sign up and get 20% off to your first order. </span>
            <span className="font-medium underline cursor-pointer">Sign Up Now</span>
          </div>
          <img src={frameIcon} alt="Close" className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2 items-center justify-center w-full px-8 py-1 bg-yellow-100 md:bg-red-100">
      <div className="w-full flex flex-row items-start justify-between py-1">
        <div className="flex flex-row gap-4 items-center justify-start">
          <img 
            className="w-6 h-6 cursor-pointer" 
            src={hamburgerIcon} 
            alt="Menu" 
            onClick={toggleMenu}
          />
          <div className="text-black text-[25px] font-bold font-integralcf leading-6 flex items-center justify-start">
            SHOP.CO
          </div>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start">
          <img 
            className="w-6 h-6 cursor-pointer" 
            src={searchIconSolid} 
            alt="Search" 
            onClick={() => setShowSearch(!showSearch)}
          />
          <div className="relative">
            <img className="w-6 h-6" src={cartIcon} alt="Cart" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          showSearch 
            ? 'max-h-12 opacity-100 mt-2' 
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        {showSearch && (
          <div className="bg-gray-100 rounded-[3.875rem] p-2 flex flex-row gap-3 items-center justify-start w-full h-8">
            <img className="w-6 h-[22px]" src={searchIconLight} alt="" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none text-black text-opacity-40 text-sm font-normal font-satoshi flex-1 w-full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleSearchSubmit}
            />
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          showMenu 
            ? 'max-h-96 opacity-100 mt-2' 
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        {showMenu && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-full">
            <div className="flex flex-col gap-4">
              {/* Shop */}
              <div className="flex items-center cursor-pointer">
                <span className="text-sm xs:text-xs sm:text-sm text-black">Shop</span>
                <img alt="" className="ml-1 w-4 h-4" src={arrowDownIcon} />
              </div>
              {/* On Sale */}
              <span className="text-sm xs:text-xs sm:text-sm text-black cursor-pointer">On Sale</span>
              {/* New Arrivals */}
              <span className="text-sm xs:text-xs sm:text-sm text-black cursor-pointer">New Arrivals</span>
              {/* Brands */}
              <span className="text-sm xs:text-xs sm:text-sm text-black cursor-pointer">Brands</span>
              {/* Profile */}
              <div className="flex items-center cursor-pointer pt-2 border-t border-gray-200">
                <img 
                  className="w-6 h-6" 
                  src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%201.875C9.99747%201.875%208.0399%202.46882%206.37486%203.58137C4.70981%204.69392%203.41206%206.27523%202.64572%208.12533C1.87939%209.97543%201.67888%2012.0112%202.06955%2013.9753C2.46023%2015.9393%203.42454%2017.7435%204.84055%2019.1595C6.25656%2020.5755%208.06066%2021.5398%2010.0247%2021.9305C11.9888%2022.3211%2014.0246%2022.1206%2015.8747%2021.3543C17.7248%2020.5879%2019.3061%2019.2902%2020.4186%2017.6251C21.5312%2015.9601%2022.125%2014.0025%2022.125%2012C22.122%209.3156%2021.0543%206.74199%2019.1562%204.84383C17.258%202.94567%2014.6844%201.87798%2012%201.875ZM7.45969%2018.4284C7.98195%2017.7143%208.66528%2017.1335%209.45418%2016.7331C10.2431%2016.3327%2011.1153%2016.124%2012%2016.124C12.8847%2016.124%2013.7569%2016.3327%2014.5458%2016.7331C15.3347%2017.1335%2016.0181%2017.7143%2016.5403%2018.4284C15.2134%2019.3695%2013.6268%2019.875%2012%2019.875C10.3732%2019.875%208.78665%2019.3695%207.45969%2018.4284ZM9.375%2011.25C9.375%2010.7308%209.52896%2010.2233%209.8174%209.79163C10.1058%209.35995%2010.5158%209.0235%2010.9955%208.82482C11.4751%208.62614%2012.0029%208.57415%2012.5121%208.67544C13.0213%208.77672%2013.489%209.02673%2013.8562%209.39384C14.2233%209.76096%2014.4733%2010.2287%2014.5746%2010.7379C14.6759%2011.2471%2014.6239%2011.7749%2014.4252%2012.2545C14.2265%2012.7342%2013.8901%2013.1442%2013.4584%2013.4326C13.0267%2013.721%2012.5192%2013.875%2012%2013.875C11.3038%2013.875%2010.6361%2013.5984%2010.1438%2013.1062C9.65157%2012.6139%209.375%2011.9462%209.375%2011.25ZM18.1875%2016.8694C17.4583%2015.9419%2016.5289%2015.1914%2015.4688%2014.6738C16.1444%2013.9896%2016.6026%2013.1208%2016.7858%2012.1769C16.9689%2011.2329%2016.8688%2010.2558%2016.498%209.36861C16.1273%208.4814%2015.5024%207.72364%2014.702%207.19068C13.9017%206.65771%2012.9616%206.37334%2012%206.37334C11.0384%206.37334%2010.0983%206.65771%209.29797%207.19068C8.49762%207.72364%207.87275%208.4814%207.50198%209.36861C7.13121%2010.2558%207.0311%2011.2329%207.21424%2012.1769C7.39739%2013.1208%207.85561%2013.9896%208.53125%2014.6738C7.4711%2015.1914%206.54168%2015.9419%205.8125%2016.8694C4.89661%2015.7083%204.32614%2014.3129%204.1664%2012.8427C4.00665%2011.3725%204.2641%209.88711%204.90925%208.55644C5.55441%207.22578%206.5612%206.10366%207.81439%205.31855C9.06757%204.53343%2010.5165%204.11703%2011.9953%204.11703C13.4741%204.11703%2014.9231%204.53343%2016.1762%205.31855C17.4294%206.10366%2018.4362%207.22578%2019.0814%208.55644C19.7265%209.88711%2019.984%2011.3725%2019.8242%2012.8427C19.6645%2014.3129%2019.094%2015.7083%2018.1781%2016.8694H18.1875Z'%20fill='black'/%3e%3c/svg%3e" 
                  alt="Profile" 
                />
                <span className="text-sm xs:text-xs sm:text-sm text-black ml-2">Profile</span>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default MobileNav;
