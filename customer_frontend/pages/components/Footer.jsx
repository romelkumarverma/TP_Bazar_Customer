import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">
                    <h3><span>Tpbazar</span></h3>

                    <p class="footer-links">
                        <a href="/">Home</a>

                        <a href="/">About</a>

                        <a href="/">Contact</a>

                        {/* <a href="/">Blog</a> */}
                    </p>

                    <p class="footer-company-name">Copyright © 2024 <strong>tpbazar</strong> All rights reserved</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Bhopal</span>
                            Madhya Pradesh</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>9525359240</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:sagar00001.co@gmail.com">romel@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        <strong>Tpbazar</strong>
                        The dedicated market place for techies for buying & selling among the techie community.
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
