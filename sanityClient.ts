import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'me5ln5zv', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skcxJdX4lyqg8DGtfUIlpk4V7Gyw3dwM2rYI7JQ2RYoTlwVlvmZLQ9Fu2vk6UWSbfnuFi5twDgi9eSOTtL5IzP3dLfdrnvLsVOSUCM2TfiXrPIWh2BP70F1IbxjGD78kf5Wf72nFU0ZmpKbtwGihPpsMPBoQJwDoKvezmYCziN19o75Yzp7w', // Replace with your Sanity API token
});
export default client;
