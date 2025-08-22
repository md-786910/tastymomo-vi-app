
export const TastyMomoInvestment = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TastyMomo Community Investment Opportunity</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: 'Inter', sans-serif;\n            background-image: linear-gradient(to bottom right, #F8F9FA, #E9ECEF);\n        }\n        .chart-container {\n            position: relative;\n            width: 100%;\n            max-width: 600px;\n            margin-left: auto;\n            margin-right: auto;\n            height: 300px;\n            max-height: 400px;\n        }\n        @media (min-width: 768px) {\n            .chart-container {\n                height: 350px;\n            }\n        }\n        .stat-card h3 {\n            line-height: 1.2;\n        }\n        @keyframes pulse-float {\n            0%, 100% {\n                transform: translateY(0);\n                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n            }\n            50% {\n                transform: translateY(-8px);\n                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n            }\n        }\n        .animate-pulse-float {\n            animation: pulse-float 4s ease-in-out infinite;\n        }\n        .card-hover:hover {\n            transform: translateY(-4px);\n            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n        }\n    "
    }}
  />
  <div className="container mx-auto p-4 md:p-8 max-w-6xl">
    <header className="text-center mb-12">
      <h1
        className="text-4xl md:text-5xl font-black mb-2"
        style={{ color: "#073B4C" }}
      >
        🍲 Invest in TastyMomo
      </h1>
      <p
        className="text-lg md:text-xl font-semibold"
        style={{ color: "#118AB2" }}
      >
        Muzaffarpur’s Fastest Growing Food Brand is Now Your Investment
        Opportunity
      </p>
    </header>
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="md:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-center text-center animate-pulse-float"
        style={{ borderLeft: "8px solid #FF6B6B" }}
      >
        <div className="md:mr-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#073B4C" }}>
            The Headline Opportunity
          </h2>
          <p className="text-gray-600 max-w-md">
            We offer a transparent, high-return investment model designed for
            our community. Your growth is our growth.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <p
            className="text-7xl md:text-8xl font-black"
            style={{ color: "#FF6B6B" }}
          >
            ~85%
          </p>
          <p className="text-xl font-bold" style={{ color: "#073B4C" }}>
            Return on Investment in 6 Months
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
        <h2
          className="text-2xl font-bold text-center mb-4"
          style={{ color: "#073B4C" }}
        >
          Investment vs. Guaranteed Return
        </h2>
        <p className="text-center text-gray-600 mb-6">
          This chart illustrates the powerful return you receive in just six
          months. We've structured this for a clear and profitable outcome for
          our community partners.
        </p>
        <div className="chart-container">
          <canvas id="roiChart" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
        <h2
          className="text-2xl font-bold text-center mb-4"
          style={{ color: "#073B4C" }}
        >
          Projected Monthly Revenue Growth
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Our model is proven and scalable. This projection shows the revenue
          increase as we expand from our current operations to six carts by the
          end of the year.
        </p>
        <div className="chart-container">
          <canvas id="growthChart" />
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="stat-card bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
          <h3 className="text-4xl font-extrabold" style={{ color: "#06D6A0" }}>
            ₹5-7L
          </h3>
          <p className="font-semibold" style={{ color: "#073B4C" }}>
            Monthly Revenue Per Cart
          </p>
        </div>
        <div className="stat-card bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
          <h3 className="text-4xl font-extrabold" style={{ color: "#06D6A0" }}>
            6
          </h3>
          <p className="font-semibold" style={{ color: "#073B4C" }}>
            Target Carts By Year-End
          </p>
        </div>
        <div className="stat-card bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
          <h3 className="text-4xl font-extrabold" style={{ color: "#06D6A0" }}>
            ₹100 Cr
          </h3>
          <p className="font-semibold" style={{ color: "#073B4C" }}>
            Brand Vision in 2 Years
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
        <h2
          className="text-2xl font-bold text-center mb-4"
          style={{ color: "#073B4C" }}
        >
          How We'll Use The ₹10 Lakhs
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Every rupee is strategically allocated to fuel our growth, ensuring we
          hit our targets and deliver returns. Your investment directly builds
          the future of TastyMomo.
        </p>
        <div className="chart-container h-80 md:h-96">
          <canvas id="fundsChart" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform card-hover">
        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#073B4C" }}
        >
          Our Roadmap to Success
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded" />
          <div className="mb-8 relative">
            <div
              className="absolute -left-[38px] top-1 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#06D6A0", border: "4px solid white" }}
            />
            <h3 className="font-bold text-lg" style={{ color: "#073B4C" }}>
              Humble Beginnings
            </h3>
            <p className="text-gray-600">
              Started with a single, successful momo cart.
            </p>
          </div>
          <div className="mb-8 relative">
            <div
              className="absolute -left-[38px] top-1 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#FFD166", border: "4px solid white" }}
            />
            <h3 className="font-bold text-lg" style={{ color: "#073B4C" }}>
              Current Phase: Expansion
            </h3>
            <p className="text-gray-600">
              Operating multiple carts with high monthly revenue.
            </p>
          </div>
          <div className="mb-8 relative">
            <div
              className="absolute -left-[38px] top-1 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#118AB2", border: "4px solid white" }}
            />
            <h3 className="font-bold text-lg" style={{ color: "#073B4C" }}>
              Year-End 2025: Scale Up
            </h3>
            <p className="text-gray-600">
              Launch 6 total operating carts across Muzaffarpur.
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute -left-[38px] top-1 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#FF6B6B", border: "4px solid white" }}
            />
            <h3 className="font-bold text-lg" style={{ color: "#073B4C" }}>
              The Next 2 Years: National Brand
            </h3>
            <p className="text-gray-600">
              Expand to multiple cities, building a ₹100 Cr brand.
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:col-span-2 bg-white rounded-lg shadow-md p-8 transition-all duration-300 transform card-hover"
        style={{ borderTop: "8px solid #118AB2" }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#073B4C" }}
        >
          🤝 How to Join Our Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-bold" style={{ color: "#073B4C" }}>
              Min. Investment
            </h3>
            <p className="text-gray-600">₹10,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-2">📄</div>
            <h3 className="font-bold" style={{ color: "#073B4C" }}>
              Simple Agreement
            </h3>
            <p className="text-gray-600">Transparent &amp; clear terms.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-2">📈</div>
            <h3 className="font-bold" style={{ color: "#073B4C" }}>
              Regular Updates
            </h3>
            <p className="text-gray-600">Monthly progress reports.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-2">🏦</div>
            <h3 className="font-bold" style={{ color: "#073B4C" }}>
              Guaranteed Buyback
            </h3>
            <p className="text-gray-600">Return + Profit in 6 months.</p>
          </div>
        </div>
      </div>
    </main>
    <footer className="text-center mt-12 py-8 border-t-2 border-gray-200">
      <h2 className="text-3xl font-black mb-2" style={{ color: "#073B4C" }}>
        Be a Part of Something Big
      </h2>
      <p className="text-lg mb-4" style={{ color: "#118AB2" }}>
        This is more than an investment; it's building a national brand from our
        city, for our country.
      </p>
      <button
        className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
        style={{ backgroundColor: "#06D6A0" }}
      >
        📞 Contact Us to Become an Investor Partner!
      </button>
    </footer>
  </div>
</>
  )
}
