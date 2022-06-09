Live demo: https://cemres.github.io

## Kurulum
git clone [https://github.com/cemres/food-order-app.git](https://github.com/cemres/cemres.github.io.git)
cd forder-order-app

npm install

## Çalıştırma
npm run start

## Projenin Amacı
Bir restoranın menüsüne bir websitesi üzerinden erişmeyi ve yemek siparişi verebilmeyi sağlamaktır.
* Restoranın menüsü görüntülenebilmektedir
* Menü üzerinde yemek ismi ile veya kategoriye göre filtreleme yapılabilmektedir
* Menüde yemeklerin ve içeceklerin fiyatları görünebilmektedir
* Sipariş verilmek istenen içeriğin altındaki “Add to cart” buttonu ile yemek veya içecek sepete eklenebilmektedir
* Menüden seçilenler sepete eklendikten sonra, sepet görüntülenebilmektedir - değiştirilebilmektedir
* Toplam ücret ve sepete eklenen ürünler burada görülebilmektedir
* Kullanıcı sepetten emin olduktan sonra, ödeme sayfasına geçebilmektedir
* Bu sayfada da girdiği bilgilere göre bir sipariş özeti maili almaktadır.


## Kullanılan paketler
* React
* React-router: Sayfalar arasındaki geçiş için routeları belirlemede kullanıldı
* PrimeReact: Türk yazılımcılar tarafından geliştirilmiş (Primetek), React uygulamaları için bir UI component kütüphanesidir (çok geniş bir kütüphane).
* Redux: State management içim kullanıldı
* Iconify: Icon kütüphanesi
* ShortUuid: Menü itemleri için uuid oluşturmada kullanıldı
* EmailJS: Kullanıcıya sipariş özeti maili göndermek için kullanıldı
