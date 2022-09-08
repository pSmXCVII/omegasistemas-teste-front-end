const API_URL = 'https://covid19-brazil-api.vercel.app/api/report/v1';

export const GET_CASES_BY_STATE = () => (
  {
    url: API_URL,
    options: {
      method: 'GET'
    }
  }
);

export const GET_CASES_BY_COUNTRY = (country) => (
  {
    url: `${API_URL}/${country}`,
    options: {
      method: 'GET'
    }
  }
);