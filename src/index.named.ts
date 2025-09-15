import { geocode, GeocodingRequest } from 'opencage-api-client';

export const doGeocode = async () => {
  const input: GeocodingRequest = {
    q: '51.952659,7.632473',
    key: '6d0e711d72d74daeb2b0bfd2a5cdfdba', // https://opencagedata.com/api#testingkeys
    no_annotations: 1,
  };
  const result = await geocode(input);
  console.log(JSON.stringify(result, null, 2));
  return result;
};
