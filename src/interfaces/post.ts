import { type Author } from "./author";

export type Post = {
  slug: string;
  template: string;
  title: string;
  bestoverall: string;
  product: string;
  funnelFlux?: string;
  funnelFluxName?: string;
  path: string;
  coverImage: string;
  metaImage?: string;
  metaDescription?: string;
  urgent?: string;
  product1: {
    name: string;
    shortname: string;
    image: string;
    cta: string;
    ctaText?: string;
    logo?: string;
    reviewNum: string;
    newsImages: {
      image1: string;
      site1: string;
      image2: string;
      site2: string;
      image3: string;
      site3: string;
      image4: string;
      site4: string;
    };
    sellingPoints: {
      title1: string;
      point1: string;
      title2: string;
      point2: string;
      title3: string;
      point3: string;
      title4: string;
      point4: string;
      title5: string;
      point5: string;
      title6: string;
      point6: string;
      title7: string;
      point7: string;
      title8: string;
      point8: string;
    };
    reviews: {
      name1: string;
      text1: string;
      image1: string;
      location1: string;
      name2: string;
      text2: string;
      image2: string;
      location2: string;
      name3: string;
      text3: string;
      image3: string;
      location3: string;
      name4?: string;
      text4?: string;
      image4?: string;
      location4?: string;
      name5?: string;
      text5?: string;
      image5?: string;
      location5?: string;
      name6?: string;
      text6?: string;
      image6?: string;
      location6?: string;
      name7?: string;
      text7?: string;
      image7?: string;
      location7?: string;
      name8?: string;
      text8?: string;
      image8?: string;
      location8?: string;
      name9?: string;
      text9?: string;
      image9?: string;
      location9?: string;
      name10?: string;
      text10?: string;
      image10?: string;
      location10?: string;
    };
    fb_reviews: {
      name1: string;
      image1: string;
      text1: string;
      city1: string;
      upvotes1: string;
      time1: string;
      indent1: string;
      name2: string;
      image2: string;
      text2: string;
      city2: string;
      upvotes2: string;
      time2: string;
      indent2: string;
      name3: string;
      image3: string;
      text3: string;
      city3: string;
      upvotes3: string;
      time3: string;
      indent3: string;
      name4: string;
      image4: string;
      text4: string;
      city4: string;
      upvotes4: string;
      time4: string;
      indent4: string;
      name5: string;
      image5: string;
      text5: string;
      city5: string;
      upvotes5: string;
      time5: string;
      indent5: string;
      name6: string;
      image6: string;
      text6: string;
      city6: string;
      upvotes6: string;
      time6: string;
      indent6: string;
      name7: string;
      image7: string;
      text7: string;
      city7: string;
      upvotes7: string;
      time7: string;
      indent7: string;
      name8: string;
      image8: string;
      text8: string;
      city8: string;
      upvotes8: string;
      time8: string;
      indent8: string;
      name9: string;
      image9: string;
      text9: string;
      city9: string;
      upvotes9: string;
      time9: string;
      indent9: string;
      name10: string;
      image10: string;
      text10: string;
      city10: string;
      upvotes10: string;
      time10: string;
      indent10: string;
    };
  };

  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  updatedAt: string;
  intro?: string;
  story?: string;
  content: string;
  preview?: boolean;
};
