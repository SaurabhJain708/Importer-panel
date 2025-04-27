import formidable from 'formidable';
import { IncomingMessage } from 'http';

export async function parseFormData(req:any) {
  const form = formidable({ multiples: true });

  const nodeReq = req instanceof IncomingMessage ? req : (req?.raw ?? req);

  return new Promise((resolve, reject) => {
    form.parse(nodeReq, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}
