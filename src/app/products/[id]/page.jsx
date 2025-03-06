"use client"
import {usePathname} from "next/navigation";
import data_Product from "@/ProductsData/ProductsData"
import Image from "next/image";
import phone from "@/assets/Calling.svg";
import MyForm from "@/components/ui/MyForm/MyForm";
import Link from "next/link";
import arrow from "@/assets/arrow_left.svg"

const Page = () => {
    const pathname = usePathname()
    const id_list = pathname.split("/")
    const id = id_list[id_list.length - 1]
    const product = data_Product.filter((item) => {
        return item.id === parseInt(id)
    })[0]
    console.log(product,id)
    return (
        <main className={"adaption_product_id"}>
            <div className={"container mt-50"}>
                <div className={"d-f ai-end gap25 action_contact "}>
                    <Link href={"/products"} className={"button_back"}>
                        <Image src={arrow} alt={"arrow_back"}/>
                    </Link>
                    <div className={"w-100"}>
                        <div className={"d-f flex-wrap gap5"}>
                            <span className={"text_action d-f ai-end"}>
                                Главная
                            </span>
                            <div className={"d-f ai-s"}>
                                •
                            </div>
                            <span className={"text_action_active d-f ai-end"}>
                                Продукция
                            </span>
                        </div>
                        <span className={"spanHr mt-5"}></span>
                        <p className={"text3 mt-5"}>{product.title}</p>
                    </div>
                </div>
                <div className={"d-f mt-70 flex-wrap jus_cont"}>
                    <div >
                        <Image className={"image_item"} src={product.src} alt={product.title}/>
                    </div>
                    <div className={"line_contact_parent"}>
                        <span className={"line_contact"}>

                        </span>
                    </div>
                    <div className={"d-f gap20 ai-start block2 max_width750"}>
                        <div className={"text-align-left"}>
                            <p className={" text4 border_bottom pb-15 pl-15"}>
                                Название:<span className={"text_company"}> {product.title}</span>
                            </p>
                            <p className={"text4 border_bottom pb-15 pt-15 pl-15"}>
                                Описание:<span className={"text_company"}> {product.description}</span>
                            </p>
                            <div className={"text_company border_bottom pb-15 pt-15 pl-15"}>
                                {product.characteristic.map((itemC,indexC) => {
                                    return (
                                        <div key={indexC} className={`${indexC > 0 && "pt-15"} d-f jc-sp ai-cen `}>
                                            <p>{itemC.titleC}</p>
                                            <p>{itemC.descriptionC}</p>
                                        </div>
                                    )
                                })}
                            </div>


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
                        <div className={"text1_yellow mt-10 ai-cen jc-cen d-f"}><div><Image src={phone} className={"img_contact"}/> <span className={"ml-10"}>+7 (901) 181-11-12</span></div></div>
                    </div>
                    <MyForm className={"max_width380"}/>
                </div>

            </div>

        </main>
    );
};

export default Page;