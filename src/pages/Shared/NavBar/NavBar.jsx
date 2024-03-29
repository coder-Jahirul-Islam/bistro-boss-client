import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className="justify-center"><Link to='/'>Home</Link></li>
        <li className="justify-center"><Link to='/menu'>Our Menu</Link></li>
        <li className="justify-center"><Link to='/order/salad'>Order Food</Link></li>
        <li className="justify-center"><Link to='secret'>Secret</Link></li>
        <li className="justify-center">
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>

                <li className="justify-center"><button onClick={handleLogOut} className="btn btn-xs mt-1 btn-ghost capitalize">LogOut</button></li>

            </> : <>
                <li className="justify-center"><Link to='/login'>Login</Link></li>
            </>
        }

    </>
    return (
        <div className="navbar fixed z-50 bg-opacity-40 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Bistro Boss Restaurant</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};


// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error))
//     }

//     const navOptions = (
//         <ul className="nav-items">
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/menu'>Our Menu</Link></li>
//             <li><Link to='/order/salad'>Order Food</Link></li>
//             <li><Link to='secret'>Secret</Link></li>
//             <li>
//                 <Link to='/'>
//                     <button className="btn gap-2">
//                         <FaShoppingCart></FaShoppingCart>
//                         <div className="badge badge-secondary">+99</div>
//                     </button>
//                 </Link>
//             </li>
//             {user ? (
//                 <li>
//                     <button onClick={handleLogOut} className="btn btn-xs mt-1 btn-ghost capitalize">LogOut</button>
//                 </li>
//             ) : (
//                 <li><Link to='/login'>Login</Link></li>
//             )}
//         </ul>
//     );

//     return (
//         <div className="navbar fixed z-50 bg-opacity-40 bg-black text-white max-w-screen-xl">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <Link to='/' className="btn btn-ghost normal-case text-xl">Bistro Boss Restaurant</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 {navOptions}
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Get Started</a>
//             </div>
//         </div>
//     );
// };


export default NavBar;