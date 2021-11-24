import ytdl from 'ytdl-core';
import { spawn } from 'child_process';
import pathToFfmpeg from 'ffmpeg-static';
export default function audio(req, res) {
    console.log(' GET: /audio');
    const { url, itag, name } = getReqParams(req);
    console.log(name);
    //   ytdl(url, {quality: 'highestaudio', filter: 'audioonly'}).pipe(res);
    res.attachment(`${name}.mp3`);
    const audio = ytdl(url, { quality: itag });
    const ffmpegProcess = spawn(pathToFfmpeg, [
        // Remove ffmpeg's console spamming
        //   '-loglevel',
        //   '8',
        //   '-hide_banner',
        // Redirect/Enable progress messages
        //'-progress', 'pipe:3',
        // Set inputs
        '-i',
        'pipe:3',
        //'-i', 'pipe:5',
        // Map audio & video from streams
        //'-map', '0:a',
        //'-map', '1:v',
        // Overwrite
        '-y',
        // Keep encoding
        '-acodec',
        'libmp3lame',
        '-f',
        'mp3',
        //   '-codec:v',
        //   'copy',
        // Define output file
        'pipe:4',
    ], {
        windowsHide: true,
        stdio: [
            /* Standard: stdin, stdout, stderr */
            'inherit',
            'inherit',
            'inherit',
            /* Custom: pipe:3, pipe:4, pipe:5 */
            'pipe',
            'pipe',
        ],
    });
    //   ffmpegProcess.on('close', () => {
    //     console.log('  --> done');
    //   });
    //@ts-ignore
    audio.pipe(ffmpegProcess.stdio[3]);
    ffmpegProcess.stdio[4].pipe(res);
}
function getReqParams(req) {
    return {
        url: req.header('url'),
        itag: req.header('itag'),
        name: req.header('name'),
    };
}
