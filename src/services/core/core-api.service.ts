import axios, { AxiosResponse } from 'axios';
import { StringMapping } from '../../types';
import StorageService from './storage.service';

class CoreApiService {
  getToken() {
    return StorageService.getToken();
  }

  API = process.env.NEXT_PUBLIC_API_URL;

  async get(url: string, params = {}, headers = {}): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'get',
      url: `${this.API}/${url}`,
      headers,
      params
    });
  }

  async post(url: string, data: StringMapping<any>, headers = {}): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'post',
      url: `${this.API}/${url}`,
      data,
      headers
    });
  }

  async put(url: string, data: StringMapping<any>, headers: StringMapping<string> = {}): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'put',
      url: `${this.API}/${url}`,
      data,
      headers
    });
  }

  async patch(url: string, data: StringMapping<any>): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'patch',
      url: `${this.API}/${url}`,
      data
    });
  }

  async delete(url: string, data: StringMapping<any>, headers = {}): Promise<AxiosResponse<any>> {
    return await axios.request({
      method: 'delete',
      url: `${this.API}/${url}`,
      data,
      headers
    });
  }
}

export default new CoreApiService();
