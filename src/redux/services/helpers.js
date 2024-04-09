import dayjs from 'dayjs';
import { setTokens } from 'redux/auth';
import generalStore from 'redux/store';
import axios from 'axios';

export const updateTokens = async () => {
  const state = generalStore.store.getState();
  const persistedToken = state.auth.refreshToken;
  const userEmail = state.auth.user.email;

  if (!persistedToken) {
    throw new Error('Refresh token is missing');
  }

  try {
    const response = await axios.post(
      'https://backend-taskspro-public.onrender.com/api/auth/refresh',
      {
        tokenRefresh: persistedToken,
        userEmail,
      }
    );
    generalStore.store.dispatch(setTokens(response.data));
  } catch (error) {
    console.error('Token refreshing error', error);
    throw error;
  }
};

export const checkIsTokenExpired = tokenExpiryTime => {
  const currentTime = dayjs().unix();
  if (tokenExpiryTime) return currentTime > tokenExpiryTime;

  return undefined;
};

export const rearrangementResponse = data => {
  if (data) {
    if (Array.isArray(data)) {
      const modifiedResults = data.map(item => {
        if ('cardOwner' in item) {
          const { _id, orderTask, ...rest } = item;
          return {
            ...rest,
            id: _id,
            order: orderTask,
          };
        } else if ('columnOwner' in item) {
          const { _id, orderColumn, ...rest } = item;
          return {
            ...rest,
            id: _id,
            order: orderColumn,
          };
        } else if ('user' in item) {
          const { _id, ...rest } = item;
          return {
            ...rest,
            id: _id,
          };
        } else return [];
      });

      return modifiedResults;
    }
    if (typeof data === 'object' && !Array.isArray(data)) {
      if ('orderTask' in data) {
        const { _id, orderTask, createdAt, updatedAt, ...rest } = data;
        return {
          ...rest,
          id: _id,
          order: orderTask,
        };
      } else if ('orderColumn' in data) {
        const { _id, orderColumn, createdAt, updatedAt, ...rest } = data;
        return {
          ...rest,
          id: _id,
          order: orderColumn,
        };
      } else if ('user' in data) {
        const { _id, user, createdAt, updatedAt, ...rest } = data;
        return {
          ...rest,
          id: _id,
        };
      } else return {};
    }
  }

  return [] || {};
};

export function getDynamicUrl(args, url) {
  let dynamicUrl = url;
  if (args && typeof args === 'object') {
    Object.entries(args).forEach(([key, value]) => {
      if (typeof value === 'string') {
        const pattern = new RegExp(`:${key}\\b`);
        if (pattern.test(url)) {
          dynamicUrl = dynamicUrl.replace(pattern, value);
        }
      }
    });
  } else if (args && typeof args === 'string' && url.includes(':id')) {
    dynamicUrl = url.replace(/:id/, args.toString());
  }

  return dynamicUrl;
}

export function getRequestBody(args, url) {
  let requestBody = args;

  if (args && typeof args === 'object') {
    const key = Object.keys(args).find(key => url.includes(`:${key}`));
    if (key) {
      const { [key]: substring, ...rest } = args;

      requestBody = { ...rest };
    }
  }
  return requestBody;
}
