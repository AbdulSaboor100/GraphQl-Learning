import axios from 'axios';
export const ContentFull = async query => {
  let showData;
  const Url = `https://graphql.contentful.com/content/v1/spaces/qhqur10xjrvd?access_token=l7vQFiTMu7CwLJ5ja_G_BtN8L4maZgofRxOrqIoQPVs`;
  try {
    let response = await axios.post(Url, { query });
    showData = response.data.data;
  } catch (error) {
    console.log(error);
  }
  if (!showData) return <p className='App'>Loading....</p>;
  return showData;
};
