const Navbar = () => {
    return(
        <div className="w-screen h-20 p-4 fixed z-10 grid grid-cols-2">
            <div>Logo</div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-3/4 grid grid-cols-4">
                    <div>Home</div>
                    <div>About us</div>
                    <div>Contact Us</div>
                    <div>Product</div>
                </div>
                <div><button>Contact Us</button></div>
            </div>
        </div>
    )
}
export default Navbar;
