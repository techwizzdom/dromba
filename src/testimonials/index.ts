import { t } from '../translations/t';

export interface IPersonTestimonial {
  avatar: string;
  name: string;
  companyName: string;
  quote1: string;
  href?: string;
  quote2?: string;
  quote3?: string;
}

export const testimonialsFromPeople: Array<IPersonTestimonial> = [
  {
    avatar: 'https://i.imgur.com/g1eQfaG.jpg',
    name: 'Dani Grant, CEO',
    companyName: 'Jam',
    href: t.link.jam,
    quote1:
      'We loved working with Dom, he was super quick, creative, reliable, and the video he created with us was just outstanding. Thank you, Dom!',
  },
  {
    avatar: 'https://i.imgur.com/31Gfu7B.jpg',
    name: 'Ante Simac',
    companyName: 'Student',
    quote1:
      'As someone without a formal background in coding having Dom as a coach is invaluable.',
    quote2:
      'Content that previously seemed unbearably intricate Dom dissected in easy-to-understand chunks.',
    quote3: 'Patient, diligent and knows his stuff. Highly recommended!',
  },
  {
    avatar: 'https://i.imgur.com/SezXyii.jpg',
    name: 'Andy Didorosi, Head of Marketing',
    companyName: 'Status Hero',
    href: t.link.statusHero,
    quote1: 'Dom is great!',
    quote2:
      'He came up with a whole concept for our ad, filmed it, and edited it in the time it takes most people to respond to the first email.',
    quote3: 'Five stars.',
  },
  {
    avatar: 'https://i.imgur.com/6EEfqS2.png',
    name: 'Pamela Hong, CEO',
    companyName: 'Bamblue Glasses',
    href: t.link.bamblue,
    quote1:
      'It is a great experience working with Dom. He exceeded our expectations and made us an engaging and quality video.',
    quote2:
      'Very efficient and professional! I would love to consider him again if we launch another influencer campaign.',
    quote3: 'One of the best!',
  },
  {
    avatar: 'https://i.imgur.com/Vtx4pyC.png',
    name: 'Olivia Bell, Social Media Strategist',
    companyName: 'Practicum',
    href: t.link.practicum,
    quote1:
      'Highly suggest having Dom as part of your team! I worked with Dom on content creation for our TikTok channel launch, he blew us out of the water with the content he came up with (with many videos going viral). ',
    quote2:
      'He is extremely knowledgeable in tech world and his content around coding is helping to change many peoples career paths and lives.',
    quote3: 'We really appreciate and love Dom’s work!',
  },
  {
    avatar: 'https://i.imgur.com/6Cp9xCL.jpg',
    name: 'Diandra Sovailescu, Marketing Manager',
    companyName: 'Otta',
    href: t.link.ottaPublic,
    quote1:
      'Dom was very proactive at every stage of our partnership, delivering way before deadline while being very responsive to constructive feedback.',
    quote2:
      'Dom went above and beyond to ensure that our mission was communicated in the best way possible to his community, and we saw amazing results from our campaign.',
    quote3: "Couldn't recommend him more!",
  },
  {
    avatar: 'https://i.imgur.com/7A8wXZP.jpg',
    name: 'Abhishek Mishra, Head of Growth',
    companyName: 'Locofy.ai',
    href: t.link.locofy,
    quote1:
      "It was a pleasure working with Domagoj. He's very collaborative and suggests amazing ideas. ",
    quote2:
      'Pretty sure that his audience loves the way he shares cool tips and tools. Would love to work again!',
  },
];

export const testimonialImages: Array<string> = [
  'https://i.imgur.com/5PQJnKI.png',
  'https://i.imgur.com/OPDzzYC.png',
  'https://i.imgur.com/GTYpHZf.png',
  'https://i.imgur.com/5U8ejwg.png',
  'https://i.imgur.com/D4zfTof.png',
  'https://i.imgur.com/Pf1KdLJ.png',
  'https://i.imgur.com/JsaBXjM.png',
  'https://i.imgur.com/Rwxpxyj.png',
  'https://i.imgur.com/5PBWFMm.png',
  'https://i.imgur.com/w0tn0VA.png',
  'https://i.imgur.com/mJ7aI0Q.png',
  'https://i.imgur.com/osgdwfH.png',
  'https://i.imgur.com/E5pqhtB.png',
  'https://i.imgur.com/HClxBe4.png',
  'https://i.imgur.com/YF0SQ3o.png',
  'https://i.imgur.com/bn11CEC.png',
  'https://i.imgur.com/oZqTgFh.png',
  'https://i.imgur.com/jlXsmVF.png',
  'https://i.imgur.com/BiuvgMU.png',
  'https://i.imgur.com/fz63zrI.png',
  'https://i.imgur.com/jTRFeMP.png',
  'https://i.imgur.com/upXYaUk.png',
  'https://i.imgur.com/MU5tgGi.png',
  'https://i.imgur.com/g5IDJh5.png',
  'https://i.imgur.com/PjxRDoq.png',
  'https://i.imgur.com/BELAB99.png',
  'https://i.imgur.com/cPEuNc2.png',
  'https://i.imgur.com/IJoc5Eh.png',
  'https://i.imgur.com/rkWtSJ3.png',
  'https://i.imgur.com/J4pBMU6.png',
  'https://i.imgur.com/HpwgjCH.png',
  'https://i.imgur.com/Ttm0AkL.png',
  'https://i.imgur.com/CiSGB1m.png',
  'https://i.imgur.com/V9lul3V.png',
  'https://i.imgur.com/e6Pzjpe.png',
  'https://i.imgur.com/pMMw3E8.png',
  'https://i.imgur.com/w78s2IP.png',
  'https://i.imgur.com/5DcyXsw.png',
  'https://i.imgur.com/yVNxmM5.png',
];
