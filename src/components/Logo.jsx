import Image from "../assets/logo-gmail.svg";

const Logo = () => {
    return(
            <div className="bg-gray-200 rounded-full" >
                <img className="h-20 w-20 p-3" src={Image} alt="Gmail Logo"/>
            </div>
    )
}

export default Logo