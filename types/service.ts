export interface ServiceImage {
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  alt: string;
  type: 'before' | 'after';
}

export interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  icon: string;
  images: ServiceImage[];
  order: number;
  isActive: boolean;
}