import ytdl from 'ytdl-core';
export async function getInfo(url) {
    var info = await ytdl.getInfo(url);
    var { videoDetails } = info;
    return {
        title: videoDetails.title,
        id: videoDetails.videoId,
        url: videoDetails.video_url,
        thumbnail: videoDetails.thumbnails[2],
    };
}
