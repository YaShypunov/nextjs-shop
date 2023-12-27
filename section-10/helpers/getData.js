import fs from 'fs';
import getFilePath from './getFilePath';

const getData = (fileName) => {
  const filePath = getFilePath(fileName);
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default getData;
