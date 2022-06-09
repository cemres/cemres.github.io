const menuData = [
  {
    name: "Hamburger",
    image_url: "https://www.soke.com.tr/Files/tarifler/HamburgerEkmegi3.jpg",
    category: "Fastfood",
    price: 4.95,
  },
  {
    name: "Cheeseburger",
    image_url:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2019/06/cheeseburger-tarifi.jpg",
    category: "Fastfood",
    price: 5.3,
  },
  {
    name: "Double Burger",
    image_url:
      "https://bonet.com.tr/dosyalar/2021/6/doublegurmeburger-43157-11518.jpg.webp",
    category: "Fastfood",
    price: 5.75,
  },
  {
    name: "Double Cheese Burger",
    image_url:
      "https://i.pinimg.com/736x/a2/13/7f/a2137f3f92fb33efd691b41ef0df6a31.jpg",
    category: "Fastfood",
    price: 6.4,
  },
  {
    name: "Bacon Cheese Burger",
    image_url:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/1/FNM_060110-Insert-017_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591466674.jpeg",
    category: "Fastfood",
    price: 6.2,
  },
  {
    name: "Patty Melt",
    image_url:
      "https://www.simplyrecipes.com/thmb/sLo167_X-hNJUAghVLVi11KdDZ8=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__Classic-Patty-Melt-LEAD-1-d8f2fbf246974c29b3566f01a9ddee66.jpg",
    category: "Fastfood",
    price: 6,
  },
  {
    name: "Pizza Margarita",
    image_url:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/09/pizza-margherita-tarifi-yeni-2018.jpg",
    category: "Fastfood",
    price: 5.99,
  },
  {
    name: "Pizza Peperoni",
    image_url:
      "https://i.nefisyemektarifleri.com/2019/05/14/pepperoni-nedir-hangi-etten-nasil-yapilir-600x400.jpg",
    category: "Fastfood",
    price: 4.49,
  },
  {
    name: "Pizza Vegeterian",
    image_url:
      "https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-5.jpg",
    category: "Fastfood",
    price: 4.45,
  },
  {
    name: "Pizza Mexicano",
    image_url:
      "https://pizzabruno.az/wp-content/uploads/2018/06/mexicano-2.jpg",
    category: "Fastfood",
    price: 6.45,
  },
  {
    name: "French Fries",
    image_url:
      "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
    category: "Fastfood",
    price: 2,
  },
  {
    name: "Hotdog",
    image_url:
      "https://londragundem.com/wp-content/uploads/2021/08/bir-hotdog-omrunuzu-36-dakika-kisaltiyor.jpg",
    category: "Fastfood",
    price: 2.5,
  },
  {
    name: "Greek Salad",
    image_url:
      "https://www.simplyrecipes.com/thmb/au60mVTA5EPLLknjdtQ9BYO0OC4=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg",
    category: "Salads",
    price: 7.5,
  },
  {
    name: "Sweet Potato Salad",
    image_url:
      "https://foodhub.scene7.com/is/image/woolworthsltdprod/2010-baked-sweet-potato-salad:Desktop-1300x658",
    category: "Salads",
    price: 6.5,
  },
  {
    name: "Ceasar Salad",
    image_url:
      "https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg",
    category: "Salads",
    price: 8.5,
  },
  {
    name: "Veggie Salad",
    image_url:
      "https://www.thewickednoodle.com/wp-content/uploads/2014/01/cs2.jpg",
    category: "Salads",
    price: 6.2,
  },
  {
    name: "Swiss Roll",
    image_url:
      "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2010/6/9/0/CCRAB109_swiss-roll_s4x3.jpg.rend.hgtvcom.616.462.suffix/1357271891035.jpeg",
    category: "Desserts",
    price: 5.2,
  },
  {
    name: "Cheesecake",
    image_url:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/6235bb6b4e3fe124fc9b3d04.jpg",
    category: "Desserts",
    price: 3.2,
  },
  {
    name: "Cherry Pie",
    image_url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cherry-crumb-pie-1632861679.jpg?crop=1.00xw:0.370xh;0,0.136xh&resize=1200:*",
    category: "Desserts",
    price: 4,
  },
  {
    name: "Cupcake",
    image_url:
      "https://www.droetker.com.tr/Recipe/Recipes/droetker.com.tr/tr-tr/baking/image-thumb__106854__RecipeDetailsLightBox/kuzu-cupcake.jpg",
    category: "Desserts",
    price: 3,
  },
  {
    name: "Donut",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/08/donut-nasil-yapilir-one-cikan.jpg",
    category: "Desserts",
    price: 5,
  },
  {
    name: "Coffee Latte",
    image_url:
      "https://www.tasocakfirin.com/image/cache/catalog/products_2021/Coffee-Latte-1000x1000.jpg",
    category: "Drinks",
    price: 4,
  },
  {
    name: "White Chocolate Mocha",
    image_url:
      "https://www.espressolab.com/Upload/Menu/Buyuk/2102020-White-Chocolate-Mocha-164058.jpg",
    category: "Drinks",
    price: 2.5,
  },
  {
    name: "Cappucino",
    image_url:
      "https://www.tasocakfirin.com/image/cache/catalog/products_2021/Aromal%C4%B1-Cappuccino-500x500.jpg",
    category: "Drinks",
    price: 2.6,
  },
  {
    name: "Coca-Cola",
    image_url:
      "https://blog.ofix.com/wp-content/uploads/2018/04/coca_cola_ofix_blog.jpg",
    category: "Drinks",
    price: 2.4,
  },
  {
    name: "Fanta",
    image_url:
      "https://www.mashed.com/img/gallery/fanta-flavors-ranked-worst-to-best/l-intro-1629386017.jpg",
    category: "Drinks",
    price: 2.4,
  },
  {
    name: "Sprite",
    image_url:
      "https://www.rewindandcapture.com/wp-content/uploads/2018/07/India-sprite-fountain.jpg",
    category: "Drinks",
    price: 2.4,
  },
  {
    name: "Pepsi",
    image_url:
      "https://www.mashed.com/img/gallery/pepsi-flavors-ranked-worst-to-best/l-intro-1631542349.jpg",
    category: "Drinks",
    price: 2.4,
  },
];

export default menuData;
