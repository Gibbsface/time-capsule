import React from "react";

import { Interns } from "./interns.json";

import Donovan_Image from "../../Images/InternProfile/donovan.jpg";
import Kellechi_Image from "../../Images/InternProfile/kellechi.jpg";
import Laci_Image from "../../Images/InternProfile/laci.jpg";
import Cole_Image from "../../Images/InternProfile/cole.jpg";
import Abi_Image from "../../Images/InternProfile/abi.jpg";
import Brittany_Image from "../../Images/InternProfile/brittany.jpg";
import Jessica_Image from "../../Images/InternProfile/jessica.jpg";
import Johnny_Image from "../../Images/InternProfile/johnny.jpg";
import Chun_Image from "../../Images/InternProfile/chun.jpg";
import Emily_Image from "../../Images/InternProfile/emily.jpg";
import Dan_Image from "../../Images/InternProfile/dan.jpg";
import Callie_Image from "../../Images/InternProfile/callie.jpg";
import Justin_Image from "../../Images/InternProfile/justin.jpg";
import David_Image from "../../Images/InternProfile/david.jpg";
import Jizhou_Image from "../../Images/InternProfile/me.jpg";

const InternList = Interns;

const PHOTO_WIDTH = 320;
const PHOTO_HEIGHT = 174;

const internPhotos = [
  {
    src: Donovan_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Kellechi_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Laci_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Cole_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Abi_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Brittany_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Jessica_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Johnny_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Chun_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Emily_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Dan_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Callie_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Justin_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: David_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  },
  {
    src: Jizhou_Image,
    thumbnailWidth: PHOTO_WIDTH,
    thumbnailHeight: PHOTO_HEIGHT
  }
];

InternList[0].photo = Donovan_Image;
InternList[1].photo = Kellechi_Image;
InternList[2].photo = Laci_Image;
InternList[3].photo = Cole_Image;
InternList[4].photo = Abi_Image;
InternList[5].photo = Brittany_Image;
InternList[6].photo = Jessica_Image;
InternList[7].photo = Johnny_Image;
InternList[8].photo = Chun_Image;
InternList[9].photo = Emily_Image;
InternList[10].photo = Dan_Image;
InternList[11].photo = Callie_Image;
InternList[12].photo = Justin_Image;
InternList[13].photo = David_Image;
InternList[14].photo = Jizhou_Image;

export default InternList;
