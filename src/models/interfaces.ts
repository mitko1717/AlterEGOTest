import { Dispatch, SetStateAction } from "react";

export interface IUsersInfo {
  login: string;
  password: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IQueries {
  limit: number;
  start: number;
}

export interface IDataState {
  stateData: IPost[];
  start: number;
  isLoading: boolean;
  isLogined: boolean;
  database: IUsersInfo[];
  lngs: ILanguages;
}

export interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ILanguage {
  nativeName: string;
}

export interface ILanguages {
  [key: string]: ILanguage;
}
