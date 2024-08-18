import { logo, dataLink, socialLink } from "@/components/data/data";

import Image from "next/image";

import Link from "next/link";

import AnimatedText from "@/components/animation/AnimatedText";

export default function page() {
  return (
    <section className="home">
      <div className="home__container container">
        <header>
          {logo.map((item: any) => {
            return (
              <div className="logo" key={item.id}>
                <Image
                  src={item.img}
                  alt="logo"
                  width={200}
                  height={200}
                  loading="lazy"
                  quality={100}
                />

                <AnimatedText text={item.title} />
                <p>{item.desc}</p>
              </div>
            );
          })}
        </header>

        <article>
          {dataLink.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="img">
                  <Image
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>

                <Link href={item.path} key={item.id}>
                  <h3>{item.name}</h3>
                </Link>

                <div className="icons">
                  <i>{item.icons}</i>
                </div>

                <div className="overlay"></div>
              </div>
            );
          })}
        </article>

        <div className="social__link">
          {socialLink.map((item: any) => {
            return (
              <Link
                className="icons"
                key={item.id}
                href={item.path}
                target="_blank">
                {item.icons}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
