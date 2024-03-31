import Catalog from "../components/Catalog/Catalog.components";
import RightMenu from "../components/RightMenu/RightMenu.components";
import HomeSwiper from "../components/Swipers/HomeSwiper.components";
import HomeMinSwiper from "../components/Swipers/HomeMinSwiper.components"
import NewSwiper from "../components/Swipers/NewSwiper.components"
import styles from "./page.module.scss";
import SeasonSwiper from "../components/Swipers/SeasonSwiper.components";

export default async function Home() {

  const catalog = [
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    {
      label: "Электроинструмент",
      image: "/logo-small.svg",
      url: "/",
      children: [
        {
          label: "Триммеры / бензокосы",
          url: "/"
        },
        {
          label: "Мотоблоки",
          url: "/"
        },
        {
          label: "Мотопомпы",
          url: "/"
        },
        {
          label: "Бензобуры",
          url: "/"
        },
        {
          label: "Бензопилы",
          url: "/"
        },
        {
          label: "Культиваторы",
          url: "/"
        },
      ]
    },
    
  ]

  const homeSwiper = [
    {
      alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
      srcImage: "https://dev.mst.tools/assets/content/images/sales/interskol/260ccb21-4208-4ce9-ab88-b9d993c74c53.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/sales/interskol/professionalnaya-besshhetochnaya-drel-shurupovert-s-4-nasadkami_1480x443_c26.jpg",
      url: "/"
    }
  ]

  const homeMinSwiper = [
    {
      alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/sales/interskol/czepnaya-akkumulyatornaya-pila-favourite-vsego-za-3-777-rublej_364x181_7e2.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/sales/interskol/drel-shurupovert-akkumulyatornaya-favourite-vsego-za-2-299-rublej_364x181_7e2.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/sales/interskol/shlifmashina-uglovaya-interskol-vsego-za-2-299-rublej_364x181_7e2.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/sales/interskol/luchshaya-czena-na-svarochnyie-apparatyi-interskol-ms_364x181_7e2.jpg",
      url: "/"
    }
  ]

  const seasonSwiper = [
    {
      alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/season/gotovimsya-k-sezonu-cadovyie-izmelchiteli_747x972_c79.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/season/gotovimsya-k-sezonu-motobloki_747x972_c79.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/season/gotovimsya-k-sezonu-trimmeryi_747x972_c79.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/season/gotovimsya-k-sezonu-pilyi_747x972_c79.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/season/gotovimsya-k-sezonu-tachki_747x972_c79.jpg",
      url: "/"
    }
  ]

  const newSwiper = [
    {
      alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/18v-50-kombi-776.2.2.79_228x295_1ce.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/18v-80-786.4.1.70_228x295_1ce.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/350e-25-797.1.0.70_228x295_1ce.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/1400m-785.1.0.70_228x295_1ce.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/900e-772.0.0.70_228x295_1ce.jpg",
      url: "/"
    },
    {
      alt: "Профессиональная бесщеточная дрель-шуруповерт ДА 13/18В 50 Комби с 4 насадками.",
      srcImage: "https://mst.tools/assets/cache_image/assets/content/images/slider/350e-50-800.1.0.70_228x295_1ce.jpg",
      url: "/"
    }
  ]


  return (
    <div className="dart-custom-grid">
        <div className="d-col-menu menuShow">
          <Catalog catalog={catalog}/>
        </div>
        <div className="d-col-content">
          <div className="dart-home dart-window">
            <span className="h2">Акции</span>
            <HomeSwiper items={homeSwiper}/>
            <HomeMinSwiper items={homeMinSwiper}/>

            <span className="h2 mb-3 mt-5">Готовимся к сезону</span>
            <SeasonSwiper items={seasonSwiper} />

            <span className="h2 mb-3 mt-5">Новинки</span>
            <NewSwiper items={newSwiper}/>
          </div>
        </div>
        <div className="d-col-map">
          <RightMenu />
        </div>
    </div>
  );
}
