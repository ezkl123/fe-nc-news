import { Link } from "react-router-dom"

function Navbar(){
    return <>
    <ul className='navbar'>
        <Link to='/articles'>Articles</Link>
        <li>Topics</li>
        <li>Users</li>
    </ul>
    </>
}

export default Navbar