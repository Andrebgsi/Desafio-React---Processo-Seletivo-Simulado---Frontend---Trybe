import mockTestData from './testData';

const mockFetch = () => Promise.resolve({
  status: 200,
  ok: true,
  json: () => Promise.resolve(mockTestData),
} as Response);

export default mockFetch;
