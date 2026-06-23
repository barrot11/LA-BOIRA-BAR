import { MenuItem, SpecialtyItem } from "./types";

export const ESMORZARS: MenuItem[] = [
  { nom: "Cafè sol", descripcio: "Cafè d'especialitat, torrat artesà", preu: "1,20 €" },
  { nom: "Tallat", descripcio: "Cafè amb un raig de llet", preu: "1,30 €" },
  { nom: "Cafè amb llet", descripcio: "Cafè de qualitat, llet sencera o vegetal", preu: "1,60 €" },
  { nom: "Capuccino", descripcio: "Cafè amb escuma de llet cremosa", preu: "2,00 €" },
  { nom: "Suc de taronja natural", descripcio: "Taronja exprimida al moment", preu: "2,50 €" },
  { nom: "Torrades amb tomàquet i oli", descripcio: "Pa artesanal torrat, tomàquet fresc, oli verge extra", preu: "2,80 €" },
  { nom: "Torrades amb melmelada", descripcio: "Pa torrat, mantega i melmelada casolana", preu: "2,80 €" },
  { nom: "Entrepà de truita de patata", descripcio: "Truita de patata casolana, pa de pagès", preu: "3,80 €" },
  { nom: "Entrepà de pernil serrà", descripcio: "Pernil serrà, pa de pagès i tomàquet", preu: "4,00 €" },
  { nom: "Entrepà mixt", descripcio: "Pernil dolç i formatge fos al pa", preu: "3,50 €" },
  { nom: "Esmorzar complet", descripcio: "Cafè + torrades + suc de taronja natural", preu: "5,80 €", destacat: true },
  { nom: "Croissant de mantega", descripcio: "Croissant fresc, sol o farcit", preu: "2,00 €" }
];

export const PINXOS_DISSABTE: MenuItem[] = [
  { nom: "Pinxo de la setmana", descripcio: "Creació sorpresa del xef — pregunta avui!", preu: "2,80 €", destacat: true },
  { nom: "Pinxo de truita i pernil ibèric", descripcio: "Truita casolana amb pernil ibèric", preu: "3,00 €" },
  { nom: "Pinxo de salmó fumat", descripcio: "Salmó fumat, formatge crema i anet", preu: "3,50 €" },
  { nom: "Pinxo de bacallà", descripcio: "Brandada de bacallà sobre pa de cristall", preu: "3,20 €" },
  { nom: "Pinxo de bolets de temporada", descripcio: "Bolets saltejats, all, julivert i ou de guatlla", preu: "3,20 €" },
  { nom: "Pinxo de botifarra negra", descripcio: "Botifarra negra amb confitura de ceba", preu: "3,00 €" },
  { nom: "Mini hamburguesa de vedella", descripcio: "Carn local, ceba caramel·litzada, formatge de cabra", preu: "3,80 €" },
  { nom: "Pinxo de foie i poma", descripcio: "Foie mi-cuit amb reducció de poma i mel", preu: "4,50 €" }
];

export const COQUES_RECAPTE: MenuItem[] = [
  { nom: "Coca individual", descripcio: "Pebrot vermell, albergínia i sardines", preu: "5,00 €" },
  { nom: "Coca familiar (4 persones)", descripcio: "Pebrot, albergínia, ceba i sardines", preu: "16,00 €", destacat: true },
  { nom: "Coca de verdures", descripcio: "Pebrot, ceba i albergínia (sense peix)", preu: "4,50 €" },
  { nom: "Coca de bacallà", descripcio: "Bacallà dessalat amb pebrot escalivat", preu: "5,50 €" },
  { nom: "Coca de botifarra i pebrot", descripcio: "Botifarra del país amb pebrot verd i vermell", preu: "5,50 €" }
];

export const BEGUDES: MenuItem[] = [
  { nom: "Cafè sol", preu: "1,20 €" },
  { nom: "Tallat", preu: "1,30 €" },
  { nom: "Cafè amb llet", preu: "1,60 €" },
  { nom: "Capuccino", preu: "2,00 €" },
  { nom: "Infusió", preu: "1,60 €" },
  { nom: "Cervesa de barril (canya)", preu: "2,00 €" },
  { nom: "Cervesa ampolla artesana", preu: "3,00 €" },
  { nom: "Vermut de barril", preu: "2,80 €" },
  { nom: "Copa de vi negre / blanc", preu: "2,50 €" },
  { nom: "Vi de la casa (got)", preu: "2,00 €" },
  { nom: "Cava (copa)", preu: "3,50 €" },
  { nom: "Refresc", preu: "2,20 €" },
  { nom: "Aigua mineral", preu: "1,50 €" },
  { nom: "Suc de taronja natural", preu: "2,50 €" }
];

export const ENTRANTS: MenuItem[] = [
  { nom: "Croquetes casolanes (6 u.)", descripcio: "De pernil, de bacallà o mixtes", preu: "8,50 €" },
  { nom: "Escalivada amb anxoves", descripcio: "Pebrot i albergínia escalivats, anxoves del Cantàbric, oli verge", preu: "9,00 €" },
  { nom: "Amanida de temporada", descripcio: "Verdures fresques de la plana, vinagreta de mostassa", preu: "8,00 €" },
  { nom: "Patates braves", descripcio: "Patates fregides amb salsa brava i allioli casolà", preu: "7,50 €" },
  { nom: "Selecció de formatges de la terra", descripcio: "Formatges locals amb mel i nous", preu: "12,00 €" },
  { nom: "Selecció d'embotits de la casa", descripcio: "Pernil, llonganissa, fuet i pa de pagès", preu: "12,00 €" }
];

export const PRINCIPALS: MenuItem[] = [
  { nom: "Botifarra a la brasa", descripcio: "Botifarra del país amb mongetes del ganxet i allioli", preu: "14,00 €" },
  { nom: "Entrecot de vedella (250g)", descripcio: "Vedella local amb guarnició i salsa de pebre verd", preu: "18,00 €" },
  { nom: "Bacallà a la llauna", descripcio: "Bacallà amb tomàquet, all i julivert", preu: "15,00 €" },
  { nom: "Pollastre rostit de pagès", descripcio: "Pollastre de granja local amb patates i herbes", preu: "14,00 €" },
  { nom: "Conill a l'all i oli", descripcio: "Conill de granja amb all i oli casolà i romesco", preu: "14,50 €" },
  { nom: "Mandonguilles amb salsa", descripcio: "Vedella i porc amb salsa de tomàquet i vi negre", preu: "13,00 €" },
  { nom: "Fideuà de mar", descripcio: "Fideus amb marisc i sofregit lleidatà, allioli a part", preu: "15,00 €" },
  { nom: "Plat del dia", descripcio: "Pregunta a la pissarra — canvia cada dia", preu: "10,50 €" }
];

export const POSTRES: MenuItem[] = [
  { nom: "Crema catalana", descripcio: "Crema casolana amb sucre cremat al moment", preu: "5,00 €" },
  { nom: "Mel i mató", descripcio: "Formatge fresc de vaca amb mel de la terra", preu: "4,50 €" },
  { nom: "Mousse de xocolata", descripcio: "Xocolata negra 70% amb fruits vermells", preu: "5,50 €" },
  { nom: "Pastís del dia", descripcio: "Pregunta avui quin tenim", preu: "4,50 €" },
  { nom: "Fruita de temporada", descripcio: "Fruita fresca de la plana de Lleida", preu: "4,00 €" }
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    icona: "☕",
    titol: "Esmorzars de qualitat",
    text: "Productes frescos i de proximitat cada matí. El cafè que et dona energia per afrontar el dia."
  },
  {
    icona: "🍢",
    titol: "Pinxos del Dissabte",
    text: "Cada dissabte, el nostre xef sorprèn amb pinxos creatius de temporada. Una tradició que reuneix el barri."
  },
  {
    icona: "🫓",
    titol: "Coca de Recapte",
    text: "La millor coca de recapte de Lleida, feta al moment. Perfecta per emportar o per compartir."
  },
  {
    icona: "🍽️",
    titol: "Menú del Dia",
    text: "De dilluns a divendres, un menú de mercat complet per 13,50€. Cuina casolana com ha de ser."
  }
];

export const LA_BORIA_TELEFON = "973 23 45 67"; // Número real o modificable pel propietari
export const LA_BORIA_EMAIL = "info@laborialleida.cat";
export const LA_BORIA_INSTAGRAM = "https://www.instagram.com/laboira_lleida/";
export const LA_BORIA_MAPS = "https://maps.google.com/?q=Avinguda+Catalunya+26+Lleida";
