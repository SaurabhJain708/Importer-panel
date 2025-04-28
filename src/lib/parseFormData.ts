import formidable from "formidable";
import { IncomingMessage } from "http";
import { NextRequest } from "next/server";

export async function parseFormData(req: NextRequest) {
  const form = formidable({ multiples: true });

  // Cast the NextRequest object to IncomingMessage for formidable
  const nodeReq =
    req instanceof IncomingMessage ? req : (req as any).raw || req;

  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    }
  );
}
