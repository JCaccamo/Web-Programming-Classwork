import Link from "next/link"
import { useState } from "react"
const Cart = () => <div></div>
const LoginBadge = () => <div></div>
const MessageList = () => <div></div>

export default () => {
    const [isActive, setIsActive] = useState(false);
    // const isCartOpen = ref(false);
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <Cart is-open="isCartOpen" />
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <h1 className="title is-5">Web Programming</h1>
                    </div>
                    <a className={`navbar-burger ${ isActive ? 'is-active': '' }`} onClick={()=> setIsActive( !isActive )} role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${ isActive ? 'is-active': '' }`}>
                    <div className="navbar-start">
                        <Link href="/" className="navbar-item">Home</Link>
                        <Link href="/products" className="navbar-item">Products</Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <Link href="/about" className="navbar-item">About</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <MessageList />
                        <div className="navbar-item">
                            <button className="button is-primary" click="isCartOpen = !isCartOpen">Cart</button>
                        </div>
                        <div className="navbar-item">
                            <LoginBadge />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
