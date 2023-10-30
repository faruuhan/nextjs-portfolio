import { NextApiResponse, NextApiRequest } from "next";
import querystring from "querystring";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  interface AlbumArtists {
    name: string;
  }

  const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
  } = process.env;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const getAccessToken = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
          grant_type: "refresh_token",
          refresh_token,
        }),
      });
      return response.json();
    } catch (error) {}
  };

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
    } catch (error) {}
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
    return res.status(204).end();
  }
}
