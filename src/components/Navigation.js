import react from "react";
import {Link} from "react-router-dom";


const Navigation = ({userObj}) =>  
<nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <li class="Navli"><Link to ="/" style={{marginRight: 10 }}>HOME</Link></li>
        <li class="Navli">
            <Link to ="/profile" 
            style={{ 
                marginLeft: 10, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                fontSize: 12,
                 }}
            >
            {/* }} 끝나고 FontAwesome 으로 추가  */}
            <span style=
                {{ marginTop: 10 }}>
                    {userObj.displayName ? 
                    `${userObj.displayName}의 Profile` 
                    : "Profile"}
            </span>
             </Link>
        </li>  
    </ul>

</nav>

export default Navigation;