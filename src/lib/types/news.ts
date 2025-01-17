export type News = {
  position: number;
  title: string;
  source: {
    name: string;
    icon: string;
    authors?: string[];
  };
  link: string;
  thumbnail: string;
  thumbnail_small: string;
  date: string;
};
