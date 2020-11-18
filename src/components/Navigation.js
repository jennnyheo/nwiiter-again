import react from "react";
import {Link} from "react-router-dom";


const Navigation = ({userObj}) =>  
<nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <li><Link to ="/" style={{marginRight: 10 }}></Link></li>
        <li><Link to ="/profile" style={{marginLeft: 10, display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12 }}>{userObj.displayName}</Link></li>
        <span style={{ marginTop: 10 }}>{userObj.displayName ? `${userObj.displayName}의 Profile` : "Profile"}</span>
    </ul>

</nav>

export default Navigation;