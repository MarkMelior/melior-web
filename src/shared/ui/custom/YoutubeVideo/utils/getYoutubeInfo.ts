import { HOUR } from '@/shared/constants';

export interface YoutubeInfo {
  description: string
  publishedAt: string
  title: string
  viewCount: number
}

export const getYoutubeInfo = async (videoId: string | undefined): Promise<YoutubeInfo> => {
  if (!videoId) {
    return {
      description: '',
      publishedAt: '',
      title: '',
      viewCount: 0,
    };
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`, {
    next: { revalidate: 24 * HOUR },
  });
  const data = await res.json();

  const item = data.items?.[0];
  const snippet = item?.snippet;

  return {
    description: snippet?.description || '',
    publishedAt: snippet?.publishedAt || '',
    title: snippet?.title || '',
    viewCount: Number(item?.statistics?.viewCount ?? 0),
  };
};
