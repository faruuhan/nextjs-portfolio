"use client";
import { SiSpotify, SiSpotifyHex } from "@icons-pack/react-simple-icons";
import useSWR from "swr";
import Image from "next/image";

export default function CardSpotify(): JSX.Element {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/spotify", fetcher);
  return (
    <>
      <div className='rounded-xl flex gap-2 border p-4 relative bg-white drop-shadow'>
        {data?.isPlaying ? (
          <Image
            height={60}
            width={60}
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <SiSpotify title='spotify' size={60} color={SiSpotifyHex} />
        )}
        <div className='whitespace-nowrap overflow-hidden'>
          <h6 className='font-medium truncate'>
            {data?.isPlaying ? data.title : "Not Listening"}
          </h6>
          <p className='text-sm text-zinc-600'>
            {data?.isPlaying ? data.artist : "Spotify"}
          </p>
        </div>
        <div className='absolute bottom-4 right-4'>
          <SiSpotify title='spotify' size={24} color={SiSpotifyHex} />
        </div>
      </div>
    </>
  );
}
