/* ============================================================
   CATÁLOGO — Importaciones Loayza
   Edita esta lista para agregar, quitar o cambiar productos.

   id      : código único (sin espacios)
   tipo    : "pantalla" | "tapa" | "bateria" | "flex" | "zocalo"
   marca   : "Samsung" | "Apple" | "Xiaomi" | "Motorola" | ...
   modelo  : nombre del modelo
   detalle : texto corto opcional
   precio  : precio unitario en soles (número) o null = "Precio a consultar"
   mayor   : precio por mayor (número) o null
   stock   : true = "En stock" | false = "Consultar stock"
   foto    : ruta a una imagen (ej. "img/s24ultra.jpg") o null = ícono

   Fotos: publicaciones reales de la página de Facebook de la tienda.
   ============================================================ */
window.WHATSAPP = "51957864902";

const pant = (id, modelo) => ({ id, tipo:"pantalla", marca:"Samsung", modelo, detalle:"Pantalla completa con marco · Original", precio:null, mayor:null, stock:true, foto:`img/${id}.jpg` });
const tapa = (id, marca, modelo) => ({ id, tipo:"tapa", marca, modelo, detalle:"Tapa trasera · varios colores", precio:null, mayor:null, stock:false, foto:`img/${id}.jpg` });

window.PRODUCTOS = [
  // Pantallas — stock confirmado (publicación de Facebook, 5 sep 2025)
  pant("pant-s24u", "Galaxy S24 Ultra"),
  pant("pant-s23u", "Galaxy S23 Ultra"),
  pant("pant-s22u", "Galaxy S22 Ultra"),

  // Tapas Samsung — serie S y Note
  tapa("tapa-s25u",    "Samsung", "Galaxy S25 Ultra"),
  tapa("tapa-s25fe",   "Samsung", "Galaxy S25 FE"),
  tapa("tapa-s25",     "Samsung", "Galaxy S25 / S25 Plus"),
  tapa("tapa-s24u",    "Samsung", "Galaxy S24 Ultra"),
  tapa("tapa-s24",     "Samsung", "Galaxy S24 / S24 Plus"),
  tapa("tapa-s23u",    "Samsung", "Galaxy S23 Ultra"),
  tapa("tapa-s23fe",   "Samsung", "Galaxy S23 FE"),
  tapa("tapa-s23",     "Samsung", "Galaxy S23 / S23 Plus"),
  tapa("tapa-s22u",    "Samsung", "Galaxy S22 Ultra"),
  tapa("tapa-s22",     "Samsung", "Galaxy S22 / S22 Plus"),
  tapa("tapa-s21u",    "Samsung", "Galaxy S21 Ultra"),
  tapa("tapa-s21fe",   "Samsung", "Galaxy S21 FE"),
  tapa("tapa-s21",     "Samsung", "Galaxy S21 / S21 Plus"),
  tapa("tapa-s20u",    "Samsung", "Galaxy S20 Ultra"),
  tapa("tapa-s20plus", "Samsung", "Galaxy S20 Plus"),
  tapa("tapa-s20",     "Samsung", "Galaxy S20"),
  tapa("tapa-s20fe",   "Samsung", "Galaxy S20 FE"),
  tapa("tapa-s10",     "Samsung", "Galaxy S10 / S10 Plus"),
  tapa("tapa-s10e",    "Samsung", "Galaxy S10e"),
  tapa("tapa-s9plus",  "Samsung", "Galaxy S9 Plus"),
  tapa("tapa-s9",      "Samsung", "Galaxy S9"),
  tapa("tapa-note20u", "Samsung", "Galaxy Note 20 Ultra"),
  tapa("tapa-note10",  "Samsung", "Galaxy Note 10 / Note 10 Plus"),

  // Tapas Samsung — serie A
  tapa("tapa-a73",     "Samsung", "Galaxy A73"),
  tapa("tapa-a72",     "Samsung", "Galaxy A72"),
  tapa("tapa-a71",     "Samsung", "Galaxy A71"),
  tapa("tapa-a50-a70", "Samsung", "Galaxy A50 / A70"),
  tapa("tapa-a36-a56", "Samsung", "Galaxy A36 / A56"),
  tapa("tapa-a55",     "Samsung", "Galaxy A55"),
  tapa("tapa-a34-a54", "Samsung", "Galaxy A34 / A54"),
  tapa("tapa-a53",     "Samsung", "Galaxy A53"),
  tapa("tapa-a52",     "Samsung", "Galaxy A52"),
  tapa("tapa-a51",     "Samsung", "Galaxy A51"),
  tapa("tapa-a41",     "Samsung", "Galaxy A41"),
  tapa("tapa-a35",     "Samsung", "Galaxy A35"),
  tapa("tapa-a33",     "Samsung", "Galaxy A33"),
  tapa("tapa-a32",     "Samsung", "Galaxy A32"),
  tapa("tapa-a31s",    "Samsung", "Galaxy A31s"),
  tapa("tapa-a30s",    "Samsung", "Galaxy A30s"),
  tapa("tapa-a30",     "Samsung", "Galaxy A30"),
  tapa("tapa-a26",     "Samsung", "Galaxy A26"),
  tapa("tapa-a25",     "Samsung", "Galaxy A25"),
  tapa("tapa-a24",     "Samsung", "Galaxy A24"),
  tapa("tapa-a23",     "Samsung", "Galaxy A23"),
  tapa("tapa-a22",     "Samsung", "Galaxy A22"),
  tapa("tapa-a21s",    "Samsung", "Galaxy A21s"),
  tapa("tapa-a20s",    "Samsung", "Galaxy A20s"),
  tapa("tapa-a20",     "Samsung", "Galaxy A20"),
  tapa("tapa-a16",     "Samsung", "Galaxy A16"),
  tapa("tapa-a15",     "Samsung", "Galaxy A15"),
  tapa("tapa-a14",     "Samsung", "Galaxy A14"),
  tapa("tapa-a13",     "Samsung", "Galaxy A13"),
  tapa("tapa-a12",     "Samsung", "Galaxy A12"),
  tapa("tapa-a11",     "Samsung", "Galaxy A11"),
  tapa("tapa-a10",     "Samsung", "Galaxy A10"),
  tapa("tapa-a06",     "Samsung", "Galaxy A06"),
  tapa("tapa-a05s",    "Samsung", "Galaxy A05s"),
  tapa("tapa-a05",     "Samsung", "Galaxy A05"),
  tapa("tapa-a04s",    "Samsung", "Galaxy A04s"),
  tapa("tapa-a04e",    "Samsung", "Galaxy A04e"),
  tapa("tapa-a04",     "Samsung", "Galaxy A04"),
  tapa("tapa-a03s",    "Samsung", "Galaxy A03s"),
  tapa("tapa-a03core", "Samsung", "Galaxy A03 Core"),
  tapa("tapa-a03",     "Samsung", "Galaxy A03"),
  tapa("tapa-a02s",    "Samsung", "Galaxy A02s"),
  tapa("tapa-a02",     "Samsung", "Galaxy A02"),
  tapa("tapa-a01core", "Samsung", "Galaxy A01 Core"),
  tapa("tapa-a01",     "Samsung", "Galaxy A01"),

  // Tapas iPhone (cada foto muestra dos modelos)
  tapa("tapa-ip16pro",       "Apple", "iPhone 16 Pro / 16 Pro Max"),
  tapa("tapa-ip14pm-15pm",   "Apple", "iPhone 14 Pro Max / 15 Pro Max"),
  tapa("tapa-ip13pro-14pro", "Apple", "iPhone 13 Pro / 14 Pro"),
  tapa("tapa-ipxsmax-11",    "Apple", "iPhone XS Max / iPhone 11"),
  tapa("tapa-ipxr-xs",       "Apple", "iPhone XR / XS")
];
