import React from 'react'
import './styles.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="ft-list">
                <button>Product</button>
                <button>Contact</button>
                <button>Terms &amp; Conditions</button>
                <button>Privacy Policy</button>
                <button>&copy; 2019 Copyright Web-Wallet Inc.</button>
            </div>
        </div>
    )
}

/* <ul className="ft-list">
<li>Terms &amp; Conditions</li>
<li>Privacy Policy</li>
<li>&copy; 2019 Copyright Web-Wallet Inc.</li>
</ul> */