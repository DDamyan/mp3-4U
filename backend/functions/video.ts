import {Request, Response} from 'express';
import ytdl from 'ytdl-core';

import fs from 'fs';

export default async function video(req: Request, res: Response) {
  console.log(' GET: /video');

  let url = req.header('url');
  let tag = req.header('tag');

  var info = await ytdl.getInfo(url);
  ytdl.downloadFromInfo(info, {quality: tag}).pipe(fs.createWriteStream('video.mp4'));

  res.sendStatus(200);
}
