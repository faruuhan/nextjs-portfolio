"use client";
import { SiSpotify, SiSpotifyHex } from "@icons-pack/react-simple-icons";
import useSWR from "swr";
import Image from "next/image";
import { Waveform, Momentum } from "@uiball/loaders";

export default function CardSpotify(): JSX.Element {
  const fetcher = (url: string) => fetch(url).then((ress) => ress.json());
  const { data } = useSWR("api/spotify/CurrentPlaying", fetcher);
  const recentlyPlayed = useSWR("api/spotify/RecentlyPlayed", fetcher);

  return (
    <>
      <div className='rounded-xl border bg-white drop-shadow-lg overflow-hidden'>
        {(data?.isPlaying || recentlyPlayed.data) && (
          <div className='bg-zinc-100 px-4 py-1 flex justify-between items-center'>
            <p className='text-sm'>
              {data?.isPlaying ? "Now Playing" : "Recently Played"}
            </p>
            {data?.isPlaying ? (
              <Waveform size={16} lineWeight={1.5} color={SiSpotifyHex} />
            ) : (
              <Momentum size={16} color={"#808080"} />
            )}
          </div>
        )}
        <div className='flex gap-2 p-4 relative'>
          {data?.isPlaying || recentlyPlayed.data ? (
            <a
              href={
                data?.isPlaying ? data?.songUrl : recentlyPlayed.data?.songUrl
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='min-w-[60px] min-h-[60px] relative rounded-md overflow-hidden'>
                <Image
                  src={
                    data?.isPlaying
                      ? data?.albumImageUrl
                      : recentlyPlayed.data.albumImageUrl
                  }
                  alt={
                    data?.isPlaying ? data?.album : recentlyPlayed.data?.album
                  }
                  sizes='100vw 100vh'
                  fill
                  loading='lazy'
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          ) : (
            <SiSpotify
              title={data?.isPlaying && "Spotify Offline"}
              size={60}
              color={data?.isPlaying ? SiSpotifyHex : "#808080"}
            />
          )}
          <div className='whitespace-nowrap overflow-hidden'>
            <h6 className='font-medium truncate'>
              {data?.isPlaying
                ? data.title
                : recentlyPlayed.data
                ? recentlyPlayed.data?.title
                : "Not Listening"}
            </h6>
            <p className='text-sm text-zinc-600 truncate'>
              {data?.isPlaying
                ? data.artist
                : recentlyPlayed.data
                ? recentlyPlayed.data?.artist
                : "Spotify"}
            </p>
          </div>

          <div className='absolute bottom-2 right-2'>
            <SiSpotify
              title={data?.isPlaying ? "Now Playing" : "Spotify Offline"}
              size={24}
              color={data?.isPlaying ? SiSpotifyHex : "#808080"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
