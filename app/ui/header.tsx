import Link from 'next/link';
// import { HiOutlineUserCircle } from 'react-icons/hi';
// import { BsCartFill } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutRedux } from '../redux/userSlice';
// import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Header = () => {
  //   const [showMenu, setShowMenu] = useState(false);
  //   const userData = useSelector((state) => state.user);
  //   const dispatch = useDispatch();

  //   const handleShowMenu = () => {
  //     setShowMenu((preve) => !preve);
  //   };
  //   const handleLogout = () => {
  //     dispatch(logoutRedux());
  //     toast('Logout successfully');
  //     localStorage.removeItem('user');
  //   };

  //   const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className="fixed z-50 h-16 w-full bg-white px-2 shadow-md md:px-4">
      {/* desktop */}

      <div className="flex h-full items-center justify-between">
        <Link href="/">
          <div className="h-10">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              className="h-full"
              alt=""
            />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="hidden gap-4 text-base md:flex md:gap-6 md:text-lg">
            <Link href="/">Home</Link>
            {/* <Link href={"menu/63f0fdbb3bcc2f97fa53d25d"}>Menu</Link> */}
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          {/* <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div> */}
          {/* <div className=" text-slate-600" onClick={handleShowMenu}> */}
          <div className=" text-slate-600">
            <div className="h-8 w-8 cursor-pointer overflow-hidden rounded-full text-3xl drop-shadow-md">
              {/* {userData.image ? (
                <Image src={userData.image} alt='' className='h-full w-full' />
              ) : (
                <HiOutlineUserCircle />
              )} */}
            </div>
            {/* {showMenu && ( */}
            <div className="absolute right-2 flex min-w-[120px]  flex-col bg-white py-2 text-left shadow drop-shadow-md">
              {/* {userData?.email && (
                  <>
                    <Link
                      href={'all-books'}
                      className='whitespace-nowrap cursor-pointer px-2 py-2'
                    >
                      Books List
                    </Link>
                    <Link
                      href={'all-authors'}
                      className='whitespace-nowrap cursor-pointer px-2 py-2'
                    >
                      Authors Listing
                    </Link>
                    <Link
                      href={'all-categories'}
                      className='whitespace-nowrap cursor-pointer px-2 py-2'
                    >
                      Categories List
                    </Link>
                    <Link
                      href={'all-publishers'}
                      className='whitespace-nowrap cursor-pointer px-2 py-2'
                    >
                      Publishers Listing
                    </Link>
                    <Link
                      href={'all-cities'}
                      className='whitespace-nowrap cursor-pointer px-2 py-2'
                    >
                      Cities Listing
                    </Link>
                  </>
                )} */}

              {/* {userData?.email ? (
                  <p
                    className='cursor-pointer text-white px-2 py-2 bg-red-500'
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){' '}
                  </p>
                ) : (
                  <Link
                    href={'login'}
                    className='whitespace-nowrap cursor-pointer px-2'
                  >
                    Login
                  </Link>
                )} */}
              <nav className="flex flex-col text-base md:hidden md:text-lg">
                <Link href="/" className="px-2 py-1">
                  Home
                </Link>
                <Link
                  href={'menu/63f0fdbb3bcc2f97fa53d25d'}
                  className="px-2 py-1"
                >
                  Menu
                </Link>
                <Link href={'about'} className="px-2 py-1">
                  About
                </Link>
                <Link href={'contact'} className="px-2 py-1">
                  Contact
                </Link>
              </nav>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
