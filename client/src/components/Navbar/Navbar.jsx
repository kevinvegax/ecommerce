import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Navbar() {

	const { data } = useFetch(
		`/categories`
	  );
	
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to='/'><img src="/img/logo2.png" alt=""/></Link>
			<nav ref={navRef}>
				{data?.map((item) => (
					<div key={item.id}>
						<Link to={'products/' + item.id} onClick={showNavbar}>{item.attributes.title}</Link>
					</div>
				))}
				{/* <Link to='products/2'>Hombres</Link> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<CloseIcon />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<MenuIcon />
			</button>
		</header>
	);
}

export default Navbar;