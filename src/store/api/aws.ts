import axios from 'axios';

export interface ExceptionInterface {
  errorMessage: string;
  type?: string;
  statusCode?: number;
}

const errorHandler = (error: any) => {
  if (
    typeof error.response !== 'undefined' &&
    typeof error.response.data !== 'undefined'
  ) {
    error = error.response.data;
  }
  return { error: error };
};

let baseURL = 'http://localhost:3000/';
let api = axios.create({
  baseURL,
  timeout: 25000
});

export const login: any = async (email: string, password: string) => {
  try {
    // const {data} = await api.post('/logins', {email, password});
    const data = {
      role: 'admin'
    };
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

/*
export const checkEmail = async (email: string) => {
    try {
        const {data} = await api.post('/users', {email});
        return {data};
    } catch (error) {

        return {error: error.response.data};

    }
};
*/

// Topics
export const getTopics = async () => {
  let url = '/main-topic';
  try {
    const { data } = await api.get(url);
    const topics = data;
    return { topics };
  } catch (error) {
    return errorHandler(error);
  }
};

export const getTopic = async (id: number) => {
  try {
    const { data } = await api.get(`/main-topic/${id}`);
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const createTopic = async (topic: any) => {
  try {
    const { data } = await api.post(`/main-topic`, {
      topic
    });
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const updateTopic = async (topic: any) => {
  try {
    const { data } = await api.put(`/main-topic`, {
      topic
    });
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const deleteTopic = async (id: any) => {
  try {
    const { data } = await api.delete(`/main-topic/${id}/delete`);
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

// Comments
export const createTopicComment = async (comment: any) => {
  try {
    const { data } = await api.post(
      `/main-topic/${comment.topic._id}/comment`,
      {
        comment
      }
    );
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const createResponseComment = async (comment: any) => {
  try {
    const { data } = await api.post(
      `/response/${comment.response._id}/comment`,
      {
        comment
      }
    );
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

// Response
export const createResponse = async (response: any) => {
  try {
    const { data } = await api.post(
      `/main-topic/${response.topic._id}/response`,
      {
        response
      }
    );
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const getResponse = async (id: number) => {
  try {
    const { data } = await api.get(`/response/${id}`);
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};

export const updateResponse = async (response: any) => {
  try {
    const { data } = await api.put(`/response`, {
      response
    });
    return { data };
  } catch (error) {
    return errorHandler(error);
  }
};
