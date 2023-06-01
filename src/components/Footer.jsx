import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <div className="bg-[#f2f2f2]" >
            <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-border-[#dadce0]" >
                <span className="text-[#70767a] text-[15px] leading-none" >India</span>
            </div>
            <div className="flex flerx-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]" >
                <div className="flex justify-start ">
                    {
                        quickLinks && quickLinks.map((res, index) => {
                            return (
                                <span key={index} className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                                    {res}
                                </span>
                            )
                        })
                    }
                </div>
                <div className="flex justify-end ">
                    {
                        settingMenu && settingMenu.map((res, index) => {
                            return (
                                <span key={index} className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                                    {res}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Footer;
