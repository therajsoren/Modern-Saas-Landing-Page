
const Footer = () => {
  return (
    <footer className="bg-slate-600 p-4 pt-8">
      <div className="max-w-6xl mx-auto pt-4 text-slate-900">
        <div className="flex md:justify-center justify-between flex-wrap">
          <div className="space-y-2 w-fit mx-auto">
            <h1 className="text-slate-950 md:text-lg text-base">Products</h1>
            <ul className="space-y-2 text-gray-300/60">
              <li>Features</li>
              <li>Integrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="space-y-2 w-fit mx-auto">
            <h1 className="text-slate-950 md:text-lg text-base">Company</h1>
            <ul className="space-y-2 text-gray-300/60">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-2 w-fit mx-auto">
            <h1 className="text-slate-950 md:text-lg text-base">Resources</h1>
            <ul className="space-y-2 text-gray-300/60">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          <div className="space-y-2 w-fit mx-auto">
            <h1 className="text-slate-950 md:text-lg text-base">Legal</h1>
            <ul className="space-y-2 text-gray-300/60">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="space-y-2 md:w-auto w-full md:p-0 p-4">
            <h1 className="text-slate-950 md:text-lg text-base">News-letter</h1>
            <div className="overflow-hidden gap-1 flex flex-row  pr-2 pt-2">
              <input type="email" placeholder="johndoe@gmail.com" className="rounded-md bg-gray-400 w-full px-2 py-1 outline-none" />
              <button className="border-0 text-gray-300 bg-neutral-800 outline-none rounded-xl px-3 py-1" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
