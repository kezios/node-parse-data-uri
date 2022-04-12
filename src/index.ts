import dataUriToBuffer from 'data-uri-to-buffer';
import { ParsedUri } from './type';

const parseDataUri = (dataUri: string): ParsedUri => {
  let mimeType = 'text/plain';

  if(dataUri.charAt(6) !== ',')
    mimeType =getMimeType(dataUri);

  const uriData = dataUri.split(';').slice(1, -1);
  const uriObject: Record<string, string> = {};

  uriData.forEach((element: string)=>{
    uriObject[element.split('=')[0]] = element.split('=')[1];
  })
  

  return {
    mimeType,
    data: dataUriToBuffer(dataUri),
    ...uriObject
  }
}

const getMimeType = (dataUri: string): string => {
  return dataUri
    .substring(5, dataUri.indexOf(';'))
    .toLowerCase();
}

export default parseDataUri;