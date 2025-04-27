export default function Video() {
  return (
    <video
      src="/Vid1.mp4"
      autoPlay
      muted
      loop
      preload="none"
      className=" object-cover align-bottom w-full h-full z-0"
    ></video>
  );
}
