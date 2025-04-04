const Footer = () => {
  return (
    <footer className="p-6 font-lemon-milk text-white">
      <div className="flex justify-evenly gap-12">
        <nav>
          <h4 className="hover:text-pink-lavender font-bold">PRODUCTS</h4>
          <ul>
            <li className="hover:text-pink-lavender">Website Templates</li>
            <li className="hover:text-pink-lavender">Websites</li>
          </ul>
        </nav>
        <nav>
          <h4 className="hover:text-pink-lavender font-bold">
            Website Examples
          </h4>
          <ul>
            <li className="hover:text-pink-lavender">Food-blog</li>
            <li className="hover:text-pink-lavender">Travel-blog</li>
          </ul>
        </nav>
        <nav>
          <h4 className="hover:text-pink-lavender font-bold">COMPANY</h4>
          <ul>
            <li className="hover:text-pink-lavender">About</li>
          </ul>
        </nav>
      </div>
      <p className="flex items-center justify-center gap-1 p-6">
        © 2025 LazyPress | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
