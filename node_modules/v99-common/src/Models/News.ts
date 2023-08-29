export interface News {
  id: string;
  title: string;
  content: string;
  url: string;
  image: string;
  type: string;
  data: {
    icon: string;
    color: string;
  };
}
