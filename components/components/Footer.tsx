import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <Link href="/" className="brand footerBrand brandWithLogo footerLogoLockup">
            <Image src="/images/little-talk-logo.jpg" alt="Little Talk Cafe logo" width={70} height={70} />
            <span>
              <strong>Little Talk Cafe</strong>
              <small>Breakfast • Brunch • Coffee • Private Events</small>
            </span>
          </Link>
          <p>
            A cosy independent café in Leigh-on-Sea for freshly prepared food,
            proper coffee, private events and special gatherings.
          </p>
        </div>
        <div>
          <h3>Find us</h3>
          <p>1090 London Rd, Leigh-on-Sea, SS9 3NA</p>
          <p>
            <a href="tel:+441702883027">01702 883027</a>
            <br />
            <a href="mailto:littletalkltd@gmail.com">littletalkltd@gmail.com</a>
          </p>
        </div>
        <div>
          <h3>Opening hours</h3>
          <p>
            Tuesday–Saturday: 9 AM–3 PM
            <br />
            Sunday: 9 AM–2 PM
            <br />
            Monday: Closed
          </p>
        </div>
      </footer>
      <div className="subFooter">
        © {new Date().getFullYear()} Little Talk Cafe. All rights reserved.
      </div>
    </>
  );
}
