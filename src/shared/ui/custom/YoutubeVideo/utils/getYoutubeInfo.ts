import { HOUR } from '@/shared/constants';

export interface YoutubeInfo {
  description: string
  publishedAt: string
  title: string
}

export const getYoutubeInfo = async (videoId: string | undefined): Promise<YoutubeInfo> => {
  if (!videoId) {
    return {
      description: '',
      publishedAt: '',
      title: '',
    };
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`, {
    next: { revalidate: 24 * HOUR },
  });

  const data = await res.json();
  const info = data.items[0]?.snippet;

  return {
    description: info?.description || '',
    publishedAt: info?.publishedAt || '',
    title: info?.title || '',
  };
};
