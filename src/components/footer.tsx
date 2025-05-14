
import { Link } from "react-router-dom"
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-wider text-white">URBAN WEAR</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Premium streetwear for those who want to make a statement with their style.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/new" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/men" className="text-gray-400 hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-gray-400 hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-400 hover:text-white transition-colors">
                  Our Stores
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contact@urbanwear.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 Urban Wear. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
