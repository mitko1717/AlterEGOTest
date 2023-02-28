export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TitleProps = {
  title: string;
  query: string;
};
