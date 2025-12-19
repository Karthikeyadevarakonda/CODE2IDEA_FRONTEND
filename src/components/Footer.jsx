import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand / About */}
        <div className="relative">
          <img
            src={logo}
            alt="CODE2IDEA Logo"
            className="absolute -top-10 -left-10 h-44 w-auto object-contain"
          />

          {/* Spacer so text doesn't overlap */}
          <div className="pt-28">
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              CODE2IDEA is a student innovation platform for submitting,
              evaluating, ranking, and showcasing ideas in contests and
              hackathons.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contests" className="hover:text-white transition">
                Contests
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-medium text-white">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <span className="text-gray-300">code2idea@college.edu</span>
            </li>
            <li className="hover:text-white cursor-pointer transition">
              GitHub
            </li>
            <li className="hover:text-white cursor-pointer transition">
              LinkedIn
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Twitter
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CODE2IDEA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
