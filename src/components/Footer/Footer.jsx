import React from 'react';
import Image from "next/image";
import footer_bgc from "@/assets/logo_vek.png"
import mail from "@/assets/mail.svg"
import whatsapp from "@/assets/whatsapp.svg"
import tg from "@/assets/telegram_zltwtqsi7okn.svg"

const Footer = () => {
    return (
        <footer className={"mt-100 pb-50 pt-50 bgc_footer"}>
            <div className={"d-f flex-wrap jc-sa ai-cen container "}>
                <p className={"information"}>
                    Политика конфиденциальности<br/>
                    ООО "ВЕКТОР"<br/>
                    ИНН 0000000000<br/>
                    ОСНОВАНО В 2025г.
                </p>
                <div className={"logo_footer"}>
                    <Image src={footer_bgc}/>
                </div>
                <div className={"d-f jc-s gap25 ai-cen flex-wrap icons"}>
                    <Image src={mail} width={40} height={40}/>
                    <Image src={whatsapp} width={40} height={40}/>
                    <Image src={tg} width={40} height={40}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;