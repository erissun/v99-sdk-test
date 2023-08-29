export type TMiniApp = {
  id: string;
  data: {
    banner?: string;
    id: string;
    name: string;
    version: string;
    category: string;
    appIcon: string;
  };
  type: 'ADS' | 'POPULAR' | 'CATEGORIES';
  description: string;
  createdAt: string;
  updatedAt: string;
};
