const resList = [
  {
    "data": {
      "id": "121603",
      "name": "Kannur Food Point",
      "costForTwo": 30000,
      "deliveryTime": 24,
      "avgRating": "3.9",
      "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
      "cuisines": ["Kerala", "North Indian", "South Indian"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "229",
      "name": "Meghana Foods",
      "costForTwo": 50000,
      "deliveryTime": 16,
      "avgRating": "4.4",
      "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
      "cuisines": ["Biryani", "Andhra", "South Indian", "Seafood"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "428",
      "name": "Biryani Pot",
      "costForTwo": 50000,
      "deliveryTime": 19,
      "avgRating": "3.9",
      "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
      "cuisines": ["Biryani", "North Indian", "Kebab"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "223",
      "name": "Truffles",
      "costForTwo": 45000,
      "deliveryTime": 30,
      "avgRating": "4.4",
      "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
      "cuisines": ["Desserts", "Beverages", "American", "Continental"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "425",
      "name": "Hotel Empire",
      "costForTwo": 45000,
      "deliveryTime": 23,
      "avgRating": "4.1",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "cuisines": ["North Indian", "South Indian", "Biryani", "Arabian"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "201224",
      "name": "Asha tiffins",
      "costForTwo": 20000,
      "deliveryTime": 26,
      "avgRating": "4.4",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "cuisines": ["South Indian", "Tiffins", "Snacks"] // Added cuisines
    }
  },
  {
    "data": {
      "id": "59593",
      "name": "Al Daaz",
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 36,
      "avgRating": "4.3",
      "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
      "cuisines": ["American", "Arabian", "Chinese", "Desserts", "Mughlai", "North Indian"],
      "area": "Hsr Layout",
      "discount": null // No specific aggregated discount mentioned for this restaurant
    }
  },
  {
    "data": {
      "id": "56589",
      "name": "Roti-Wala",
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 37,
      "avgRating": "4.2",
      "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
      "cuisines": ["North Indian", "Home Food", "Thalis", "Chinese", "Punjabi"],
      "area": "BTM Layout",
      "discount": "40% OFF" // Extracted from aggregatedDiscountInfoV2
    }
  },
  {
    "data": {
      "id": "560153",
      "name": "Rice Bowl",
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 22,
      "avgRating": "4.1",
      "cloudinaryImageId": "z2ahvclpmdv6lekyth39",
      "cuisines": ["North Indian", "South Indian"],
      "area": "Koramangala",
      "discount": "₹125 OFF"
    }
  },
  {
    "data": {
      "id": "337335",
      "name": "Kannur food kitchen",
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 24,
      "avgRating": "3.8",
      "cloudinaryImageId": "a27weqanhnszqiuzsoik",
      "cuisines": ["Kerala", "Biryani", "Beverages"],
      "area": "BTM Layout",
      "discount": "50% OFF"
    }
  },
  {
    "data": {
      "id": "601",
      "name": "Litti Twist",
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 28,
      "avgRating": "4.2",
      "cloudinaryImageId": "zyahkuhlgnxp3prkvttv",
      "cuisines": ["North Indian"],
      "area": "Btm Layout",
      "discount": "50% OFF"
    }
  },
  {
    "data": {
      "id": "256957",
      "name": "Shanmukha Restaurant",
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 36,
      "avgRating": "4.1",
      "cloudinaryImageId": "c5howge9hbdor7uqf949",
      "cuisines": ["Biryani", "Hyderabadi", "Andhra", "North Indian", "South Indian"],
      "area": "Jayanagar",
      "discount": "50% OFF"
    }
  },
  {
    "data": {
      "id": "642459",
      "name": "Malnad Donne Biryani MDB",
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 36,
      "avgRating": "3.9",
      "cloudinaryImageId": "tjw67zgzfehxgfo1vio2",
      "cuisines": ["Biryani", "South Indian", "Kebabs"],
      "area": "Jayanagar",
      "discount": "40% OFF"
    }
  },
  {
    "data": {
      "id": "27643",
      "name": "Ultimate Parathas",
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "avgRating": "4.2",
      "cloudinaryImageId": "m0bjo1ds8l6o4civx6ek",
      "cuisines": ["Bihari", "North Indian", "Desserts"],
      "area": "Btm Layout",
      "discount": "50% OFF"
    }
  },
  {
    "data": {
      "id": "42294",
      "name": "Udupi Palace",
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 30,
      "avgRating": "4.2",
      "cloudinaryImageId": "dbfp4mqtidbjh9sectlk",
      "cuisines": ["Beverages", "Biryani", "Chinese", "Desserts", "North Indian", "South Indian"],
      "area": "HSR Layout",
      "discount": "20% OFF"
    }
  }
];

export default resList;