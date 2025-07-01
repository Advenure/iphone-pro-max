// components/Footer.tsx

import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">cyber</h2>
          <p className="text-sm text-gray-400">
            We are a minimalist interior design firm located in Paris. Our boutique selects
            offers more than furniture.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-gray-300" />
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Returns program</Link></li>
            <li><Link href="#">Gift cards</Link></li>
            <li><Link href="#">Credit and payment</Link></li>
            <li><Link href="#">Service contracts</Link></li>
            <li><Link href="#">Non-retail account</Link></li>
            <li><Link href="#">Payment</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Assistance to the buyer</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">FAQ all online</Link></li>
            <li><Link href="#">Terms of delivery</Link></li>
            <li><Link href="#">Exchange or return of goods</Link></li>
            <li><Link href="#">Guarantees</Link></li>
            <li><Link href="#">Frequently asked questions</Link></li>
            <li><Link href="#">Terms of use of the site</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
