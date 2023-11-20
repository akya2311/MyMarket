import { BiCategory } from "react-icons/bi"; 
import { AiOutlineHome } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsInfoSquare } from "react-icons/bs";
import { LiaProductHunt } from "react-icons/lia";

import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
        const navigate = useNavigate();
        return (
            
            <div className={`main-footer`}>
                <ul className="footer-content">
                <li>
                        <div className="icon-section" onClick={() => navigate("/")}>   
                            <AiOutlineHome size={20} />
                            <span>Home</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon-section" onClick={() => navigate("/categories")}>   
                            <BiCategory size={20} />
                            <span>Category</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon-section" onClick={() => navigate("/allproduct/")}>   
                            <LiaProductHunt size={20} />
                            <span>All Product</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon-section">   
                            <CiUser size={20}/>
                            <span>Account</span>
                        </div>
                    </li>
                    
                    <li>
                        <div className="icon-section">   
                            <BsInfoSquare size={20}/>
                            <span>About</span>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }



export default Footer