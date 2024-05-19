import Hero from "@/components/hero";
import userImg from '/public/image/programador.jpg'
export default function Gallery() {
    return (
        <Hero imgData={userImg} imgAlt = "personas trabajando" title = "We serve high performance applications"/>
 

    );
  }