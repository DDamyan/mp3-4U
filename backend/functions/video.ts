import {Request, Response} from 'express';

import ytdl from 'ytdl-core';

import ffmpegUtils from '@ffmpeg-installer/ffmpeg';
import Ffmpeg from 'fluent-ffmpeg';
Ffmpeg.setFfmpegPath(ffmpegUtils.path);

import fs from 'fs';

export default async function video(req: Request, res: Response) {
  console.log(' GET: /video');

  let url = req.header('url');
  let tag = req.header('tag');

  // Ffmpeg.getAvailableCodecs(function (err, codecs) {
  //   console.log('Available codecs:');
  //   console.dir(codecs);
  // });

  var info = await ytdl.getInfo(url);
  Ffmpeg(ytdl.downloadFromInfo(info, {quality: tag}))
    .input(ytdl.downloadFromInfo(info, {quality: 'highestaudio'}))
    .on('start', cmd => console.log('  ' + cmd))
    .on('end', () => console.log('  processing  finished!'))
    .on('error', err => console.log('  error:: ' + err))
    .withVideoCodec('copy')
    // .map('0:v')
    // .map('1:a')
    //.outputOptions('-pix_fmt yuv420p')
    .format('mp4') //.toFormat('mp4')
    .saveToFile('ffmpeg-test.mp4');
  //.writeToStream(fs.createWriteStream('video.mp4'), {end: true});

  res.sendStatus(200);
}
