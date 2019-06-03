import { IComment, IImage, IAuthor } from "./types";

export const comments: IComment[] = [
  {
    username: "elon_musk",
    avatar: {
      image: { src: "https://i.imgur.com/Q77mG4Q.jpg", alt: "avatar" },
      profileLink: "#"
    },
    text:
      "#streetart #urban #shooting #streetphotography #vsco #color #sony #art #focus #photooftheday #view #amazing #fun #instagood #orange #hoodie #cap #style",
    date: new Date()
  },
  {
    username: "bill_gates69",
    avatar: {
      image: { src: "https://i.imgur.com/6YcmrDS.jpg", alt: "avatar" },
      profileLink: "#"
    },
    text: "cool pic bro",
    date: new Date()
  },
  {
    username: "ur_mom_lol",
    avatar: {
      image: {
        src: "https://avatars3.githubusercontent.com/u/28456335?s=180&v=4",
        alt: "avatar"
      },
      profileLink: "#"
    },
    text: "lame",
    date: new Date()
  },
  {
    username: "rando",
    avatar: {
      image: {
        src: "https://avatars0.githubusercontent.com/u/37121584?s=180&v=4",
        alt: "avatar"
      },
      profileLink: "#"
    },
    text: "Super 🙌 miłego popołudnia!!!",
    date: new Date()
  }
];

export const photo: IImage = {
  src: "https://i.imgur.com/gloYxYP.jpg",
  alt: "photo"
};

export const author: IAuthor = {
  name: "elon_musk",
  avatar: {
    image: {
      src: "https://i.imgur.com/Q77mG4Q.jpg",
      alt: "author"
    },
    profileLink: "#"
  }
};
