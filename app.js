import React from 'react';

// Section Component - Reusable component for each car model/product section
const Section = ({ title, description, backgroundImage, leftButtonText, rightButtonText, showDownArrow }) => {
  return (
    <div
      className="relative h-screen w-screen flex flex-col items-center justify-between text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Text Content */}
      <div className="pt-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-base text-gray-700 mt-1">{description}</p>}
      </div>

      {/* Buttons and Down Arrow */}
      <div className="flex flex-col items-center justify-center pb-20">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button className="bg-gray-800 text-white rounded-full px-12 py-3 text-sm font-medium opacity-85 hover:opacity-100 transition-opacity duration-300">
            {leftButtonText}
          </button>
          {rightButtonText && (
            <button className="bg-gray-200 text-gray-800 rounded-full px-12 py-3 text-sm font-medium opacity-85 hover:opacity-100 transition-opacity duration-300">
              {rightButtonText}
            </button>
          )}
        </div>
        {showDownArrow && (
          <div className="animate-bounce">
            {/* Down arrow SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

// App Component - Main container for the Tesla clone
const App = () => {
  return (
    <div className="font-inter"> {/* Applying Inter font globally */}
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Navigation Bar (simplified) */}
      <header className="fixed top-0 left-0 w-full z-10 p-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-900">TESLA</a>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-600">Model S</a>
          <a href="#" className="hover:text-gray-600">Model 3</a>
          <a href="#" className="hover:text-gray-600">Model X</a>
          <a href="#" className="hover:text-gray-600">Model Y</a>
          <a href="#" className="hover:text-gray-600">Solar Roof</a>
          <a href="#" className="hover:text-gray-600">Solar Panels</a>
        </nav>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a href="#" className="hidden md:block hover:text-gray-600">Shop</a>
          <a href="#" className="hidden md:block hover:text-gray-600">Account</a>
          <a href="#" className="hover:text-gray-600">Menu</a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <Section
          title="Model 3"
          description="Leasing starting at $399/month"
          backgroundImage="https://placehold.co/1920x1080/333333/FFFFFF?text=Model+3"
          leftButtonText="Custom Order"
          rightButtonText="Demo Drive"
          showDownArrow={true} // Show down arrow only for the first section
        />
        <Section
          title="Model Y"
          description=""
          backgroundImage="https://placehold.co/1920x1080/999999/000000?text=Model+Y"
          leftButtonText="Custom Order"
          rightButtonText="Demo Drive"
        />
        <Section
          title="Model S"
          description=""
          backgroundImage="https://placehold.co/1920x1080/000000/FFFFFF?text=Model+S"
          leftButtonText="Custom Order"
          rightButtonText="Demo Drive"
        />
        <Section
          title="Model X"
          description=""
          backgroundImage="https://placehold.co/1920x1080/666666/FFFFFF?text=Model+X"
          leftButtonText="Custom Order"
          rightButtonText="Demo Drive"
        />
        <Section
          title="Cybertruck"
          description=""
          backgroundImage="https://placehold.co/1920x1080/CCCCCC/000000?text=Cybertruck"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
        />
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImage="https://placehold.co/1920x1080/AAAAAA/000000?text=Solar+Panels"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
        />
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImage="https://placehold.co/1920x1080/DDDDDD/000000?text=Solar+Roof"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImage="https://placehold.co/1920x1080/EEEEEE/000000?text=Accessories"
          leftButtonText="Shop Now"
        />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-600 bg-black text-white">
        <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <li><a href="#" className="hover:underline">Tesla © 2025</a></li>
          <li><a href="#" className="hover:underline">Privacy & Legal</a></li>
          <li><a href="#" className="hover:underline">Vehicle Recalls</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">News</a></li>
          <li><a href="#" className="hover:underline">Engage</a></li>
          <li><a href="#" className="hover:underline">Locations</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
