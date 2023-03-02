const Footer = () => {
  return (
    <footer className="bg-black-500">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <div className="flex items-center space-x-2">
  
              <p className="text-white">Rafael Modesto</p>

              <p className="text-white">{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
