import data from "./memories.json";

import AppleCrisp from "../Images/Fun/IMG_5508.JPG";
import Worship0 from "../Images/Fun/IMG_5510.JPG";

const Memories = data.Memories;

const Scavenger = [
  {
    src: AppleCrisp,
    thumbnail: AppleCrisp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption:
      "Everyone joins together to play some cards and eat some Apple Crisp"
  },
  {
    src: Worship0,
    thumbnail: Worship0,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "Gathering together for some praise and worship"
  }
];

Memories[0].photos = Scavenger;

export default Memories;
