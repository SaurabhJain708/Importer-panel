export default function Video(){
    return(
        <video
                  src="/ship.mp4"
                  autoPlay
                  muted
                  loop
                  preload="none"
                  className=" object-cover w-full h-full z-0"
                ></video>
    )
}