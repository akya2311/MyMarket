import { Component } from "react";
//import Products from "../Products/Products"
import React from "react";
import "./AllProducts.scss";
//(13, 15, 'Sunflower Oil', 'Saffola  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 1 L Can', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg', 110, '1 L', '', 8),

import Loader from 'react-loader-spinner'
import Produtcs from "../Products/Products";
/*INSERT INTO `products` (`id`, `p_id`, `name`, `description`, `img`, `price`, `measurement`, `best_offer`, `category_id`) VALUES
(1, 1, 'nirama', 'Rin Refresh Detergent Powder ', 'https://www.bigbasket.com/media/uploads/p/l/299468-2_3-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80', 10, '65 gm', '', 2),
(2, 1, 'nirama', 'Rin Refresh Lemon & Rose Detergent Powder, 1 kg', 'https://www.bigbasket.com/media/uploads/p/l/267012_9-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80', 103, '1 kg', '', 2),
(3, 1, 'Rin', 'Rin Detergent Bar', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/6a9afbf1-f23e-4bc4-89db-63a73a94571b.jpg', 10, '', '', 2),
(4, 1, 'Rin', 'Rin Detergent Bar, 4x250 g Multipack', 'https://www.bigbasket.com/media/uploads/p/m/1206447_1-rin-detergent-bar.jpg?tr=w-1200,q=80', 100, '', '', 2),
(5, 1, 'Rin', 'Rin Detergent Bar, 250 g', 'https://www.bigbasket.com/media/uploads/p/l/40002072_7-rin-detergent-bar.jpg?tr=w-1080,q=80', 25, '', '', 2),
(6, 2, 'Salt, Mith', 'Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80', 24, '1 Kg', '', 7),
(7, 2, 'Salt, Mith', 'Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80', 55, '2 Kg', '', 7),
(8, 2, 'Salt, Mith', 'Aashirvaad Salt/Uppu - Iodised, 1 kg Pouch', 'https://www.bigbasket.com/media/uploads/p/l/236834_6-aashirvaad-salt-iodised.jpg?tr=w-1080,q=80', 22, '1 Kg', '', 7),
(9, 3, 'sugar, Sakhar', 'Madhur Sugar - Pure & Hygienic, Fine Grain, Natural, Sulphur Free, 1 kg', 'https://www.bigbasket.com/media/uploads/p/l/40253563_1-madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free.jpg?tr=w-1080,q=80', 52, '1 Kg', '', 7),
(10, 3, 'jaggery/gud', 'gud', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/aefdde09-bf87-4820-aada-e18ddb32a197.jpg', 40, '1 Kg', '', 7),
(11, 15, 'Sunflower Oil', 'Sunny Sun Lite Refined Sunflower Oil - Contains Vitamin A, D & E, 1 L Pouch', 'https://www.bigbasket.com/media/uploads/p/l/30003349_5-sunny-sunflower-oil-lite.jpg?tr=w-1080,q=80', 108, '1 L', '', 8),
(12, 15, 'Sunflower Oil', 'Fortune Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 5 L Can', 'https://www.bigbasket.com/media/uploads/p/l/274148_14-fortune-sun-lite-sunflower-refined-oil.jpg', 574, '5 L', '', 8),
(13, 15, 'Sunflower Oil', 'Saffola  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 1 L Can', 'https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg', 110, '1 L', '', 8),
*/

const allProductsList= [
    {
      "id": 1,
      "p_id": 1,
      "name": "nirama",
      "description": "Rin Refresh Detergent Powder ",
      "img": "https://www.bigbasket.com/media/uploads/p/l/299468-2_3-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80",
      "price": 10,
      "measurement": "65 gm",
      "best_offer": "",
      "category_id": 2
    },
    {
      "id": 2,
      "p_id": 1,
      "name": "nirama",
      "description": "Rin Refresh Lemon & Rose Detergent Powder, 1 kg",
      "img": "https://www.bigbasket.com/media/uploads/p/l/267012_9-rin-refresh-lemon-rose-detergent-powder.jpg?tr=w-1080,q=80",
      "price": 103,
      "measurement": "1 kg",
      "best_offer": "",
      "category_id": 2
    },
    {
      "id": 3,
      "p_id": 1,
      "name": "Rin",
      "description": "Rin Detergent Bar",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/6a9afbf1-f23e-4bc4-89db-63a73a94571b.jpg",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 2
    },
    {
      "id": 4,
      "p_id": 1,
      "name": "Rin",
      "description": "Rin Detergent Bar, 4x250 g Multipack",
      "img": "https://www.bigbasket.com/media/uploads/p/m/1206447_1-rin-detergent-bar.jpg?tr=w-1200,q=80",
      "price": 100,
      "measurement": "",
      "best_offer": "",
      "category_id": 2
    },
    {
      "id": 5,
      "p_id": 1,
      "name": "Rin",
      "description": "Rin Detergent Bar, 250 g",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40002072_7-rin-detergent-bar.jpg?tr=w-1080,q=80",
      "price": 25,
      "measurement": "",
      "best_offer": "",
      "category_id": 2
    },
    {
      "id": 6,
      "p_id": 2,
      "name": "Salt, Mith",
      "description": "Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch",
      "img": "https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80",
      "price": 24,
      "measurement": "1 Kg",
      "best_offer": "",
      "category_id": 7
    },
    {
      "id": 7,
      "p_id": 2,
      "name": "Salt, Mith",
      "description": "Tata Salt Vacuum Evaporated Iodised Salt -Helps Mental Development, 1 kg Pouch",
      "img": "https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg?tr=w-1080,q=80",
      "price": 55,
      "measurement": "2 Kg",
      "best_offer": "",
      "category_id": 7
    },
    {
      "id": 8,
      "p_id": 2,
      "name": "Salt, Mith",
      "description": "Aashirvaad Salt/Uppu - Iodised, 1 kg Pouch",
      "img": "https://www.bigbasket.com/media/uploads/p/l/236834_6-aashirvaad-salt-iodised.jpg?tr=w-1080,q=80",
      "price": 22,
      "measurement": "1 Kg",
      "best_offer": "",
      "category_id": 7
    },
    {
      "id": 9,
      "p_id": 3,
      "name": "sugar, Sakhar",
      "description": "Madhur Sugar - Pure & Hygienic, Fine Grain, Natural, Sulphur Free, 1 kg",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40253563_1-madhur-sugar-pure-hygienic-fine-grain-natural-sulphur-free.jpg?tr=w-1080,q=80",
      "price": 52,
      "measurement": "1 Kg",
      "best_offer": "",
      "category_id": 7
    },
    {
      "id": 10,
      "p_id": 3,
      "name": "jaggery/gud",
      "description": "gud",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/aefdde09-bf87-4820-aada-e18ddb32a197.jpg",
      "price": 40,
      "measurement": "1 Kg",
      "best_offer": "",
      "category_id": 7
    },
    {
      "id": 11,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Sunny Sun Lite Refined Sunflower Oil - Contains Vitamin A, D & E, 1 L Pouch",
      "img": "https://www.bigbasket.com/media/uploads/p/l/30003349_5-sunny-sunflower-oil-lite.jpg?tr=w-1080,q=80",
      "price": 108,
      "measurement": "1 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 12,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Fortune Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 5 L Can",
      "img": "https://www.bigbasket.com/media/uploads/p/l/274148_14-fortune-sun-lite-sunflower-refined-oil.jpg",
      "price": 574,
      "measurement": "5 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 13,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Saffola  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 1 L Can",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b74fd4da-d63b-4cf3-91ce-f89a73733705.jpg",
      "price": 110,
      "measurement": "1 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 14,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Saffola  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 5 L Can",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/a37a2a58-9eec-49f1-9641-cfd75044f477.jpg",
      "price": 870,
      "measurement": "5 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 15,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Gold Drop  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 1 L Can",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/3713dd92-5b71-4bc1-ab50-cc5020bafadc/279280_1-gold-drop-refined-oil-sunflower.webp",
      "price": 150,
      "measurement": "1 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 16,
      "p_id": 15,
      "name": "Sunflower Oil",
      "description": "Gold Drop  Sun lite Refined Sunflower Oil - Fortified with Vitamin A & Vitamin D, 15 L Can",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/cb5a8216-435d-4022-bf93-fd31776a4cc4/20003921-2-gold-drop-refined-sunflower-oil-webp",
      "price": 2550,
      "measurement": "15 L",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 17,
      "p_id": 16,
      "name": "Ghee",
      "description": "Masqati Pure Buffalo /Ghee 100gm",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/59394df3-0d39-4930-81db-496cb115c645/41NjV8rmukL._AC_UL320_.jpg",
      "price": 70,
      "measurement": "100 gm",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 18,
      "p_id": 16,
      "name": "Ghee",
      "description": "Masqati Pure Buffalo /Ghee 100gm",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/59394df3-0d39-4930-81db-496cb115c645/41NjV8rmukL._AC_UL320_.jpg",
      "price": 140,
      "measurement": "200 gm",
      "best_offer": "",
      "category_id": 8
    },
    {
      "id": 19,
      "p_id": 17,
      "name": "Vicco Skin Cream ",
      "description": "Vicco Skin Cream - Turmeric",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/13370cbc-e569-44a5-b62d-292d3a3a6fd8/co-skin-cream-turmeric-wso-ayurvedic-medicine-webp",
      "price": 52,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 20,
      "p_id": 17,
      "name": "Fair & Lovely",
      "description": "Fair & Lovely Advanced Multi Vitamin Face Cream, 9 g",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/59fe859f-462e-4a6f-9d70-fe154d1519af.jpg",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 21,
      "p_id": 17,
      "name": "Glow & Lovely",
      "description": "Glow & Lovely BB Cream Make Up + Multivitamin Cream Shade 01, 9 g Tube",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/71e6fac5-132f-4cfd-9717-2d015bbf710d/bb-cream-make-up-multivitamin-cream-shade-01-webp",
      "price": 45,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 22,
      "p_id": 18,
      "name": "Gillette",
      "description": "Gillette Guard Razor With Platinum Coated Blades",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/59fe859f-462e-4a6f-9d70-fe154d1519af.jpg",
      "price": 24,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 23,
      "p_id": 19,
      "name": "Dettol",
      "description": "Dettol Antiseptic Liquid 60ml",
      "img": "https://dms.mydukaan.io/700x700/webp/master/products/dettol-antiseptic-liquid-60ml.jpg",
      "price": 33,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 24,
      "p_id": 19,
      "name": "Zandu Balm",
      "description": "Zandu Balm - Effective Relief From Headache, Body Pain, Sprain & Cold, 8 ml Bottle",
      "img": "https://static.mydukaan.io/public/dukaan/lightspeed/js/sidebar-menu.js?ver=sceptre:mana960",
      "price": 40,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 25,
      "p_id": 20,
      "name": "Ponds",
      "description": "Ponds Dreamflower Fragrant Talc, 50 g Bottle",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b15bb0f7-0e73-475a-b506-c534d49a10cb.jpg",
      "price": 55,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 27,
      "p_id": 20,
      "name": "Ponds",
      "description": "Ponds Dreamflower Fragrant Talc, 50 g Bottle",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b15bb0f7-0e73-475a-b506-c534d49a10cb.jpg",
      "price": 100,
      "measurement": "100 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 28,
      "p_id": 20,
      "name": "Ponds",
      "description": "Ponds Dreamflower Fragrant Talc, 50 g Bottle",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/b15bb0f7-0e73-475a-b506-c534d49a10cb.jpg",
      "price": 10,
      "measurement": "100 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 29,
      "p_id": 20,
      "name": "Ponds",
      "description": "Ponds Dreamflower Fragrant Talc, 50 g Bottle",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/3934a8f1-e8bd-49f0-bdbe-5e8b92c7b97c.jpg",
      "price": 70,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 30,
      "p_id": 20,
      "name": "Ponds Face Wash",
      "description": "Ponds Bright Beauty Spot-less Fairness & Germ Removal Face Wash",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/0442900e-79f4-4ee4-8a69-4a50d748d0d7.jpg",
      "price": 79,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 31,
      "p_id": 18,
      "name": "Gillette",
      "description": "Gillette Simply Venus Basic Razor (3 Blades)",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/42b9d8ff-f757-4588-a6fb-4c771b724a95.jpg",
      "price": 73,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 32,
      "p_id": 17,
      "name": "Facewash",
      "description": "Fair & Lovely / Glow & Lovely Facewash",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/42b9d8ff-f757-4588-a6fb-4c771b724a95.jpg",
      "price": 70,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 33,
      "p_id": 17,
      "name": "Facewash",
      "description": "Everyuth Naturals Brightening Lemon & Cherry Face Wash.",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/cd377b7e-04c3-455f-9894-34727e87741f.jpg",
      "price": 65,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 34,
      "p_id": 17,
      "name": "Scrub",
      "description": "Everyuth Naturals Exfoliating Walnut Scrub, No Harmful Chemicals",
      "img": "https://dms.mydukaan.io/700x700/webp/5464480/c82d4ea1-2a98-40c3-bd53-848b7c4edf3b/100017698-4-everyuth-naturals-exfoliating-walnut-scrub-ee76b26e-eb8b-4dc2-9448-207466a4114b.webp/dcb2c4b4-924d-4fa8-a23a-012fc7cf675f.webp",
      "price": 80,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 35,
      "p_id": 17,
      "name": "Oxylife Creme",
      "description": "Oxylife Natural Radiance 5 Creme Bleach 27g",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/59982333-8070-4fef-8cdc-b650c78bf075/pack-of-2-2-oxylife-original-imafw6b5patz8tax.webp",
      "price": 83,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 36,
      "p_id": 18,
      "name": "Gillette Creme",
      "description": "Gillette Guard Shaving Foam Neeam Leaf 190G",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/6db0414e-9436-4791-8388-eedda3cfbd0f/4987176079299-228x228.jpg",
      "price": 115,
      "measurement": "",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 37,
      "p_id": 20,
      "name": "Face Wash",
      "description": "Ponds Pure Detox Anti-Pollution Purity Face Wash With Activated Charcoal",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/362131f0-51b8-4b9e-94e1-90d39708f387.jpg",
      "price": 115,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 38,
      "p_id": 20,
      "name": "Face Wash",
      "description": "Ponds Pure Detox Anti-Pollution Purity Face Wash With Activated Charcoal",
      "img": "https://dms.mydukaan.io/700x700/webp/projecteagle/images/362131f0-51b8-4b9e-94e1-90d39708f387.jpg",
      "price": 218,
      "measurement": "100 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 39,
      "p_id": 20,
      "name": "Moisturiser",
      "description": "Ponds Super Light Gel Moisturiser â€“ With Hyaluronic Acid & Vitamin E, For Glowing Skin, 100 ml",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40176378_10-ponds-super-light-gel-moisturiser-with-hyaluronic-acid-vitamin-e-for-glowing-skin.jpg?tr=w-1080,q=80",
      "price": 184,
      "measurement": "100 ml",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 40,
      "p_id": 20,
      "name": "Powder",
      "description": "Z Powder Talcum 125g",
      "img": "https://dms.mydukaan.io/700x700/webp/upload_file_service/02b79014-6d6b-4dad-808f-2e2e0e9d91e9/71NbP06kxlL._SY679_.jpg",
      "price": 135,
      "measurement": "125 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 41,
      "p_id": 21,
      "name": "Dove",
      "description": "Dove Cream Beauty Bathing Bar, Has 1/4th Moisturizing Cream, 50 g Carton",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40019053_4-dove-cream-beauty-bathing-bar-soap.jpg?tr=w-1080,q=80",
      "price": 27,
      "measurement": "50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 42,
      "p_id": 21,
      "name": "Dove",
      "description": "Dove Cream Beauty Bathing Bar, Has 1/4th Moisturizing Cream, 50 g Carton",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40019053_4-dove-cream-beauty-bathing-bar-soap.jpg?tr=w-1080,q=80",
      "price": 54,
      "measurement": "2X50 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 43,
      "p_id": 21,
      "name": "Dove",
      "description": "Dove Cream Beauty Bathing Bar, Has 1/4th Moisturizing Cream, 100 g Carton",
      "img": "https://www.bigbasket.com/media/uploads/p/l/40019053_4-dove-cream-beauty-bathing-bar-soap.jpg?tr=w-1080,q=80",
      "price": 65,
      "measurement": "100 gm",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 44,
      "p_id": 21,
      "name": "Dove",
      "description": "Dove Cream Beauty Bathing Bar Soap, 4x50 g Multipack",
      "img": "https://www.bigbasket.com/media/uploads/p/l/1206299_2-dove-cream-beauty-bathing-bar-soap.jpg?tr=w-1080,q=80",
      "price": 108,
      "measurement": "4 X 50",
      "best_offer": "",
      "category_id": 4
    },
    {
      "id": 45,
      "p_id": 22,
      "name": "Kitkat",
      "description": "",
      "img": "https://i.postimg.cc/RF8Qszjw/Adobe-Stock-623417223-Preview-Editorial-Use-Only.jpg",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 89,
      "p_id": 22,
      "name": "smarties",
      "description": "",
      "img": "https://i.postimg.cc/FsmzcB6R/Adobe-Stock-623473127-Preview-Editorial-Use-Only.jpg",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 90,
      "p_id": 22,
      "name": "duplo",
      "description": "",
      "img": "https://i.postimg.cc/pLr2JbJ2/Adobe-Stock-531795597-Preview-Editorial-Use-Only.jpg",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 91,
      "p_id": 22,
      "name": "Cadbury Dairy Milk",
      "description": "",
      "img": "https://www.bigbasket.com/media/uploads/p/m/281026_10-cadbury-dairy-milk-chocolate.jpg?tr=w-3840,q=80",
      "price": 20,
      "measurement": "1 Pouch",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 92,
      "p_id": 22,
      "name": "Cadbury Dairy Milk",
      "description": "",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40019374_23-cadbury-dairy-milk-chocolate-home-treats-pack.jpg?tr=w-3840,q=80",
      "price": 100,
      "measurement": "119 g",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 93,
      "p_id": 22,
      "name": "NestleMunch Chocolate",
      "description": "",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40122232_11-nestle-munch-chocolate-coated-crunchy-wafer-share-pack.jpg?tr=w-3840,q=80",
      "price": 80,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 94,
      "p_id": 22,
      "name": "NestleMunch Chocolate",
      "description": "",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40122232_11-nestle-munch-chocolate-coated-crunchy-wafer-share-pack.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 95,
      "p_id": 22,
      "name": "Skittles",
      "description": "Chewy Fruit Candies",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40174985_2-skittles-chewy-fruit-candies-original.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 96,
      "p_id": 22,
      "name": "Cadbury Gems",
      "description": "Chocolate",
      "img": "https://www.bigbasket.com/media/uploads/p/m/100021029_10-cadbury-gems-sugar-coated-chocolate.jpg?tr=w-3840,q=80",
      "price": 5,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 97,
      "p_id": 22,
      "name": "Kinder",
      "description": "Creamy Milky & Cocoa",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40200865_2-kinder-creamy-milky-cocoa-chocolate-with-extruded-rice.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 98,
      "p_id": 22,
      "name": "Cadbury Fuse",
      "description": "Peanut & Caramel Filled",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40091018_11-cadbury-fuse-chocolate-bar.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 99,
      "p_id": 22,
      "name": "Cadbury Fuse",
      "description": "Peanut & Caramel Filled",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40091018_11-cadbury-fuse-chocolate-bar.jpg?tr=w-3840,q=80",
      "price": 20,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 100,
      "p_id": 22,
      "name": "Cadbury Fuse",
      "description": "Peanut & Caramel Filled",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40091019_10-cadbury-fuse-chocolate-bar.jpg?tr=w-3840,q=80",
      "price": 40,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 101,
      "p_id": 22,
      "name": "Cadbury Fuse",
      "description": "Peanut & Caramel Filled",
      "img": "https://www.bigbasket.com/media/uploads/p/m/1206718_7-cadbury-chocolate-bar-fuse.jpg?tr=w-3840,q=80",
      "price": 75,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 102,
      "p_id": 22,
      "name": "Dukes",
      "description": "Waffy Wafers",
      "img": "https://www.bigbasket.com/media/uploads/p/m/276388_17-dukes-wafers-waffy-chocolate-flavor.jpg?tr=w-3840,q=80",
      "price": 20,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 103,
      "p_id": 22,
      "name": "Dukes",
      "description": "Waffy Wafers",
      "img": "https://www.bigbasket.com/media/uploads/p/m/276388_17-dukes-wafers-waffy-chocolate-flavor.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 104,
      "p_id": 22,
      "name": "Chocolate Shots",
      "description": "Cadbury Dairy Milk",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40024667_13-cadbury-dairy-milk-shots.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    },
    {
      "id": 105,
      "p_id": 22,
      "name": "Nestle",
      "description": "Classic Chocolate",
      "img": "https://www.bigbasket.com/media/uploads/p/m/40018532_7-nestle-chocolate-classic.jpg?tr=w-3840,q=80",
      "price": 10,
      "measurement": "",
      "best_offer": "",
      "category_id": 30
    }
  ]
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class AllProducts extends Component {
    state = {
        apiStatus: apiStatusConstants.initial,
       
        productList: [],
    }

    componentDidMount() {
        this.getSuggestionProduct()
    }

    getSuggestionProduct = () => {
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const updateList = allProductsList.map(each => ({
            key: each.id,
            id: each.id,
            name: each.name,
            img: each.img,
            categoryId: each.category_id,
            bestOffer: each.best_offer,
            measurement: each.measurement,
            price: each.price,
            description: each.description,
            productId: each.p_id

        }))
        this.setState({
            productList: updateList,
            apiStatus: apiStatusConstants.success,
        })
    }

    renderProducts = () => {
       const {productList} = this.state
        return(
            <div className="card-container">
                <Produtcs list={productList} headingText="All Products" he/>        
        </div>
        )
        
    }

    renderLoadingView = () => (
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    )

    renderFailureView = () => (
        <div>
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
                className="jobs-failure-img"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p className="jobs-failure-description">
                We are having some trouble to complete your request.Please try again.
            </p>

            <button
                className="button"
                type="button"
                onClick={this.getSuggestionVideos}
            >
                Retry
            </button>

        </div>
    )


    renderAllProducts = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderProducts()

            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            default:
                return null
        }
    }
    render() {
        return (
            <div className="bg-container">
                  {this.renderAllProducts()}    
               
            </div>
        )
    }
}

export default AllProducts
