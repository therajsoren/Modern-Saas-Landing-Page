import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-950 pt-10 flex flex-col md:flex-row justify-between md:px-20 xl:px-44 p-16 gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-md">Products</div>
        <ul className="text-gray-500/100 text-sm md:text-base space-y-4">
          <li>Features</li>
          <li>Integrations</li>
          <li>Updates</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-md">Company</div>
        <ul className="text-gray-500/100 text-sm md:text-base space-y-4">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Manifesto</li>
          <li>Press</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-md">Resources</div>
        <ul className="text-gray-500/100 text-sm md:text-base space-y-4">
          <li>Examples</li>
          <li>Community</li>
          <li>Guides</li>
          <li>Docs</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-md">Legal</div>
        <ul className="text-gray-500/100 text-sm md:text-base space-y-4">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="space-y-6 col-span-2">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          News-letter
        </h1>
        <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="px-5 py-2.5 rounded-md outline-none flex-1 bg-gray-200 dark:bg-gray-800"
          />
          <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-blue-600 text-white rounded-md flex items-center justify-center">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
