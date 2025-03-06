"use client"
import Image from "next/image";
import location from "@/assets/Location.svg";
import mail from "@/assets/Message.svg";
import phone from "@/assets/Calling.svg"
import MyForm from "@/components/ui/MyForm/MyForm";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {useEffect, useRef, useState} from "react";

const Contact = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const key = "0be6eed2-17f1-4f32-b568-0098b03a940d"
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
        if (windowSize.innerWidth <= 480) {
            setWidth(330)
            setHeight(280)
        }else {
            setWidth(450)
            setHeight(300)
        }
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    return (
        <YMaps query={{apikey:key}}>
        <main className={"adaption_contact"}>
            <div className={"container mt-50"}>
                <div className={"d-f ai-end gap25 action_contact "}>
                    <div className={"byk"}>
                        О
                    </div>
                    <div className={"w-100"}>
                        <div className={"d-f flex-wrap gap5"}>
                            <span className={"text_action d-f ai-cen"}>
                                Главная
                            </span>
                            <div className={"d-f ai-cen"}>
                                •
                            </div>
                            <span className={"text_action_active d-f ai-cen"}>
                                Контакты
                            </span>
                        </div>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>О КОМПАНИИ "ВЕКТОР"</p>
                    </div>
                </div>
                <div className={"d-f mt-70 flex-wrap jus_cont"}>
                    <div className={""}>
                            <div className={"d-f jc-s ai-cen gap25 "}>
                                <Image src={location} width={40} height={40}/>
                                <p className={"text_company"}>г.Москва ул.Соловьиная Роща д.3 пом.3/1 </p>
                            </div>
                            <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                                <Image src={phone} width={40} height={40}/>
                                <p className={"text_company"}>+7 (901) 181-11-12<span className={"text_gray"}> (Отдел продаж)</span></p>
                            </div>
                            <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                                <Image src={phone} width={40} height={40}/>
                                <p className={"text_company"}>+7 (903) 117-59-07<span className={"text_gray"}> (Отдел продаж)</span></p>
                            </div>
                            <div className={"d-f jc-s ai-cen gap25 mt-30"}>
                                <Image src={mail} width={40} height={40}/>
                                <p className={"text_company"}>pk-vektor@internet.ru</p>
                            </div>
                    </div>
                    <div className={"d-f gap25 ai-start block2"}>
                        {/*<div>*/}
                        {/*    <p className={"text_company"}><span className={"text_gray"}>ИНН:</span> 7733446127 </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>КПП:</span> 773301001 </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>ОГРН:</span> 1247700375196 </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>ОКПО:</span> 71796474 </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>ОКАТО:</span> 45283555000 </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>БАНК</span> ООО «Банк Точка» </p>*/}
                        {/*    <p className={"text_company mt-30"}><span className={"text_gray"}>РАСЧЕТНЫЙ СЧЕТ:</span> 40702810520000109859 </p>*/}

                        {/*</div>*/}
                        <div className={"map mb-45"}>
                            <Map defaultState={{ center: [55.889937, 37.399030], zoom: 10}} width={width} height={height}>
                                <Placemark geometry={[55.889937, 37.399030]} />
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container mt-100 form_adaption"}>
                <div className={"d-f ai-end gap25 mb-45 action2_contact "}>
                    <div className={"byk"}>
                        В
                    </div>
                    <div className={"w-100"}>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>ВОПРОСЫ</p>
                    </div>
                </div>
                <div className={"d-f flex-wrap jc-sp ai-s quection_contact_parent gap30"}>
                    <div className={"quection_contact"}>
                        <p className={"text6"}>ОСТАЛИСЬ ВОПРОСЫ ?</p>
                        <p className={"text_company"}>Или нужна консультация?<br/> Заполните форму или позвоните нам</p>
                        <div className={"text1_yellow mt-10 ai-cen jc-cen d-f gap10"}><Image src={phone} className={"img_contact"}/> <span className={"ml-10"}>+7 (901) 181-11-12</span></div>
                    </div>
                    <MyForm className={"max_width380"}/>
                </div>

            </div>

        </main>
            </YMaps>
    );
};

export default Contact;