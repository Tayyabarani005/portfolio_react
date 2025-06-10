import '../index.css'
function Header() {
    return (
        <>
<div id="navbar" className="fixed top-0 left-0 w-full text-white flex justify-around p-2 text-2xl">
                <a href="#home" className="nav-link p-3 font-bold hover:text-gray-500">Home</a>
                <a href="#about" className="nav-link p-3 font-bold hover:text-gray-500">About</a>
                <a href="#resume" className="nav-link p-3 font-bold hover:text-gray-500">Resume</a>
                <a href="#portfolio" className="nav-link p-3 font-bold hover:text-gray-500">Portfolio</a>
            </div>
        </>
    )
} 
export default Header;