import ironiNahariyaLogo from "../../../Assets/Images/ironiNahariyaLogo.png";
import maccabiTelAvivLogo from "../../../Assets/Images/macabbiTelAvivLogo.png";
import hapoelTelAvivLogo from "../../../Assets/Images/hapoelTelAvivLogo.png";
import ironiEilatLogo from "../../../Assets/Images/ironiEilatLogo.jpeg";
import hapoelBeerShevaLogo from "../../../Assets/Images/hapoelBeerShevaLogo.png";
import hapoelJerusalemLogo from "../../../Assets/Images/hapoelJerusalemLogo.png";
import hapoelGalilElionLogo from "../../../Assets/Images/hapoelGalilElionLogo.jpg";
import hapoelHolonLogo from "../../../Assets/Images/hapoelHolonLogo.png";
import hapoelGilboaGalilLogo from "../../../Assets/Images/hapoelGilboaGalilLogo.png";
import beniHerzliyaLogo from "../../../Assets/Images/beniHerzliyaLogo.png";
import { nanoid } from "@reduxjs/toolkit";
import { IObJTeams } from "../../../Helpers/Interfaces";

const teamsDataLocalObject: Array<IObJTeams> = [
  {
    id: nanoid(),
    name: "Ironi Nahariya",
    img: ironiNahariyaLogo,
    alt: "Ironi Nahariya Logo",
    isChampion: false,
    arena: "Ein Sarah",
    secondaryUniformColor: "white",
    uniformColor: "purple",
    city: "Nahariya"
  },
  {
    id: nanoid(),
    name: "Macabbi Tel Aviv",
    img: maccabiTelAvivLogo,
    alt: "Maccabi Tel Aviv Logo",
    isChampion: true,
    arena: "Menura Mivtachim",
    secondaryUniformColor: "#002D62",
    uniformColor: "#FFD700",
    city: "Tel-Aviv Yaffo"
  },
  {
    id: nanoid(),
    name: "Hapoel Tel Aviv",
    img: hapoelTelAvivLogo,
    alt: "Maccabi Tel Aviv Logo",
    isChampion: true,
    arena: "Drive In",
    secondaryUniformColor: "white",
    uniformColor: "#F40009",
    city: "Tel-Aviv Yaffo"
  },
  {
    id: nanoid(),
    name: "Hapoel Jerusalem",
    img: hapoelJerusalemLogo,
    alt: "Hapoel Jerusalem Logo",
    isChampion: true,
    arena: "Pa'is Arena",
    secondaryUniformColor: "white",
    uniformColor: "#F40009",
    city: "Jerusalem"
  },
  {
    id: nanoid(),
    name: "Hapoel Holon",
    img: hapoelHolonLogo,
    alt: "Hapoel Holon Logo",
    isChampion: true,
    arena: "Toto Arena Holon",
    secondaryUniformColor: "gold",
    uniformColor: "Purple",
    city: "Holon"
  },
  {
    id: nanoid(),
    name: "Hapoel Gilboa Galil",
    img: hapoelGilboaGalilLogo,
    alt: "Hapoel Gilboa Galil Logo",
    isChampion: true,
    arena: "Gan Ner",
    secondaryUniformColor: "white",
    uniformColor: "#F40009",
    city: "Gilboa"
  },
  {
    id: nanoid(),
    name: "Beni Herzliya",
    img: beniHerzliyaLogo,
    alt: "Bnei Herzliya Logo",
    isChampion: false,
    arena: "HaYovel Arena",
    secondaryUniformColor: "white",
    uniformColor: "#002D62",
    city: "Herzliya"
  },
  {
    id: nanoid(),
    name: "Hapoel Beer Sheva",
    img: hapoelBeerShevaLogo,
    alt: "Hapoel Beer Sheva Logo",
    isChampion: false,
    arena: "Kunchiya Arena",
    secondaryUniformColor: "white",
    uniformColor: "#F40009",
    city: "Beer-Sheva"
  },
  {
    id: nanoid(),
    name: "Hapoel Galil Elion",
    img: hapoelGalilElionLogo,
    alt: "Hapoel Galil Elion Logo",
    isChampion: true,
    arena: "Kfar Blum",
    secondaryUniformColor: "white",
    uniformColor: "#F40009",
    city: "Galil"
  },
  {
    id: nanoid(),
    name: "Ironi Eilat",
    img: ironiEilatLogo,
    alt: "Ironi Eilat Logo",
    isChampion: false,
    arena: "Begin Arena",
    secondaryUniformColor: "white",
    uniformColor: "lightblue",
    city: "Eilat"
  },
];

export default teamsDataLocalObject
