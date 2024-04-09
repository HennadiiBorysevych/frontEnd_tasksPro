import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from './axiosInstance';
import {
  getDynamicUrl,
  getRequestBody,
  rearrangementResponse,
} from './helpers';

const requestTemplate = (name, url, method, nestedObject) => {
  return createAsyncThunk(name, async (args, { rejectWithValue }) => {
    try {
      const dynamicUrl = getDynamicUrl(args, url);
      const requestBody = getRequestBody(args, url);

      const response = await axiosInstance[method](dynamicUrl, requestBody);
      // console.log(`${name}Response`, response);
      return rearrangementResponse(response.data[nestedObject]);
    } catch (error) {
      // console.log(`Error ${name}`, error.response);

      return rejectWithValue(error.message || 'Unknown error');
    }
  });
};

export default requestTemplate;
