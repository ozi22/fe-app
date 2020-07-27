import { AxiosPromise } from 'axios';
import coreApiService from '../core/core-api.service';
import { GetAllPostResponse, IGetPostResponse } from './posts.interface';

class PostsService {
  public static getAllPosts = (): AxiosPromise<GetAllPostResponse> => {
    return coreApiService.get(`posts`, {}, null);
  };

  public static getPost = (id: number): AxiosPromise<IGetPostResponse> => {
    return coreApiService.get(`posts/${id}`, {}, null);
  };

  public static createPost = (data: any): AxiosPromise<any> => {
    return coreApiService.post(`posts`, data, null);
  };

  public static editPost = (id: number, data: any): AxiosPromise<any> => {
    return coreApiService.put(`posts/${id}`, data, null);
  };

  public static deletePost = (id: number): AxiosPromise<any> => {
    return coreApiService.delete(`posts/${id}`, {}, null);
  };
}

export default PostsService;
