import { NextApiResponse, NextApiRequest } from "next";
import { getAccessToken } from "../utils/getAccessToken";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  interface AlbumArtists {
    name: string;
  }

  const getRecentlyPlayed = async () => {
    try {
      const { access_token } = await getAccessToken();

      const response = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
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

  // const response = await getRecentlyPlayed();

  try {
    const response = await getRecentlyPlayed();

    const data = {
      title: response.items[0].track.name,
      album: response.items[0].track.album.name,
      artist: response.items[0].track.album.artists
        .map((artist: AlbumArtists) => artist.name)
        .join(", "),
      albumImageUrl: response.items[0].track.album.images[0].url,
      songUrl: response.items[0].track.external_urls.spotify,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(204).end();
  }
  // console.log(response.items);
  // res.status(200).json({ message: "success" });
}
