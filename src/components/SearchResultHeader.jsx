import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {

    const [selectedMenu, setselectedMenu] = useState("All")
    const { setimageSearch } = useContext(Context)

    const clickHandler = (menu) => {
        let imageavai = menu.name === "Images"
        setselectedMenu(menu.name)
        setimageSearch(imageavai ? true : false)
    }


    return (

        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col item-center sticky top-0 bg-white" >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow ">
                    <Link to='/'  > <img src={Logo} className="hidden md:block w-[92px] mr-10" />  </Link>
                    <SearchInput />
                </div>
                <div className="hidden md:block">
                    <ProfileIcon />
                </div>
            </div>
            <div className="flex ml-[12px] mt-3">
                {
                    menu.map((res, index) => {
                        return (
                            <span key={index} className={`flex items-center p-3 text -[#5f6368] cursor-pointer ${selectedMenu === res.name ? "text-[#1a73e8]" : ""}`} onClick={() => clickHandler(res)} >
                                <span className="hidden md:block mr-2" >
                                    {res.icon}
                                </span>
                                <span className=" text-sm" >
                                    {res.name}
                                </span>
                            </span>

                        )
                    })
                }
            </div>

        </div>
    )

};

export default SearchResultHeader;
