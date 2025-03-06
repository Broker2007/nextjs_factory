import lul from "@/assets/product/Люлька для монолитчика.jpg"
import buk from "@/assets/product/Бак для воды.jpg"
import cas from "@/assets/product/щиты.jpg"
import zax from "@/assets/product/захват маршей.jpg"
import bp from "@/assets/product/bp.jpg"
import bmh from "@/assets/product/bmh.jpg"
import caseY from "@/assets/product/утепленныйящик.jpg"
import bad from "@/assets/product/бадья.jpg"
import cas1 from "@/assets/product/cas1.jpg"
import casP from "@/assets/product/casP.jpg"
import place from "@/assets/product/place.jpg"
import place1 from "@/assets/product/place1.jpg"
import tar from "@/assets/product/tar.jpg"
import wardrobe from "@/assets/product/шкаф.jpg"
import davl from "@/assets/product/davl.jpg"
import kat from "@/assets/product/катки.jpg"
import mah from "@/assets/product/маховики.jpg"
import fl from "@/assets/product/фланцы.jpg"
import val from "@/assets/product/валы.jpg"
import upl from "@/assets/product/upl.jpg"
import chest from "@/assets/product/shest.jpg"
import baraban from "@/assets/product/baraban.jpg"
import nak from "@/assets/product/nak.jpg"
import stan from "@/assets/product/stan.jpg"
import rolk from "@/assets/product/rolk.jpg"
import voronka from "@/assets/product/voronka.jpg"
import nakop from "@/assets/product/nakop.jpg"
import galer from "@/assets/product/galer.jpg"
import kaps from "@/assets/product/kaps.jpg"
import kont from "@/assets/product/kont.jpg"
import kont2 from "@/assets/product/kont2.jpg"
import lest from "@/assets/product/lest.jpg"
import kass from "@/assets/product/kass.jpg"
import shit from "@/assets/product/shit.jpg"
import podmost from "@/assets/product/podmost.jpg"
import piramida from "@/assets/product/piramida.jpg"
import ogrj from "@/assets/product/ogrj.jpg"
import ogrj1 from "@/assets/product/ogrj1.jpg"
import React from "react";




const ProductsData = [
    // строительная оснастка 1
    {
        id:1,
        title:"Люлька для монолитчика",
        categories:1,
        src: lul,
        description: "Люлька для монолитчика. Предназначена для ведения монолитный работ. Крепится к бадье неповоротной БН. Можем скомплектовать площадкой монолитчика бадью БН-0.5, бадью БН 0.75, бадью БН 1.0, бункер БН 1.5, бункер БН 2.0, бункер БН 3.0",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "970мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "925мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1280мм"
            },
            {
                titleC: "Массы",
                descriptionC: "75кг"
            },
        ]
    },
    {
        id:2,
        title:"Бак для воды БВ — 3,3 Э",
        categories:1,
        src: buk,
        description: "Бак для воды БВ — 3,3 Э. Баки металлические для воды (БВ) устанавливаются в помещение для необходимого хранения аварийного запаса питьевой и технической воды на случай повреждения центрального водопровода. Баки БВ имеют различный объем в зависимости от потребности в водообеспечении.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "2070мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1950мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1700мм"
            },
            {
                titleC: "Масса",
                descriptionC: "525кг"
            },
            {
                titleC: "Объем",
                descriptionC: "3,3кб.м"
            },
        ]
    },
    {
        // щитов опалубки
        id:3,
        title:"Кассеты для хранения щитов опалубки",
        categories:1,
        src: cas,
        description: "Кассеты предназначены для хранения щитов опалубки в местах проведения работ, разновидности кассет для щитов опалубки КО-8 / КО-12 / КО-16 различаются вместимостью щитов.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "КО-8/КО-12/КО-16"
            },
            {
                titleC: "Длина",
                descriptionC: "3330/4800/6230мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1015мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1190мм"
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "6000кг"
            },
            {
                titleC: "Масса",
                descriptionC: "480/670/800кг"
            },

            {
                titleC: "Размер между трубами",
                descriptionC: "250мм"
            },
        ]
    },
    {
        id:4,
        title:"Захват лестничных маршей",
        categories:1,
        src: zax,
        description: "Захват лестничных маршей предназначен для монтажа лестничных маршей весом до 2,500 кг., а так же погрузки и выгрузки их из контейнера. Возможно производство захватов по техническому заданию.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "ЗЛМ-2500"
            },
            {
                titleC: "Длина",
                descriptionC: "1203мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "400мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1000мм"
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "2500кг"
            },
            {
                titleC: "Масса",
                descriptionC: "100кг"
            },
        ]
    },
    {
        id:5,
        title:"Бункер поворотный БП",
        categories:1,
        src: bp,
        description: "Бункер поворотный БП. Производим бадью Туфелька (Калоша).Бункер предназначен для приёма и подачи бетонной смеси к месту проведения монолитных работ.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "ЗЛМ-2500"
            },
            {
                titleC: "Длина",
                descriptionC: "1203мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "400мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1000мм"
            },
            {
                titleC: "Объем",
                descriptionC: "1.0куб.м. 1.6куб.м. 2.0куб.м."
            },

        ]
    },
    {
        id:6,
        title:"Бункер челюстной БМЧ",
        categories:1,
        src: bmh,
        description: "Бункер челюстной БМЧ.Предназначены для приёма, хранения и транспортировки строительных отходов в местах проведения работ.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "БМЧ-1.2/БМЧ-2.2"
            },
            {
                titleC: "Длина",
                descriptionC: "1360мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1240мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1070/1130мм"
            },
            {
                titleC: "Масса",
                descriptionC: "297/432кг"
            },
            {
                titleC: "Грузоподьемность",
                descriptionC: "800/1500кг"
            },
            {
                titleC: "Объем",
                descriptionC: "1.2 / 2.2 куб.м."
            },
        ]
    },
    {
        id:7,
        title:"Ящик для раствора утепленный",
        categories:1,
        src: caseY,
        description: "Ящик для раствора утепленный,с надежными петлями для погрузки, предназначен для транспортировки и хранения в холодное время года бетонной смеси объемом 0,34 кубический метров. Наш ящик — идеальное решение для надежного и удобного хранения смесей. Удобен в транспортировке, легок в использовании",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "ЗЛМ-2500"
            },
            {
                titleC: "Длина",
                descriptionC: "1685мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "762мм"
            },
            {
                titleC: "Высота",
                descriptionC: "470мм"
            },
            {
                titleC: "Масса",
                descriptionC: "105кг"
            },
            {
                titleC: "Полезный объем",
                descriptionC: "0,29куб.м"
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "700кг"
            },
        ]
    },
    {
        id:8,
        title:"Бункер неповоротный",
        categories:1,
        src: bad,
        description: "Бункер неповоротный / Бадья для бетона используются для подъема и транспортировки свежей смеси бетона. Разный объем бункеров позволит совершать любые работы связанные со смесями и транспортировкой.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "БH-0.5/0.75/1.0/2.0/3.0"
            },
            {
                titleC: "Длина",
                descriptionC: "1420/1170/1750/2060/2270мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1420/1170/1400/2060/2270мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1150/1630/1550/1600/1825мм"
            },
            {
                titleC: "Масса",
                descriptionC: "170/200/290/385/450кг"
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "1250/1880/2500/5000/7500кг"
            },
            {
                titleC: "Объем",
                descriptionC: "0.5/0.75/1.0/2.0/3.0куб.м."
            },
        ]
    },
    {
        id:9,
        title:"Склад-кассета НС",
        categories:1,
        src: cas1,
        description: "Склад-кассета НС-И предназначена для хранения наружных плит в панельно-сборном домостроение. В зависимости от ширины ячейки возможно хранение от 24 плит.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "5980мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1600мм"
            },
            {
                titleC: "Высота",
                descriptionC: "2300мм"
            },
            {
                titleC: "Масса",
                descriptionC: "1365кг"
            },
            {
                titleC: "Ширина ячеек",
                descriptionC: "400х400"
            },
        ]
    },
    {
        id:10,
        title:"Склад-кассета пирамида",
        categories:1,
        src: casP,
        description: "Склад-кассета пирамида предназначена для хранения наружных плит в панельно-сборном домостроение. В зависимости от ширины ячейки возможно хранение от 24 плит.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "1900мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1050мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1745мм"
            },
            {
                titleC: "Масса",
                descriptionC: "145кг"
            },
        ]
    },
    {
        id:11,
        title:"Площадка навесная",
        categories:1,
        src: place,
        description: "Наша компания предлагает широкий ассортимент навесных площадок которые обеспечат вам удобство и эффективность. Предназначены для ведения кирпичной кладки и фасадных работ.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "3000/2000/1000мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "3000мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1000мм"
            }
        ]
    },
    {
        id:12,
        title:"Тары для раствора",
        categories:1,
        src: tar,
        description: "Тары для раствора сделаны из прочного материала, обеспечивающий долговечность пользования. Разный объем тар позволит совершать любые работы связанные со смесями и их транспортировкой.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "ТР-0,25/0,35/0,5/1,0/1,5/2,0"
            },

            {
                titleC: "Объем",
                descriptionC: "0,25/0,35/0,5/1,0/1,5/2,0куб.м."
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "425/700/1200/2400/3750/4700 кг"
            }
        ]
    },
    {
        id:13,
        title:"Шкаф внешнего хранения генератора",
        categories:1,
        src: wardrobe,
        description: "Шкаф внешнего хранения генератора. Предназначен для хранения генераторных установок, препятствует проникновению осадков на генератор.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "2500мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1500мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1500мм"
            },
        ]
    },
    {
        id:25,
        title:"Площадка выносная",
        categories:1,
        src: place1,
        description: "Наша компания предлагает широкий ассортимент выносных площадок, которые обеспечат вам удобство и эффективность. Предназначены для приема грузов и строительных материалов.",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "К-1,1/1,3/1,4"
            },
            {
                titleC: "Длина",
                descriptionC: "3300/4800/4650мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "2300мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1300/1400/1400мм"
            },
            {
                titleC: "Масса",
                descriptionC: "500/1000/950кг"
            },
            {
                titleC: "Грузоподъемностью",
                descriptionC: "2500/4000 кг"
            }
        ]
    },
    {
        id:26,
        title:"Воронка к БН",
        categories:1,
        src: voronka,
        description: "Предназначена для уменьшения потерь бетонной смеси при возведении монолитный зданий. Крепится к бадьям БН 0.5, БН 0.75, БН 1.0, БН 1.5, БН 2.0, БН 3.0",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "БH-0.5/1.0/1.5/2.0"
            },
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            }
        ]
    },
    {
        id:28,
        title:"Бункер-накопитель для мусора",
        categories:1,
        src: nakop,
        description: "Бункер-накопитель для мусора, отлично подойдет как частному клиенту, для строительства, либо ремонтных работ,так и для крупных организаций. Подходит для любого вида строительных отходов.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "3250мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "2080мм"
            },
            {
                titleC: "Высота",
                descriptionC: "1420мм"
            },
            {
                titleC: "Масса",
                descriptionC: "706кг"
            },
            {
                titleC: "Объем",
                descriptionC: "6 куб.м"
            },

        ]
    },
    {
        id:29,
        title:"Галерея проходная",
        categories:1,
        src: galer,
        description: "Назначения галерей безопасный доступ на строительную площадку",
        characteristic: [
            {
                titleC: "Модель",
                descriptionC: "3/6"
            },
            {
                titleC: "Длина",
                descriptionC: "3000/6000мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "1140мм"
            },
            {
                titleC: "Высота",
                descriptionC: "2440мм"
            },
        ]
    },
    {
        id:30,
        title:"Капсула для сухой смеси",
        categories:1,
        src: kaps,
        description: "Емкость для сухой смеси предназначена для приема, транспортировки и раздачи сухой смеси. Емкость для сухой смеси применяется на строительных площадках.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "2000мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "2000мм"
            },
            {
                titleC: "Высота",
                descriptionC: "2310мм"
            },
            {
                titleC: "Масса",
                descriptionC: "480кг"
            },
            {
                titleC: "Полезный объем",
                descriptionC: "3куб.м."
            },
            {
                titleC: "Грузоподъемность кгс",
                descriptionC: "5000"
            },
        ]
    },
    {
        id:31,
        title:"Контейнер для 3 газовых балонов",
        categories:1,
        src: kont,
        description: "Шкаф для хранения 3-х газовых баллонов ШГБК-08-У позволяет хранить не только кислородные, но и ацетиленовые, углекислотные баллоны, а также другие, аналогичные по размеру.",
        characteristic: [
            {
                titleC: "Длина",
                descriptionC: "1060мм"
            },
            {
                titleC: "Ширина",
                descriptionC: "945мм"
            },
            {
                titleC: "Высота",
                descriptionC: "960мм"
            },
            {
                titleC: "Масса",
                descriptionC: "85кг"
            },
            {
                titleC: "Грузоподъемность",
                descriptionC: "180кг"
            },
        ]
    },
    {
        id:32,
        title:"Контейнер для сантех труб",
        categories:1,
        src: kont2,
        description: "Автономный сантехнический блок контейнер представляет собой компактное и функциональное решение, подходящее для широкого спектра задач.",
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            }
        ]
    },
    {
        id:33,
        title:"Лестница",
        categories:1,
        src: lest,
        description: "Строительная оснастка лестницы предназначена для безопасного и эффективного выполнения строительных и ремонтных работ на высоте.",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:34,
        title:"Кассета с пальцами",
        categories:1,
        src: kass,
        description: "",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:35,
        title:"Щит для шахт лифтов",
        categories:1,
        src: shit,
        description: "",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:36,
        title:"Подмость для шахт лифтов",
        categories:1,
        src: podmost,
        description: "",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:37,
        title:"Пирамида для оконных блоков",
        categories:1,
        src: piramida,
        description: "",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:38,
        title:"Ограждение подкрановых путей",
        categories:1,
        src: ogrj,
        description: "",
        characteristic: [
            {
                titleC: "Выполняеться",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:39,
        title:"Ограждение кровли",
        categories:1,
        src: ogrj1,
        description: ["Предназначены для ограждения опасных зон в местах проведения строительно-монтажных работ.", <br/>, "МИНИМАЛЬНАЯ ВЫСОТА: на неэксплуатируемой кровле — 0,6 м, на эксплуатируемой — до 1,5 м",<br/>, "ВЫСОТА ОГРАЖДЕНИЯ КРОВЛИ В ЗАВИСИМОСТИ ОТ ВЫСОТЫ СООРУЖЕНИЯ: если оно до 30 м, то конструкция должна быть 1100 мм, если свыше 30 м — 1200 мм"],
        characteristic: [
            {
                titleC: "Допустимый вес",
                descriptionC: "3-5 кг на погон.м."
            },
            {
                titleC: "Минимальная высота",
                descriptionC: "0,6-1,5м"
            },
            {
                titleC: "Высота ограждения",
                descriptionC: "1100-1200мм"
            },
        ]
    },
//     механическая обработка деталей 2
    {
        id:14,
        title:"Детали для металлорукавов высокого давления",
        categories:2,
        src: davl,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:15,
        title:"Катки",
        categories:2,
        src: kat,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:16,
        title:"Маховики",
        categories:2,
        src:mah,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:17,
        title:"Муфты, фланцы",
        categories:2,
        src:fl,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:18,
        title:"Валы",
        categories:2,
        src:val,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

    {
        id:19,
        title:"Вкладыши, уплотнители",
        categories:2,
        src:upl,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },
    {
        id:20,
        title:"Звёздочки и шестерни",
        categories:2,
        src:chest,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

    {
        id:21,
        title:"Блоки барабана",
        categories:2,
        src:baraban,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

    {
        id:22,
        title:"Нарезка резьбы,накатка",
        categories:2,
        src:nak,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

    {
        id:23,
        title:"Ножи для станков",
        categories:2,
        src:stan,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

    {
        id:24,
        title:"Ролики колеса",
        categories:2,
        src:rolk,
        description:["Наши специалисты разрабатывают проект на основе индивидуальных эскизов, чертежей заказчика. Конструкции создают из качественного металла, что гарантирует прочность изделия любого уровня сложности.",<br/>,<br/>, "По всем вопросам звоните на номер:+7 (901) 181-11-12"],
        characteristic: [
            {
                titleC: "Выполняется",
                descriptionC: "НА ЗАКАЗ"
            },
        ]
    },

]


export default ProductsData;