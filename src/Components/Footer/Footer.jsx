import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png' // Assuming you have a YouTube icon image
import facebook_icon from '../../assets/facebook_icon.png' // Assuming you have a Facebook icon image
import twitter_icon from '../../assets/twitter_icon.png' // Assuming you have a Twitter icon image
import instagram_icon from '../../assets/instagram_icon.png' // Assuming you have an Instagram icon image

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025-2026 Netflix, Inc</p>
    </div>
  )
}

export default Footer
