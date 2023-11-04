import { NextApiResponse, NextApiRequest } from "next";
import { getAccessToken } from "../utils/getAccessToken";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  interface AlbumArtists {
    name: string;
  }

  const getNowPlaying = async () => {
    try {
      const { access_token } = await getAccessToken();

      const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      return response.json();
    } catch (error) {
      res.status(400).json({
        message: "Invalid",
      });
    }
  };

  try {
    const response = await getNowPlaying();

    if (response.currently_playing_type !== "track") {
      return res.status(response.status).json({ isPlaying: false });
    }

    const data = {
      isPlaying: response.is_playing,
      title: response.item.name,
      album: response.item.album.name,
      artist: response.item.album.artists
        .map((artist: AlbumArtists) => artist.name)
        .join(", "),
      albumImageUrl: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(204).end();
  }
}
