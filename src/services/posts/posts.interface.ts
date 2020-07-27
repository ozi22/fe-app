export interface IGetPostResponse {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export type GetAllPostResponse = IGetPostResponse[];
