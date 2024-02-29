import Image from "next/image";

interface Certificate {
  data: {
    image: string;
    title: string;
  };
}

export default function CardCertificate(props: Certificate): JSX.Element {
  const { image, title } = props.data;

  return (
    <>
      <div className='border border-zinc-300 rounded-lg h-96 md:h-80 lg:h-[250px] relative overflow-hidden bg-white'>
        <Image
          src={
            `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297774/web/certificate` +
            image
          }
          alt={title}
          fill
          loading='lazy'
          blurDataURL={
            `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297774/web/certificate` +
            image
          }
          placeholder='blur'
        />
      </div>
    </>
  );
}
