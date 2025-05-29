import React from "react";
import ReactDOM from "react-dom/client";
import { logo } from "./Assests/logo.png";
import { info } from "sass";

//Header Component
const HeaderComponent = () => (
  <div className="header">
    <div>
      <img
        className="header-image"
        src="https://cdn.pixabay.com/photo/2022/08/02/04/46/icon-7359529_1280.png"
        alt={logo}
      ></img>
    </div>
    <div className="header-menu">
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>Profile</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
);

const resData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "254002",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/89db9af1-59e7-4845-aac0-af0d12a1b1e1_254002.JPG",
      locality: "Opulent Mall",
      areaName: "Nehru Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "11K+",
      promoted: true,
      adTrackingId:
        "cid=29588414~p=0~adgrpid=29588414#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254002~plpr=COLLECTION~eid=a24928c3-d721-4492-acb7-abdc26029003~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource: "ni4jj1hlo4zt7i3ioaow",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/3/14/f0ab3853-93d3-47a6-8fc7-546cd8b00bcc_b7b33836-d649-4394-9372-a3e749b6a289.png",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/3/19/88c79972-267b-4d1b-be5b-094792747912_45858f37-4cef-4a1f-a6cf-7649880719bb.png",
          },
        },
        {
          image: {
            resource: "w9fphivfbl55zzbm8lxd",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/9/25f30ed0-e9b7-4fc7-9404-ab33a46e80e6_09b389de-70e6-4f6e-8aa6-ca17a0367eb4.png",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/mcdonalds-opulent-mall-nehru-nagar-rest254002",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "79633",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/2be087da-631b-431b-aa7a-9244fb563be2_79633.JPG",
      locality: "G.T. Road",
      areaName: "Nehru Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource: "7850b115687ee8594f9d7f0a66c2ee84",
          },
        },
        {
          image: {
            resource: "a302da0d414837495c1576b64dd943e0",
          },
        },
        {
          image: {
            resource: "f05bf56a2943904aff5e4a8357a4c3c8",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/10/17/35184d75-6f5c-41b3-8828-62bf49504081_cb9a47d7-033c-45ab-8d8e-1df1e10e7702.jpg",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/dominos-pizza-g-t-road-nehru-nagar-rest79633",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "996447",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/2ed38276-1e99-4748-9d89-4fc858b63f9f_996447.jpg",
      locality: "P&TCOLONY",
      areaName: "GHAZIABAD",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.5,
      parentId: "1557",
      avgRatingString: "4.5",
      totalRatingsString: "585",
      promoted: true,
      adTrackingId:
        "cid=29459181~p=2~adgrpid=29459181#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=996447~plpr=COLLECTION~eid=fba02748-54d1-42c4-8019-1a448c9dec05~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource: "e5603ae912b443e5c4d7981272ca5109",
          },
        },
      ],
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/taco-bell-p-and-tcolony-ghaziabad-rest996447",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "215333",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/9ed84eee-55aa-4288-8028-d8a76f6893e5_215333.jpg",
      locality: "Opulent Mall",
      areaName: "Raj Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "14K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "66% OFF",
        subHeader: "UPTO ₹126",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/burger-king-opulent-mall-raj-nagar-rest215333",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1052545",
      name: "Goldy Foods",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/25/4fd010a7-eb29-4b62-b035-c62c2a18572c_1052545.jpg",
      locality: "Crossing Republic",
      areaName: "Crossing Republic",
      costForTwo: "₹299 for two",
      cuisines: ["Chinese", "Fast Food"],
      veg: true,
      parentId: "611901",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=28923122~p=3~adgrpid=28923122#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1052545~plpr=COLLECTION~eid=2c516a2c-f49f-403b-b0bf-186e5e66a9e4~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/25/4fd010a7-eb29-4b62-b035-c62c2a18572c_1052545.jpg",
          },
        },
      ],
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/goldy-foods-crossing-republic-rest1052545",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "264208",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/01c9afe8-67c0-4190-b197-b51b33f1b0d5_264208.jpg",
      locality: "Navyug Market",
      areaName: "Raj Nagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20RX%20listing%2018px.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20RX%20listing%2018px.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹148",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/18/3a230bb3-fa02-4ee8-9637-bf14c5787060_f66b21e6-7ff3-4abc-8e1d-8c674a246ca9.jpg",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/18/0a0aea24-d827-4563-b2d2-7898a145fdf5_426171bb-1e27-4ff1-b924-c7e77b74bd18.jpg",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/4/15/2b53a0ef-a399-41a1-9fcd-99f4f1a3b5d9_b247cb37-5fdb-4d0e-b803-75c6cf68738e.jpg",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/nic-ice-creams-navyug-market-raj-nagar-rest264208",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "686202",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Raj Nagar",
      areaName: "VVIP Style Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "1.4K+",
      promoted: true,
      adTrackingId:
        "cid=29551058~p=5~adgrpid=29551058#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=686202~plpr=COLLECTION~eid=aabd580a-b2be-4830-902d-009b8c4029a4~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/6/7/38c2e066-8dd1-453d-b7c9-a40b4706dd55_8f6bfe25-466b-4c8a-88a5-73c27e254c42.jpg_compressed",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/chinese-wok-raj-nagar-vvip-style-mall-rest686202",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "600892",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1fd7b854-eef6-40eb-9395-ca7f38549510_600892.JPG",
      locality: "GT Road",
      areaName: "Nehru Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource: "dd434d7cd80de42b3d04cb979aeacb46",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/kfc-gt-road-nehru-nagar-rest600892",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "686203",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686203.JPG",
      locality: "Raj Nagar",
      areaName: "VVIP Style Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "892",
      promoted: true,
      adTrackingId:
        "cid=29538483~p=6~adgrpid=29538483#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=686203~plpr=COLLECTION~eid=bb13b0b6-a6dc-45ab-9fa8-8c2c3a4ba7f7~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686203.JPG",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/big-bowl-raj-nagar-vvip-style-mall-rest686203",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "722374",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/0bf6bba7-a0b7-4b14-8315-248a10f2dc8e_722374.JPG",
      locality: "Crossings Republik",
      areaName: "Opulent Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/4/17/5ed9aec1-1b63-4477-a43b-476a628d3b45_07825b66-79bb-456f-b698-3177bb31275f.jpg",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "36",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/pizza-hut-crossings-republik-opulent-mall-rest722374",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1025974",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/d6e2f47f-128c-463c-976d-2955cffa1835_1025974.jpg",
      locality: "KAVI NAGA",
      areaName: "IMT Ghaziabad",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
      ],
      avgRating: 4.4,
      parentId: "7003",
      avgRatingString: "4.4",
      totalRatingsString: "102",
      promoted: true,
      adTrackingId:
        "cid=29459208~p=7~adgrpid=29459208#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1025974~plpr=COLLECTION~eid=7663febd-f21c-4ab2-a195-01e62300f402~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/d6e2f47f-128c-463c-976d-2955cffa1835_1025974.jpg",
          },
        },
      ],
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/cakezone-patisserie-kavi-naga-imt-ghaziabad-rest1025974",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "390466",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f1e91655-c558-4d96-ad70-173a02554ba3_390466.jpg",
      locality: "Nehru Nagar",
      areaName: "Nehru Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.3,
      parentId: "1776",
      avgRatingString: "4.3",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/21/57ddb331-25cd-414e-81c8-bd723ab1e0e7_e9006554-cbf2-4ed4-a68d-5c5c141cbb51.png_compressed",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/21/4bf5f59d-f072-4f15-8a23-680195ac6a34_17cb2a4c-4aed-405f-917c-fecfd24f5351.png_compressed",
          },
        },
        {
          image: {
            resource:
              "FOOD_CATALOG/IMAGES/CMS/2025/5/21/9462deb7-8d74-4af1-9e2d-71b54e4e6234_aa376013-7bf1-4989-bb9e-abd0ffe1aefd.png_compressed",
          },
        },
      ],
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.8",
          ratingCount: "433",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/wow-momo-nehru-nagar-rest390466",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1076669",
      name: "L'opal - Gourmet Cakes and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/b9474274-99e4-4bd5-9357-5f073a42c4e6_1076669.jpg",
      locality: "Raj Nagar",
      areaName: "Raj Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery"],
      veg: true,
      parentId: "626501",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=dc8898b0-2eb2-4090-a648-8a7d49b37342~p=11~adgrpid=dc8898b0-2eb2-4090-a648-8a7d49b37342#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1076669~plpr=COLLECTION~eid=38fb5ed2-6c73-4bfd-acd3-f68d6f03f50d~srvts=1748437086140~collid=138255",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_BIG_CARD",
      mediaDetails: [
        {
          image: {
            resource:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/b9474274-99e4-4bd5-9357-5f073a42c4e6_1076669.jpg",
          },
        },
      ],
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/noida/lopal-gourmet-cakes-and-desserts-raj-nagar-rest1076669",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "Foodpage_UX5_VerticalRestaurantList_MultiImage_byName",
  },
];

//Food Card Component
const FoodCard = (props) => {
  const data = props?.props?.info;
  console.log(data);
  return (
    <div className="food-card">
      <img
        className="food-card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data?.cloudinaryImageId
        }
        alt={logo}
      />
      <div className="food-card-name">
        <p>{data?.name}</p>
      </div>
      <h4>{data?.cuisines.join(",")}</h4>
      <div></div>
      <h4>{data?.avgRating}</h4>
      <h4>{data?.sla?.slaString} </h4>
      <h4>{data?.costForTwo}</h4>
    </div>
  );
};

//Food Container Component
const FoodContainer = () => (
  <div className="food-container">
    <div className="food-container-search">
      <h3>search</h3>
    </div>
    <div className="food-container-card">
      {resData.map((data) => (
        <FoodCard key={data?.info?.id} props={data} />
      ))}
      {/* {resData.map((data) => (
        <FoodCard props={data} />
      ))} */}
    </div>
  </div>
);
const AppLayout = () => (
  <div className="appLayout">
    <HeaderComponent />
    <FoodContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
