const Navbar = () => {
    return (
        <div className='navbar glassNavBarMaterial text-black'>
            <div className='navbar-start'>
                <a
                    href='/'
                    className='hidden sm:block font-bold  text-3xl neonText font-momCake '
                    // style={{ fontFamily: 'Mom Cake', color: 'black' }}
                >
                    LazyPress
                </a>
            </div>
            <div className='navbar-center flex gap-4'>
                <a href='/aboutus' aria-current='page' className=''>
                    About
                </a>

                <a
                    color='foreground'
                    // href="contactus"
                    href='/contactus'
                    className='text-black'
                >
                    Contact
                </a>

                <a color='foreground' href='/pricing' className=''>
                    Pricing
                </a>
            </div>
            <div className='navbar-end flex gap-6'>
                <button className='btn jellyButtonNavBar'>Sign In</button>
                <button className='btn jellyButtonNavBar'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
