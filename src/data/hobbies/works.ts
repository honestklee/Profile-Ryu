export interface HobbyWork {
  title: string;
  year: number;
  slides: {
    image: string;
    alt: string;
  }[];
}

export const hobbyWorks: Record<string, HobbyWork[]> = {
  drawing: [
    {
      title: "Structure and Hair",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Draw/Draw1.jpg",
          alt: "Character drawing study focused on hair structure, slide 1",
        },
        {
          image: "/images/Hobbies/Draw/Draw2.jpg",
          alt: "Character drawing study focused on hair structure, slide 2",
        },
        {
          image: "/images/Hobbies/Draw/Draw3.jpg",
          alt: "Character drawing study focused on hair structure, slide 3",
        },
      ],
    },
    {
      title: "3D Character",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Draw/3DRblx.png",
          alt: "3D Roblox character scene",
        },
        {
          image: "/images/Hobbies/Draw/Blender.png",
          alt: "3D character scene created in Blender",
        },
      ],
    },
  ],
  "video-editing": [],
  design: [
    {
      title: "Cards",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Design/cards-01.png",
          alt: "Cards design artwork, slide 1",
        },
        {
          image: "/images/Hobbies/Design/cards-02.png",
          alt: "Cards design artwork, slide 2",
        },
        {
          image: "/images/Hobbies/Design/cards-03.png",
          alt: "Cards design artwork, slide 3",
        },
      ],
    },
    {
      title: "Favorite Brand",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Design/adidas-favorite-brand.png",
          alt: "Adidas-inspired brand design",
        },
        {
          image: "/images/Hobbies/Design/nike-favorite-brand.png",
          alt: "Nike-inspired brand design",
        },
      ],
    },
    {
      title: "ART of Angels",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Design/art-of-angels.png",
          alt: "Angel-themed digital artwork",
        },
      ],
    },
    {
      title: "About Kaws",
      year: 2026,
      slides: [
        {
          image: "/images/Hobbies/Design/4.png",
          alt: "About KAWS design artwork, slide 1",
        },
        {
          image: "/images/Hobbies/Design/5.png",
          alt: "About KAWS design artwork, slide 2",
        },
      ],
    },
  ],
};
