export const BASE_URL = 'https://www.goodreads.com';

export const API_KEY = 'lImPPSmrPgewMvaxepEspw';

export const xmlParserOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: 'attr', // default is 'false'
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  decodeHTMLchar: false,
  cdataTagName: '__cdata', // default is 'false'
  cdataPositionChar: '\\c'
};
