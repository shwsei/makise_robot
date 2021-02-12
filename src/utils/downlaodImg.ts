import {createWriteStream} from 'fs';
import Axios from 'axios';
import {resolve} from 'path'


export default async function downloadImage(url: string, filename: string): Promise<String> {
  const writerFile = createWriteStream(
    resolve('temp', `${filename}.jpg`)
  );

  const {data} = await Axios.get(
    url, {responseType: 'stream'}
  );

  data.pipe(writerFile);

  return `${filename}.jpg`
}
