import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import Accordion from "./Accordian";

const RestaurantMenu = () => {
    console.log('rest rendered');
    const [restInfo, setRestInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);
    const restData = {
        "statusCode": 0,
        "data": {
            "statusMessage": "done successfully",
            "cards": [
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                            "text": "Swasthya Cafe",
                            "headerStyling": {
                                "textColor": "text_Highest_Emphasis",
                                "textVariant": "header_H3_Black"
                            }
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
                            "tabs": [
                                {
                                    "id": "Order Online",
                                    "title": "Order Online"
                                }
                            ]
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "1004521",
                                "name": "Swasthya Cafe",
                                "city": "Bangalore",
                                "slugs": {
                                    "restaurant": "swasthya-cafe-malleshwaram-malleshwaram",
                                    "city": "bangalore"
                                },
                                "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/7/18936656-7e09-487f-aca2-ad2e307b5d7a_1004521.jpg",
                                "locality": "Malleshwaram",
                                "areaName": "Malleshwaram",
                                "costForTwo": "25000",
                                "costForTwoMessage": "₹250 for two",
                                "cuisines": [
                                    "Chinese",
                                    "South Indian"
                                ],
                                "avgRating": 3.8,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "1004521",
                                    "fees": [
                                        {}
                                    ]
                                },
                                "parentId": "199088",
                                "avgRatingString": "3.8",
                                "totalRatingsString": "102 ratings",
                                "sla": {
                                    "restaurantId": "1004521",
                                    "deliveryTime": 35,
                                    "minDeliveryTime": 30,
                                    "maxDeliveryTime": 35,
                                    "lastMileTravel": 2.9,
                                    "serviceability": "SERVICEABLE",
                                    "stressFactor": 1,
                                    "rainMode": "RAIN_MODE_NONE",
                                    "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                                    "zoneId": 49,
                                    "slaString": "30-35 MINS",
                                    "lastMileTravelString": "2.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2025-11-29 22:00:00",
                                    "visibility": true,
                                    "opened": true,
                                    "restaurantClosedMeta": {}
                                },
                                "aggregatedDiscountInfo": {
                                    "header": "Get items under 69",
                                    "shortDescriptionList": [
                                        {
                                            "meta": "99 store",
                                            "discountType": "FinalPrice",
                                            "operationType": "RESTAURANT"
                                        },
                                        {
                                            "meta": "50% off | Use TRYNEW",
                                            "discountType": "Percentage",
                                            "operationType": "RESTAURANT"
                                        }
                                    ],
                                    "descriptionList": [
                                        {
                                            "meta": "99 store",
                                            "discountType": "FinalPrice",
                                            "operationType": "RESTAURANT"
                                        },
                                        {
                                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                                            "discountType": "Percentage",
                                            "operationType": "RESTAURANT"
                                        }
                                    ],
                                    "visible": true
                                },
                                "badges": {},
                                "slugString": "swasthya-cafe-malleshwaram-malleshwaram",
                                "multiOutlet": true,
                                "isOpen": true,
                                "labels": [
                                    {
                                        "title": "Timings",
                                        "message": "null"
                                    },
                                    {
                                        "title": "Address",
                                        "message": "Malleshwaram 8th Cross Market, Sampige Road, Swimming Pool Extension, Malleswaram, Bengaluru, Bangalore North, Bengaluru Urban, Karnataka, 560003, India"
                                    },
                                    {
                                        "title": "Cuisines",
                                        "message": "Chinese,South Indian"
                                    }
                                ],
                                "totalRatings": 102,
                                "aggregatedDiscountInfoV2": {
                                    "header": "Get items under 69",
                                    "shortDescriptionList": [
                                        {
                                            "meta": "99 store",
                                            "discountType": "FinalPrice",
                                            "operationType": "RESTAURANT"
                                        },
                                        {
                                            "meta": "50% off | Use TRYNEW",
                                            "discountType": "Percentage",
                                            "operationType": "RESTAURANT"
                                        }
                                    ],
                                    "descriptionList": [
                                        {
                                            "meta": "99 store",
                                            "discountType": "FinalPrice",
                                            "operationType": "RESTAURANT"
                                        },
                                        {
                                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                                            "discountType": "Percentage",
                                            "operationType": "RESTAURANT"
                                        }
                                    ],
                                    "couponDetailsCta": "View coupon details"
                                },
                                "type": "F",
                                "nudgeBanners": [
                                    {
                                        "priority": 2,
                                        "discountInfo": {
                                            "discountType": "FinalPrice",
                                            "value": 139
                                        },
                                        "unlockedMessage": "Deal of the Day unlocked!",
                                        "minItemCount": 1,
                                        "maxItemCount": 1,
                                        "type": "SILD",
                                        "nudgeTagInfo": {
                                            "title": "Deal of the Day",
                                            "fontName": "FONT_NAME_CONDENSED_BOLD"
                                        },
                                        "logoCtx": {},
                                        "movComputationType": "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE"
                                    }
                                ],
                                "headerBanner": {
                                    "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/1004521"
                                },
                                "ratingSlab": "RATING_SLAB_4",
                                "orderabilityCommunication": {
                                    "title": {},
                                    "subTitle": {},
                                    "message": {},
                                    "customIcon": {},
                                    "commsStyling": {}
                                },
                                "hasBestsellerItems": true,
                                "cartOrderabilityNudgeBanner": {
                                    "parameters": {},
                                    "presentation": {}
                                },
                                "latLong": "12.99760741207817,77.57149070796929",
                                "backgroundImageOverlayInfo": {},
                                "featuredSectionInfo": {},
                                "requestContexts": [
                                    "enable_ecosaver",
                                    "99store"
                                ],
                                "dishStyle": {
                                    "socialMarkerStyle": [
                                        {
                                            "socialMarkerType": "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                            "title": "Protein Rich",
                                            "textStyle": "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                            "textColor": "highlight"
                                        },
                                        {
                                            "socialMarkerType": "SOCIAL_MARKER_TYPE_BESTSELLER",
                                            "title": "Bestseller",
                                            "textStyle": "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                            "textColor": "color_swiggy_one"
                                        }
                                    ]
                                }
                            },
                            "analytics": {}
                        },
                        "relevance": {
                            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
                            "sectionId": "POP_UP_CROUTON_MENU"
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "layout": {
                                "rows": 1,
                                "columns": 5,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 12,
                                "lineSpacing": 10,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 10,
                                        "right": 10,
                                        "bottom": 16
                                    }
                                }
                            },
                            "id": "offerCollectionWidget_UX4",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                    "offers": [
                                        {
                                            "info": {
                                                "header": "ITEMS AT ₹69",
                                                "offerTag": "DEAL OF DAY",
                                                "offerTagColor": "#E46D47",
                                                "offerIds": [
                                                    "3e4cadcb-7caa-4c9f-8219-8b66af631326"
                                                ],
                                                "expiryTime": "1970-01-01T00:00:00Z",
                                                "description": "ON SELECT ITEMS |",
                                                "offerType": "offers",
                                                "restId": "1004521",
                                                "offerLogo": "offers/deal-of-day",
                                                "descriptionTextColor": "#7302060C"
                                            },
                                            "cta": {
                                                "type": "OFFER_HALF_CARD"
                                            }
                                        },
                                        {
                                            "info": {
                                                "header": "50% OFF UPTO ₹100",
                                                "offerTagColor": "#E46D47",
                                                "offerIds": [
                                                    "ae008c7f-0d97-4324-987a-17303eebb087"
                                                ],
                                                "expiryTime": "1970-01-01T00:00:00Z",
                                                "couponCode": "USE TRYNEW",
                                                "description": "ABOVE ₹159",
                                                "offerType": "offers",
                                                "restId": "1004521",
                                                "offerLogo": "offers/generic",
                                                "descriptionTextColor": "#7302060C",
                                                "primaryDescription": "USE TRYNEW"
                                            },
                                            "cta": {
                                                "type": "OFFER_HALF_CARD"
                                            }
                                        },
                                        {
                                            "info": {
                                                "header": "FLAT 20% OFF",
                                                "offerTag": "FLAT DEAL",
                                                "offerTagColor": "#E46D47",
                                                "offerIds": [
                                                    "16e59ea2-2011-4004-94b5-6034bf2f01f6"
                                                ],
                                                "expiryTime": "1970-01-01T00:00:00Z",
                                                "couponCode": "USE PARTY",
                                                "description": "ABOVE ₹700",
                                                "offerType": "offers",
                                                "restId": "1004521",
                                                "offerLogo": "offers/generic",
                                                "descriptionTextColor": "#7302060C",
                                                "primaryDescription": "USE PARTY"
                                            },
                                            "cta": {
                                                "type": "OFFER_HALF_CARD"
                                            }
                                        },
                                        {
                                            "info": {
                                                "header": "20% OFF UPTO ₹130",
                                                "offerTagColor": "#E46D47",
                                                "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2025/11/13/475f5384-cb1d-44b7-abd4-523fac987101_BankofBarodaMenuLogo.png",
                                                "offerIds": [
                                                    "ee585b44-8c81-4cb0-b959-ed2e9ce0b044"
                                                ],
                                                "expiryTime": "1970-01-01T00:00:00Z",
                                                "couponCode": "USE BOBDC130",
                                                "description": "ABOVE ₹499",
                                                "offerType": "offers",
                                                "restId": "1004521",
                                                "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2025/11/13/475f5384-cb1d-44b7-abd4-523fac987101_BankofBarodaMenuLogo.png",
                                                "descriptionTextColor": "#7302060C",
                                                "primaryDescription": "USE BOBDC130"
                                            },
                                            "cta": {
                                                "type": "OFFER_HALF_CARD"
                                            }
                                        },
                                        {
                                            "info": {
                                                "header": "30% OFF UPTO ₹150",
                                                "offerTag": "SAVE BIG",
                                                "offerTagColor": "#E46D47",
                                                "offerIds": [
                                                    "f09da366-071d-428d-9374-8210e22713ca"
                                                ],
                                                "expiryTime": "1970-01-01T00:00:00Z",
                                                "couponCode": "USE JUMBO",
                                                "description": "ABOVE ₹479",
                                                "offerType": "offers",
                                                "restId": "1004521",
                                                "offerLogo": "offers/save-big",
                                                "descriptionTextColor": "#7302060C",
                                                "primaryDescription": "USE JUMBO"
                                            },
                                            "cta": {
                                                "type": "OFFER_HALF_CARD"
                                            }
                                        }
                                    ],
                                    "habitMilestoneInfo": {
                                        "callout": {}
                                    },
                                    "loyaltyDiscoverPresentationInfo": {
                                        "logoCtx": {}
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "groupedCard": {
                        "cardGroupMap": {
                            "REGULAR": {
                                "cards": [
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                                "isPureVeg": true,
                                                "badges": {},
                                                "vegOnlyDetails": {
                                                    "imageId": "AutoVegOnly_qkjowj",
                                                    "title": "Showing only vegetarian options.",
                                                    "description": "Tap on the VEG ONLY button to turn off the setting"
                                                },
                                                "topRatedFilter": {
                                                    "attributes": {
                                                        "displayText": "Ratings 4.0+"
                                                    }
                                                },
                                                "kidsCategoryFilter": {
                                                    "attributes": {
                                                        "displayText": "Kids Favourites",
                                                        "tooltip": {
                                                            "enabled": true,
                                                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                                                        }
                                                    }
                                                },
                                                "vegFilter": {
                                                    "attributes": {
                                                        "displayText": "VEG"
                                                    }
                                                },
                                                "nonvegFilter": {
                                                    "attributes": {
                                                        "displayText": "NONVEG"
                                                    }
                                                }
                                            },
                                            "relevance": {
                                                "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                                                "sectionId": "MENU_FILTER_TOGGLE"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Breakfast",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346154",
                                                                "name": "Vada",
                                                                "category": "Breakfast",
                                                                "description": "Soft on the inside and crispy on the outside vada that will leave you wanting for more.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/20/8e592c20-620d-4ba2-853e-dee045e8d5af_e0884130-4c6e-42fd-911f-bd8eda1f5501.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 6600,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131841"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346158",
                                                                "name": "Rava idli [1]",
                                                                "category": "Breakfast",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/20/c9377f73-7996-4b3e-b55a-46165c8f907f_a3e067db-854e-41f9-ac09-be8720ee6a77.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131817"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346159",
                                                                "name": "Idli [1] Vada [1]",
                                                                "category": "Breakfast",
                                                                "description": "A classic South Indian breakfast combo of soft, fluffy idlis paired with crispy, savory vadas.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/20/9d6001a2-f666-4f06-aba8-55dd7c3422a9_840b4d38-f995-49ba-98a4-5f9b993352e6.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 10800,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.9",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131752"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346160",
                                                                "name": "Idli [2] Vada [1]",
                                                                "category": "Breakfast",
                                                                "description": "a type of savory rice cake, originating from the Indian subcontinent & Indulge in the perfect combination of our soft and fluffy idli and crispy Medu Vada. Served with coconut chutney and sambar",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/171e4148-72af-424d-817e-4f39d34a8452_4537031d-ccb6-41ea-9695-138ab2458340.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 12200,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.1",
                                                                        "ratingCount": "5 ratings",
                                                                        "ratingCountV2": "5"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131754"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346166",
                                                                "name": "Chow Chow Bath",
                                                                "category": "Breakfast",
                                                                "description": "A flavorful and hearty breakfast option with a mix of savory and sweet flavors.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/e1e48885-102d-4450-9657-ad23602a0127_5f0e04f2-3c23-4d5c-af55-0f907dc13fe5.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 12200,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "5.0",
                                                                        "ratingCount": "4 ratings",
                                                                        "ratingCountV2": "4"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994220"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346164",
                                                                "name": "Khara Bath",
                                                                "category": "Breakfast",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/f7195faa-2f2c-4703-b9ec-89ea89f6ff8f_8f004c27-7705-4074-9e22-0870e4daa1a5.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 8000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "5.0",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "105227664"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346165",
                                                                "name": "Kesari Bath",
                                                                "category": "Breakfast",
                                                                "description": "Sweet and aromatic South Indian dessert made with semolina, ghee, sugar and flavored with saffron and cardamom.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/0b37b5a4-07b0-4e3b-b8d6-e134c5e5b4a8_bbc57a32-aff2-4389-8a15-e91d338a6f1c.JPG_compressed",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "2 ratings",
                                                                        "ratingCountV2": "2"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994236"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346167",
                                                                "name": "Rice bath",
                                                                "category": "Breakfast",
                                                                "description": "A flavorsome preparation made with rice cooked in a delicious blend of masalas seasoned with Indian spices; served with chutney.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/27/ba2dd854-e30c-4798-803c-2c94a9ea1f8a_9d1caa08-bcf2-4103-9804-d296fd412dc3.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 10900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "2 ratings",
                                                                        "ratingCountV2": "2"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131821"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346169",
                                                                "name": "Bisi Bele Bath",
                                                                "category": "Breakfast",
                                                                "description": "A flavorful South Indian breakfast dish with a perfect balance of lentils, rice, and vegetables.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/a8b5fbc5-fb84-4ed0-acec-ff601555a81b_8a7cf126-3076-4e06-adbb-ee6611e24c14.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 10900,
                                                                "finalPrice": 6900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "offerTags": [
                                                                    {
                                                                        "matchText": "SILD"
                                                                    }
                                                                ],
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "itemNudgeType": "FinalPrice",
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "30 ratings",
                                                                        "ratingCountV2": "30"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "cartContext": "quick_prep",
                                                                "offerIds": [
                                                                    "3e4cadcb-7caa-4c9f-8219-8b66af631326"
                                                                ],
                                                                "isNinetyninestoreItem": true,
                                                                "parentId": "89994218"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346173",
                                                                "name": "Poori Bhaji",
                                                                "category": "Breakfast",
                                                                "description": "Crispy fried bread served with a flavorful and aromatic vegetable curry.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/d243a9a0-56d2-4b44-8b98-942085326d9f_8c50ad12-b6ef-4e2d-a236-3502f8c79d2e.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 12200,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.4",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "105194694"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/20/8e592c20-620d-4ba2-853e-dee045e8d5af_e0884130-4c6e-42fd-911f-bd8eda1f5501.jpg",
                                                "categoryId": "56069188"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Dosa",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346185",
                                                                "name": "Ghee Plain Dosa",
                                                                "category": "Dosa",
                                                                "description": "A traditional South Indian favorite made with clarified butter, perfect for breakfast or anytime snack.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/b7fa9938-4d9e-4225-bbfc-ec9a9b4c0daa_6a63a235-5a8e-43dd-8d57-b0733fe1ec2f.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 11500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.5",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994229"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346186",
                                                                "name": "Ghee Masala Dosa",
                                                                "category": "Dosa",
                                                                "description": "A flavorful and aromatic dosa filled with a rich and buttery ghee masala filling.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/b7fa9938-4d9e-4225-bbfc-ec9a9b4c0daa_6a63a235-5a8e-43dd-8d57-b0733fe1ec2f.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 13000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.6",
                                                                        "ratingCount": "8 ratings",
                                                                        "ratingCountV2": "8"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994227"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346187",
                                                                "name": "Ghee Set Dosa",
                                                                "category": "Dosa",
                                                                "description": "Soft and fluffy dosas cooked to perfection with a rich and flavorful touch of ghee.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/a53be205-f667-407c-ba7c-ff1fe7058ff8_601391a3-82da-4049-8bd3-4fc67af19c99.JPG_compressed",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 13000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994231"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346188",
                                                                "name": "Ghee Onion Dosa",
                                                                "category": "Dosa",
                                                                "description": "A flavorful and aromatic dosa made with rich ghee and caramelized onions.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/03a30716-a66e-4765-978f-2853b3a617a6_005a7896-70df-45cb-a579-53a6d725d4fc.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 14500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "1 rating",
                                                                        "ratingCountV2": "1"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994228"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346189",
                                                                "name": "Ghee Open Butter Masala Dosa",
                                                                "category": "Dosa",
                                                                "description": "A savory dosa filled with rich ghee, creamy butter, and flavorful masala - a delicious vegetarian delight!",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/15/9e549593-0da9-4a0c-8287-85568120464f_186d427b-2d8f-4744-993e-8f21b9d82429.jpg",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 14500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "105194688"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/b7fa9938-4d9e-4225-bbfc-ec9a9b4c0daa_6a63a235-5a8e-43dd-8d57-b0733fe1ec2f.jpg",
                                                "categoryId": "56069192"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Tandoori Breads",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346251",
                                                                "name": "Plain rotti",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 5900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131810"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346252",
                                                                "name": "Butter rotti",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131716"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346253",
                                                                "name": "Kulcha",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 5900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131761"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346254",
                                                                "name": "Buttere kulcha",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131712"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346255",
                                                                "name": "Naan",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131782"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346256",
                                                                "name": "Butter naan",
                                                                "category": "Tandoori Breads",
                                                                "description": "North Indian bread with a generous serving of butter that tastes brilliant when paired with a gravy.",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131715"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346257",
                                                                "name": "Garlic naan",
                                                                "category": "Tandoori Breads",
                                                                "description": "North Indian bread with a rich undertone of garlic that tastes brilliant when paired with a gravy.",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131740"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346258",
                                                                "name": "Stuffed kulcha",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131833"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346259",
                                                                "name": "Pudina rotti",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131814"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346260",
                                                                "name": "Methi rotti",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131768"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346261",
                                                                "name": "Aloo parota",
                                                                "category": "Tandoori Breads",
                                                                "description": "A delightful and flavorful Indian stuffed flatbread perfect for a satisfying and scrumptious breakfast.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/7/b1300fb8-a88f-4610-9d06-a7ff3efcbad5_89dc7372-f953-42ca-b324-4a51db5f38f4.jpg_compressed",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 11500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131696"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346262",
                                                                "name": "Lachha parota",
                                                                "category": "Tandoori Breads",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 11500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131762"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346263",
                                                                "name": "Amrusthara kulcha",
                                                                "category": "Tandoori Breads",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/7/e2e5e344-e09c-40e4-80cb-a371b1be8212_1cd392ed-0d81-48e6-8ca7-d4210a9ac2f5.jpg_compressed",
                                                                "inStock": 1,
                                                                "isVeg": 1,
                                                                "price": 11500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131698"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/1/7/b1300fb8-a88f-4610-9d06-a7ff3efcbad5_89dc7372-f953-42ca-b324-4a51db5f38f4.jpg_compressed",
                                                "categoryId": "56069199"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Meals Red Combos",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346176",
                                                                "name": "Curd Rice",
                                                                "category": "Meals Red Combos",
                                                                "description": "Creamy and comforting rice dish mixed with tangy curd, a perfect blend of flavors.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/13/ff3d58e2-94e0-4651-a4f5-c20053f68dcd_2f8aa387-7ed9-44b4-bf9f-ae0ab6302f61.JPG",
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "91292712"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346177",
                                                                "name": "Roti Curry",
                                                                "category": "Meals Red Combos",
                                                                "description": "A fragrant and flavorful Indian curry served with crispy, golden-brown roti bread.",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "105227666"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "174354070",
                                                                "name": "North Meal",
                                                                "category": "Meals Red Combos",
                                                                "description": "A hearty and nourishing combination of flavors from the north, perfect for a satisfying meal.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/15/9f39ed5e-dc21-4147-86be-e5c08636306e_95ab17a0-50f1-4b9b-bd07-7db5d4c47885.jpg",
                                                                "isVeg": 1,
                                                                "price": 21500,
                                                                "finalPrice": 13900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "offerTags": [
                                                                    {
                                                                        "matchText": "SILD"
                                                                    }
                                                                ],
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "itemNudgeType": "FinalPrice",
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.5",
                                                                        "ratingCount": "8 ratings",
                                                                        "ratingCountV2": "8"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "cartContext": "quick_prep",
                                                                "offerIds": [
                                                                    "1dc617c0-a0a7-430d-a781-04a944e3a6e2"
                                                                ],
                                                                "isNinetyninestoreItem": true,
                                                                "parentId": "105227665"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "174354206",
                                                                "name": "Mini Meal",
                                                                "category": "Meals Red Combos",
                                                                "description": "A satisfying non-veg combo of flavors and textures in every bite.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/15/7240bb0c-4c2e-4b48-9416-c41d660566ae_d916ed6a-ddac-4859-9fa9-83c75a764e81.jpg",
                                                                "isVeg": 1,
                                                                "price": 10100,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.9",
                                                                        "ratingCount": "4 ratings",
                                                                        "ratingCountV2": "4"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994240"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "176382558",
                                                                "name": "South Meals",
                                                                "category": "Meals Red Combos",
                                                                "description": "A flavorful and hearty assortment of southern-inspired vegetarian dishes that will satisfy your cravings.",
                                                                "isVeg": 1,
                                                                "price": 21500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131830"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/8/13/ff3d58e2-94e0-4651-a4f5-c20053f68dcd_2f8aa387-7ed9-44b4-bf9f-ae0ab6302f61.JPG",
                                                "categoryId": "56069190"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Roti Items",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346174",
                                                                "name": "Akki Roti",
                                                                "category": "Roti Items",
                                                                "description": "A crispy and flavorful South Indian specialty made with rice flour, perfect for a satisfying meal.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/1680808a-c797-4503-9690-3f8d3d375be4_34cae6b1-7175-4b20-b1ba-b35cf74fe981.jpg",
                                                                "isVeg": 1,
                                                                "price": 11500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {
                                                                    "text": "Bestseller",
                                                                    "textColor": "#ffffff",
                                                                    "topBackgroundColor": "#d53d4c",
                                                                    "bottomBackgroundColor": "#b02331"
                                                                },
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "isBestseller": true,
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "2.8",
                                                                        "ratingCount": "4 ratings",
                                                                        "ratingCountV2": "4"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#FFF0CD",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_low",
                                                                        "ratingTextColor": "rating_low",
                                                                        "ratingCountTextColor": "rating_low",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "105194683"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/1680808a-c797-4503-9690-3f8d3d375be4_34cae6b1-7175-4b20-b1ba-b35cf74fe981.jpg",
                                                "categoryId": "56069189"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Chinese Starters",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346200",
                                                                "name": "Gobi Chilli",
                                                                "category": "Chinese Starters",
                                                                "description": "Crispy cauliflower florets tossed in a flavorful and savory sauce.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/85bb9368-96b5-4fcb-aca4-23a05d2e3962_936cfd08-353f-4655-8966-bcb79ef9ed28.jpg",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994232"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346201",
                                                                "name": "Gobi Pepper Dry",
                                                                "category": "Chinese Starters",
                                                                "description": "Crispy cauliflower florets tossed in a flavorful pepper-infused sauce, a perfect appetizer for your Chinese meal.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/1bd8075f-c420-4b3f-a941-2dffd849af82_883d1670-fffc-4557-bb70-8a1678e26d63.JPG_compressed",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994235"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346202",
                                                                "name": "Mushroom manchurian",
                                                                "category": "Chinese Starters",
                                                                "description": "Deliciously seasoned and crispy, this veggie snack bursts with flavorful mushrooms to satisfy your savory cravings.",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.0",
                                                                        "ratingCount": "1 rating",
                                                                        "ratingCountV2": "1"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994243"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346203",
                                                                "name": "Mushroom chilli",
                                                                "category": "Chinese Starters",
                                                                "description": "Delectable mushrooms cooked in a spicy and tasty chilli sauce - perfect dish to satisfy your cravings.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/1db3e84e-ba4d-4cc4-beee-c0b22459ad7f_0b5cb0ce-2a82-412a-9238-bcfa8a3c32ff.jpg",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994241"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346199",
                                                                "name": "Gobi manchurian",
                                                                "category": "Chinese Starters",
                                                                "description": "Deep-fried, crispy cauliflower florets tossed in a thick and spicy Manchurian gravy.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/60359cc0-bd0a-456b-a146-1de70faea8d5_a3f498d2-8322-4d9c-9991-f267278d70d8.JPG_compressed",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "3.6",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#D9EFEC",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_medium",
                                                                        "ratingTextColor": "rating_medium",
                                                                        "ratingCountTextColor": "rating_medium",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994234"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346204",
                                                                "name": "Mushroom peper dry",
                                                                "category": "Chinese Starters",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131775"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346205",
                                                                "name": "Baby corn manchurian",
                                                                "category": "Chinese Starters",
                                                                "description": "A delightfully tasty dish with crunchy baby corn coated in Manchurian sauces, assorted spices and tossed with veggies.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/27/a8f4cfb1-8b74-4833-9250-c23ece978405_5648afc9-7c6d-44f9-a8a2-96bab2c23dfb.jpg_compressed",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131703"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346206",
                                                                "name": "Baby corn chilli",
                                                                "category": "Chinese Starters",
                                                                "description": "Tender corn dipped in a seasoned batter, deep fried and tossed in a spicy chilli-based sauce.",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131701"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346207",
                                                                "name": "Baby corn peper dry",
                                                                "category": "Chinese Starters",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/27/7ef8ebb1-a24b-45bb-a405-cd2b9805a2ed_34b139bc-c4e1-4476-b29e-99f1d88e3aab.jpg",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131705"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346208",
                                                                "name": "American corn salt and peper",
                                                                "category": "Chinese Starters",
                                                                "isVeg": 1,
                                                                "price": 20500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131697"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346209",
                                                                "name": "Paneer Manchurian",
                                                                "category": "Chinese Starters",
                                                                "description": "Tender paneer cubes coated in a tangy and flavorful sauce, a perfect fusion of Chinese and Indian flavors.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/1b182bd1-22ed-4b5e-bfae-119dbd6e5964_06b0fd53-d042-4306-869f-fe45d97a159c.JPG_compressed",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "5.0",
                                                                        "ratingCount": "1 rating",
                                                                        "ratingCountV2": "1"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994248"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346210",
                                                                "name": "Paneer chill",
                                                                "category": "Chinese Starters",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/22/7fb2a1e7-5e81-4d83-a73f-8252dc06565d_d4a462bf-152e-4651-b507-894ef8d15a92.JPG",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131793"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346211",
                                                                "name": "Paneer peper dry",
                                                                "category": "Chinese Starters",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131798"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346212",
                                                                "name": "Chilli potato",
                                                                "category": "Chinese Starters",
                                                                "description": "A delectable Chinese starter featuring crispy potatoes tossed in a delightful blend of flavors.",
                                                                "isVeg": 1,
                                                                "price": 18900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131725"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346213",
                                                                "name": "French fries",
                                                                "category": "Chinese Starters",
                                                                "description": "Deep-fried potato wedges, best had with some tangy tomato ketchup.",
                                                                "isVeg": 1,
                                                                "price": 14500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131736"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/85bb9368-96b5-4fcb-aca4-23a05d2e3962_936cfd08-353f-4655-8966-bcb79ef9ed28.jpg",
                                                "categoryId": "56069193"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Noodles",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346214",
                                                                "name": "Veg Noodles",
                                                                "category": "Noodles",
                                                                "description": "A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/d3898f03-de0e-44cb-ac09-c67d35d33815_c264ed30-7430-43ab-9bd6-3aa8b4e18a61.jpg",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.5",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994270"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346215",
                                                                "name": "Paneer Noodles",
                                                                "category": "Noodles",
                                                                "description": "Creamy paneer mixed with flavorful noodles, a delightful vegetarian twist on a classic favorite.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/d3898f03-de0e-44cb-ac09-c67d35d33815_c264ed30-7430-43ab-9bd6-3aa8b4e18a61.jpg",
                                                                "isVeg": 1,
                                                                "price": 20500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "2 ratings",
                                                                        "ratingCountV2": "2"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131795"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346216",
                                                                "name": "Mushroom Noodles",
                                                                "category": "Noodles",
                                                                "description": "Savory mushrooms mixed with tender noodles in a flavorful sauce.",
                                                                "isVeg": 1,
                                                                "price": 20500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131773"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346217",
                                                                "name": "Baby Corn Noodles",
                                                                "category": "Noodles",
                                                                "description": "Delight in a savory combination of tender baby corn and flavorful noodles.",
                                                                "isVeg": 1,
                                                                "price": 20500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131704"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346218",
                                                                "name": "Veg Schezwan Noodles",
                                                                "category": "Noodles",
                                                                "description": "A flavorful and aromatic noodle dish with a perfect blend of vegetables and bold flavors.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/0698969b-2b97-43d6-93c6-0f084bcd9df8_d8688a3e-8fb3-4ed9-99de-fce171e29043.jpg",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131850"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346219",
                                                                "name": "Paneer Schezwan Noodles",
                                                                "category": "Noodles",
                                                                "description": "A flavorful and savory combination of soft paneer with stir-fried noodles in a delicious Schezwan sauce.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "4.0",
                                                                        "ratingCount": "1 rating",
                                                                        "ratingCountV2": "1"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#C8F9E5",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_very_good",
                                                                        "ratingTextColor": "rating_very_good",
                                                                        "ratingCountTextColor": "rating_very_good",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131800"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346220",
                                                                "name": "Mushroom Schezwan Noodles",
                                                                "category": "Noodles",
                                                                "description": "Delight in the flavorful fusion of vegetables, savory mushrooms, and rich Schezwan sauce, all tossed with perfectly cooked noodles in this tantalizing veggie noodle special.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131777"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346221",
                                                                "name": "Baby Corn Schezwan Noodles",
                                                                "category": "Noodles",
                                                                "description": "A flavorful blend of tender baby corn and savory noodles tossed in a delicious Schezwan sauce.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131707"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346222",
                                                                "name": "Ginger Garlic Noodles",
                                                                "category": "Noodles",
                                                                "description": "A flavorful blend of ginger and garlic infused noodles that are sure to tantalize your taste buds.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131742"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346223",
                                                                "name": "Butter Garlic Noodles",
                                                                "category": "Noodles",
                                                                "description": "Delicious noodles coated in a rich buttery garlic sauce.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131714"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346224",
                                                                "name": "Chill Garlic Noodles",
                                                                "category": "Noodles",
                                                                "description": "A flavorful and fragrant noodle dish featuring a perfect balance of garlic and savory seasonings.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/13/c756f1eb-ef64-47f3-96d6-4d12ff821aab_5a729c3d-7423-4db7-ac4f-d5f6a33502e9.JPG",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131724"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/16/d3898f03-de0e-44cb-ac09-c67d35d33815_c264ed30-7430-43ab-9bd6-3aa8b4e18a61.jpg",
                                                "categoryId": "56069194"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Salads",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346225",
                                                                "name": "Green Salad",
                                                                "category": "Salads",
                                                                "description": "A refreshing mix of crisp greens and vibrant vegetables, tossed in a light and flavorful dressing.",
                                                                "isVeg": 1,
                                                                "price": 14500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131746"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "categoryId": "56069195"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "North Starters",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346241",
                                                                "name": "Masala papad",
                                                                "category": "North Starters",
                                                                "description": "Thin crispy disc shaped papadum topped with finally chopped onion,tomato, cucumber, green chilly. Garnish with coriander leaves.",
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131765"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346242",
                                                                "name": "Fried papad",
                                                                "category": "North Starters",
                                                                "description": "Crispy and flavorsome, this veg delight will satisfy your craving for a delectable Papad dish.",
                                                                "isVeg": 1,
                                                                "price": 5900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131739"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346243",
                                                                "name": "Roasted papad",
                                                                "category": "North Starters",
                                                                "description": "A delightful and flavorful roasted dish that will tantalize your taste buds with its unique blend of spices and textures.",
                                                                "isVeg": 1,
                                                                "price": 5900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131822"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346244",
                                                                "name": "Paneer pakoda",
                                                                "category": "North Starters",
                                                                "description": "Crispy and flavorful, these golden-fried bites offer a delightful start to your meal.",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131796"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346245",
                                                                "name": "Panjabi paneer tikka",
                                                                "category": "North Starters",
                                                                "description": "Serves 4 to 5 pieces",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131803"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346246",
                                                                "name": "Hara masala bhuna paneer tikka",
                                                                "category": "North Starters",
                                                                "description": "Serves 4 to 5 pieces",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131750"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346247",
                                                                "name": "Japrani paneer tikka",
                                                                "category": "North Starters",
                                                                "description": "Serves 4 to 5 pieces",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131756"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346248",
                                                                "name": "Hara bara kebab",
                                                                "category": "North Starters",
                                                                "description": "Delicious Northindain Appetizer Cum Snack Greeny Patties Mix With Veggies And Peas And Mashed Potato Shalow Fried,8 Pcs, Spice Level - Moderate, Serves 2",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131749"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346249",
                                                                "name": "Shabji cheese seek kebab",
                                                                "category": "North Starters",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131829"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346250",
                                                                "name": "Mushroom tikka",
                                                                "category": "North Starters",
                                                                "description": "Button Mushroom Marinated in yoghurt based paste along with seasoning and grilled in tandoor",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131779"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "categoryId": "56069198"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "North Indian Gravy",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346264",
                                                                "name": "Dal fry",
                                                                "category": "North Indian Gravy",
                                                                "description": "A comforting and delicious preparation made with mixed daal cooked and tempered with onions, chillies and more in pure ghee.",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131730"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346265",
                                                                "name": "Dal tadka",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131734"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346266",
                                                                "name": "Dal palak",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131733"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346267",
                                                                "name": "Dal makhani",
                                                                "category": "North Indian Gravy",
                                                                "description": "A decadently indulgent dish prepared by cooking black lentil and red kidney beans in a cream and butter based gravy.",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131732"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346268",
                                                                "name": "Veg malai kofta",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131848"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346269",
                                                                "name": "Veg kolapuri",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131847"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346270",
                                                                "name": "Veg do pyaza",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131844"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346271",
                                                                "name": "Veg hyderabadi",
                                                                "category": "North Indian Gravy",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/15/5e69f373-5dd1-4f47-a36c-d41f771da077_6f9228aa-79b7-4c8b-abe1-aeb377fa93bc.JPG",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131846"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346272",
                                                                "name": "Mix veg curry",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131769"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346274",
                                                                "name": "Palak paneer",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131789"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346275",
                                                                "name": "Paneer butter masala",
                                                                "category": "North Indian Gravy",
                                                                "description": "A delightfully wholesome combo with soft roti (3pcs); served along with paneer butter masala, fryums and onion.",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131792"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346276",
                                                                "name": "Paneer tikka masala",
                                                                "category": "North Indian Gravy",
                                                                "description": "Serves 4 to 5 pieces",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131801"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346277",
                                                                "name": "Kadai paneer",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131757"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346278",
                                                                "name": "Capscicum masal",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131719"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346280",
                                                                "name": "Plain palak",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131809"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346281",
                                                                "name": "Channa masala",
                                                                "category": "North Indian Gravy",
                                                                "description": "A flavorful and aromatic Indian curry bursting with savory flavors and a delightful blend of spices.",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131722"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346282",
                                                                "name": "Aloo gobi masala",
                                                                "category": "North Indian Gravy",
                                                                "isVeg": 1,
                                                                "price": 26000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131695"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346283",
                                                                "name": "Mushroom do pyaza",
                                                                "category": "North Indian Gravy",
                                                                "description": "A savory and delightful vegetarian main course that brings out the rich flavors of mushrooms without being overpowering.",
                                                                "isVeg": 1,
                                                                "price": 27500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131772"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/7/15/5e69f373-5dd1-4f47-a36c-d41f771da077_6f9228aa-79b7-4c8b-abe1-aeb377fa93bc.JPG",
                                                "categoryId": "56069200"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Swasthya Cafe Special North Indian Gravy",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346284",
                                                                "name": "Swasthya cafe special danching kadayi jodhpoori",
                                                                "category": "Swasthya Cafe Special North Indian Gravy",
                                                                "description": "3 V Capsicum Zukuni Leeks Brocali Baby Corn",
                                                                "isVeg": 1,
                                                                "price": 32000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131834"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346285",
                                                                "name": "Swasthya cafe special danching kadayi makni",
                                                                "category": "Swasthya Cafe Special North Indian Gravy",
                                                                "description": "3 V Capsicum Zukuni Leeks Brocali Baby Corn",
                                                                "isVeg": 1,
                                                                "price": 32000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131835"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "categoryId": "56069201"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "North Rice",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346286",
                                                                "name": "Dal kichdi",
                                                                "category": "North Rice",
                                                                "description": "Delicious and healthy blend of lentils, rice, and spices",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/12/6b5d9efc-d3ee-4a6a-bb0a-dddd25b4d9e8_13a8b15e-244e-47e2-8d88-83fa8b8455da.JPG",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {
                                                                        "rating": "2.6",
                                                                        "ratingCount": "3 ratings",
                                                                        "ratingCountV2": "3"
                                                                    },
                                                                    "ratingsPresentationConfig": {
                                                                        "bgGradient": {
                                                                            "colours": [
                                                                                "#FFF0CD",
                                                                                "#00FFFFFF"
                                                                            ],
                                                                            "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                        },
                                                                        "ratingIconColor": "rating_low",
                                                                        "ratingTextColor": "rating_low",
                                                                        "ratingCountTextColor": "rating_low",
                                                                        "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                    }
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131731"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346287",
                                                                "name": "Palak kichdi",
                                                                "category": "North Rice",
                                                                "description": "Palak khichdi recipe made with rice, dal , palak and spices is a super comforting one pot indian meal.",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/15/56cd6217-0e45-495c-bd49-e2237c58f3ae_9ef30628-6be2-4d4d-b4d7-77ea2b93c4fd.JPG",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131788"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346288",
                                                                "name": "Sabhudana kichidi",
                                                                "category": "North Rice",
                                                                "description": "Healthy sabudana cooked in amazing spices, making a best meal when you are fasting",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131824"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346289",
                                                                "name": "Veg pulao",
                                                                "category": "North Rice",
                                                                "description": "A wholesome dish prepared by cooking chopped vegetables and rice in a flavorful Indian masala.",
                                                                "isVeg": 1,
                                                                "price": 20500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "89994271"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346290",
                                                                "name": "Veg biryani",
                                                                "category": "North Rice",
                                                                "description": "A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.",
                                                                "isVeg": 1,
                                                                "price": 21900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131843"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346291",
                                                                "name": "Matar makkai methi peas pulao",
                                                                "category": "North Rice",
                                                                "isVeg": 1,
                                                                "price": 23000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131767"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346292",
                                                                "name": "Paneer biryani",
                                                                "category": "North Rice",
                                                                "description": "Soft paneer cubes and flavored rice slow cooked in a delicious mix of Indian masala flavored with aromatic spices.",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131790"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346293",
                                                                "name": "Jeera rice",
                                                                "category": "North Rice",
                                                                "description": "Aromatic rice cooked in a tempering of cumin and whole spices.",
                                                                "isVeg": 1,
                                                                "price": 29000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "93082846"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346295",
                                                                "name": "Ghee rice",
                                                                "category": "North Rice",
                                                                "description": "Ghee rice slender basmati rice tossed up with generous amount of ghee, whole spices & nuts. Try our simple and quick-to-cook ghee rice.",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "93018313"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346296",
                                                                "name": "Steem rice",
                                                                "category": "North Rice",
                                                                "isVeg": 1,
                                                                "price": 14500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131831"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/6/12/6b5d9efc-d3ee-4a6a-bb0a-dddd25b4d9e8_13a8b15e-244e-47e2-8d88-83fa8b8455da.JPG",
                                                "categoryId": "56069202"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Fresh Juice",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346313",
                                                                "name": "Fresh lime soda",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131738"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346316",
                                                                "name": "Fresh lime juice",
                                                                "category": "Fresh Juice",
                                                                "description": "200ml",
                                                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/13/97c881ef-a8c4-4452-a273-a17f03b0a504_a17ee6d3-09de-46b2-a456-1e7ecdf5fc14.JPG",
                                                                "isVeg": 1,
                                                                "price": 7500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131737"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346319",
                                                                "name": "Salt lassie",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131825"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346321",
                                                                "name": "Sweet lassie",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 8900,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131837"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346323",
                                                                "name": "Musambi",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131770"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346326",
                                                                "name": "Pineapple",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131806"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346331",
                                                                "name": "Watermelon",
                                                                "category": "Fresh Juice",
                                                                "isVeg": 1,
                                                                "price": 10000,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131851"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "image": "FOOD_CATALOG/IMAGES/CMS/2025/8/13/97c881ef-a8c4-4452-a273-a17f03b0a504_a17ee6d3-09de-46b2-a456-1e7ecdf5fc14.JPG",
                                                "categoryId": "56069204"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                "title": "Milkshakes",
                                                "itemCards": [
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346334",
                                                                "name": "Apple",
                                                                "category": "Milkshakes",
                                                                "description": "A Refreshing And Invigorating Blend Of Freshly Pressed Apples, Bursting With Natural Sweetness And Flavor",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131699"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346350",
                                                                "name": "Vanilla",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131842"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346352",
                                                                "name": "Chocolate",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131726"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346354",
                                                                "name": "Straberry",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131832"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346357",
                                                                "name": "Butterstoch",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131717"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346359",
                                                                "name": "Pistashake",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131807"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346362",
                                                                "name": "Kesari pista",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131760"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346364",
                                                                "name": "Blackcurrant",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131711"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346365",
                                                                "name": "Cold coffe",
                                                                "category": "Milkshakes",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131727"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    },
                                                    {
                                                        "card": {
                                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                            "info": {
                                                                "id": "157346367",
                                                                "name": "Oreo milkshake",
                                                                "category": "Milkshakes",
                                                                "description": "A crunchy and creamy milkshake made by blending milk with Oreo cookies.",
                                                                "isVeg": 1,
                                                                "price": 17500,
                                                                "variants": {},
                                                                "variantsV2": {},
                                                                "nextAvailableAtMessage": "Next available at 7 am, tomorrow",
                                                                "itemAttribute": {
                                                                    "vegClassifier": "VEG"
                                                                },
                                                                "ribbon": {},
                                                                "type": "ITEM",
                                                                "itemBadge": {},
                                                                "badgesV2": {},
                                                                "ratings": {
                                                                    "aggregatedRating": {}
                                                                },
                                                                "itemPriceStrikeOff": true,
                                                                "parentId": "94131786"
                                                            },
                                                            "analytics": {},
                                                            "hideRestaurantDetails": true
                                                        }
                                                    }
                                                ],
                                                "subtitleSuffix": {},
                                                "categoryId": "56069205"
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                                                "type": "FSSAI",
                                                "imageId": "fssai_final_edss9i",
                                                "text": [
                                                    "License No. 11224331001964"
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "card": {
                                            "card": {
                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                                "name": "Swasthya Cafe",
                                                "area": "Malleshwaram",
                                                "completeAddress": "Malleshwaram 8th Cross Market, Sampige Road, Swimming Pool Extension, Malleswaram, Bengaluru, Bangalore North, Bengaluru Urban, Karnataka, 560003, India"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "firstOffsetRequest": true,
            "isQCLink": false
        },
        "tid": "6207f5dc-812d-40cc-92ca-3e66c3267cc7",
        "sid": "o9lc8b80-165b-4111-ac45-5890a90fa46e",
        "deviceId": "1d67de59-da83-bfb4-ffc6-d64901a6c91a",
        "csrfToken": "4mEKns6SdThW-z_-_eheCc5zatmwCymhJ8KkLJzw"
    }

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        // const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=2415&catalog_qa=undefined&submitAction=ENTER');

        // console.log(response);
        // const restData = await response.json();
        // console.log(restData);
        setRestInfo(restData);
        const menu = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredMenu = menu.filter(dish => {
            const card = dish?.card?.card;
            return card.hasOwnProperty("itemCards") || card.hasOwnProperty("categories");
        });
        setMenuInfo(filteredMenu);
    }
    return restInfo === null || menuInfo == null ? (<ShimmerUI />) : (<div className="rest-menu-container flex flex-col">
        <div className="m-10 pl-2 flex flex-col gap-6 items-center">
            <h1 className="font-bold text-3xl text-blue-400">{restInfo?.data?.cards[0]?.card?.card?.text}</h1>

            <div className="Tabs font-bold text-xl">
                {
                    restInfo?.data?.cards[1]?.card?.card?.tabs.map((tab) => (
                        <div key={tab.id}>{tab.title}</div>
                    ))
                }
            </div>

            <div className="rest-info-card text-xl text-center">
                <div>
                    <span>4.7 (86K+ ratings) - 100 for two</span>
                </div>

                <div>South indian, cafe etc.</div>

                <div>Outlet Malleshwaram</div>

                <div>30-35 mins</div>
            </div>
        </div>
        

        <div className="rest-menu m-4 w-full">
            {
                menuInfo.map((menu) => {
                    const card = menu?.card?.card;
                    if (card.itemCards) {
                        return (
                            <Accordion key={card.categoryId} title={card.title} itemCards={card.itemCards} titleClass="font-bold text-lg" />
                        )
                    } else {
                        return (
                            <div key={card.categoryId}>
                                <h2>{card.title}</h2>

                                {
                                    card.categories.map((category) => {
                                        return (
                                            <Accordion key={category.categoryId} title={category.title} itemCards={category.itemCards} titleClass="font-normal text-base" />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </div>

    </div>)

}

export default RestaurantMenu;