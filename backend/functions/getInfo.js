var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ytdl from 'ytdl-core';
export function getInfo(url) {
    return __awaiter(this, void 0, void 0, function* () {
        var info = yield ytdl.getInfo(url);
        var { videoDetails } = info;
        return {
            title: videoDetails.title,
            id: videoDetails.videoId,
            url: videoDetails.video_url,
            thumbnail: videoDetails.thumbnails[2],
        };
    });
}
