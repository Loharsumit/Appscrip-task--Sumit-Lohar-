// Footer.jsx
import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">

        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-currency">
          <div className="contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="currency">
            <h3>CURRENCY</h3>
            <div className="currency-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI97lBrpfjG7wo0zytKSKSStwS29FfYYL4Q&s" alt="us" />
              <span>USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
        </div>

        <div className="footer-bottom">
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <nav>
            <a href="#">Orders & Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment & Pricing</a>
            <a href="#">Return & Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>

        <div className="follow-payment">
          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <div className="social-links">
              <a href="#"><i class="ri-instagram-line"></i></a>
              <a href="#"><i class="ri-linkedin-box-fill"></i></a>
            </div>
          </div>

          <div className="accepted-payments">
            <h3>mettā muse ACCEPTS</h3>
            <div className="payment-methods">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkunF0VTXmmYOUiFGmJnr0pTP0Rr7_gNI-w4O0GoWQ7fPt-a0gpIdzf0PzoOsnV4RGc0Lj0_KLGN4rRQnBDhIwwZ1SAGhk-F6QD47-w" alt="Google Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PayPal_2024_%28Icon%29.svg/220px-PayPal_2024_%28Icon%29.svg.png" alt="PayPal" />
              <img src="https://user-images.githubusercontent.com/454095/41261817-57b8bfe6-6d92-11e8-9d77-8cd94e676232.png" alt="American Express" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxYUQvdwKXZ9meVu4Jx6fr7nNNo99TLl-bA&s" alt="Apple Pay" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKB6G830zio2suFcL0aDtwItGoJkdlqmDvag&s" alt="Shop Pay" />
            </div>
          </div>
        </div>

        </div>

      </div>

      <div className="footer-copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
