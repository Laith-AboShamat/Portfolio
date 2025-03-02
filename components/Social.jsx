import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/Laith-AboShamat"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/laith-aboshamat-9170b7302"},
    {icon: <FaYoutube/>, path:"https://www.youtube.com/@LaithAboShamat"},
    {icon: <FaTwitter/>, path:"https://x.com/LaithAboShamat"},
    {icon: <FaFacebook/>, path:"https://www.facebook.com/profile.php?id=61566581313995"},
];

const Social = ({containerStyles, iconStyles})=>{
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
                )
            })}
        </div>
    )
}

export default Social