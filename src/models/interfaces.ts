export interface IArticle {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: any[];
    events: any[];
  }
  
export type TitleProps = {
    title: string;
    query: string;
  };