"use client";
import { SiSpotify, SiSpotifyHex } from "@icons-pack/react-simple-icons";
import useSWR from "swr";
import Image from "next/image";
import { Waveform } from "@uiball/loaders";

export default function CardSpotify(): JSX.Element {
  const fetcher = (url: string) => fetch(url).then((ress) => ress.json());
  const { data } = useSWR("api/spotify", fetcher);

  return (
    <>
      <div className='rounded-xl border bg-white drop-shadow overflow-hidden'>
        {data?.isPlaying && (
          <div className='bg-zinc-100 px-4 py-1 flex justify-between items-center'>
            <p className='text-sm'>Now Playing</p>
            <Waveform size={16} lineWeight={1.5} color={SiSpotifyHex} />
          </div>
        )}
        <div className='flex gap-2 p-4 relative'>
          {data?.isPlaying ? (
            <a href={data?.songUrl} target='_blank' rel='noopener noreferrer'>
              <Image
                height={60}
                width={60}
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            </a>
          ) : (
            <SiSpotify
              title={data?.isPlaying && "Spotify is Offline"}
              size={60}
              color={data?.isPlaying ? SiSpotifyHex : "#808080"}
            />
          )}
          <div className='whitespace-nowrap overflow-hidden'>
            <h6 className='font-medium truncate'>
              {data?.isPlaying ? data.title : "Not Listening"}
            </h6>
            <p className='text-sm text-zinc-600 truncate'>
              {data?.isPlaying ? data.artist : "Spotify"}
            </p>
          </div>

          <div className='absolute bottom-4 right-4'>
            <SiSpotify
              title={data?.isPlaying ? "Now Playing" : "Spotify is Offline"}
              size={24}
              color={data?.isPlaying ? SiSpotifyHex : "#808080"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
