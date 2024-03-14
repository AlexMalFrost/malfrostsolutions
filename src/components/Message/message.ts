import passdata from '../Files/telgapassword.json';

const baseUrl = passdata.url;
const id = passdata.id;

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=${id}&text=${message}`;
  const response: Response = await fetch(url);
  console.log('response', response);
};
