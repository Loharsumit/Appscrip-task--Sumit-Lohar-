import React from 'react'
import './Header.css'
import logo from '../../assets/appscripLogo.jpeg'


function Header({ likeCount }) {
  return (
    <>
        <div className='fnav'>
          <div className="header">
            <img src={logo} alt="" />
          </div>
          <p id='logo'>LOGO</p>
          <div className="icons">
             <p><i class="ri-search-2-line"></i></p>
             <p><i className="ri-heart-3-line">
              {likeCount > 0 && <span className="like-count">{likeCount}</span>}
              </i></p>
             <p><i class="ri-handbag-line"></i></p>
             <p><i class="ri-contacts-line"></i></p>
            <select className='langOpt' name="" id="">
              <option value="">Eng</option>
              <option value="">Hnd</option>
              <option value="">knd</option>
              <option value="">Tlg</option>
              <option value="">Tml</option>
            </select>
          </div>
        </div>
    </>
  )
}

export default Header