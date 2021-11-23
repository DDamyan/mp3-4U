import ytdl from 'ytdl-core';

export default async function info(req, res) {
  console.log(' GET: /info');

  let url = req.header('url');
  if (typeof url !== 'undefined') {
    res.send(await getInfo(url));
  } else {
    res.end();
  }
}

async function getInfo(url: string) {
  var info = await ytdl.getInfo(url);
  var {videoDetails} = info;
  return {
    title: videoDetails.title,
    id: videoDetails.videoId,
    url: videoDetails.video_url,
    thumbnail: videoDetails.thumbnails[2],
    formats: info.formats,
  };
}
