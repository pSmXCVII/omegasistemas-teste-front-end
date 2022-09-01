const API_URL = 'https://covid19-brazil-api.now.sh/api/report/v1';

export const GET_CASES_BY_STATE = () => (
  {
    url: 'https://covid19-brazil-api.now.sh/api/report/v1',
    options: {
      method: 'GET'
    }
  }
);

export const GET_CASES_BY_COUNTRY = (country) => (
  {
    url: `https://covid19-brazil-api.now.sh/api/report/v1/${country}`,
    options: {
      method: 'GET'
    }
  }
);