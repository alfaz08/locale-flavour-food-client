

const Footer = () => {
  return (
    <div>
      <footer className="footer  bg-green-200 text-base-content">
  <div>


    <div className="flex">
    <img className="w-36" src="https://i.ibb.co/X8zVkt2/Green-Modern-Organic-Health-Food-Logo-1-removebg-preview.png" alt="" />
    <h2>Locale Flavour Food <br />
    Online Grocery Shop
    </h2>
    
    </div>


  </div> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  );
};

export default Footer;