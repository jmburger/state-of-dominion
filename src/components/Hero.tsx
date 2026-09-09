import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="px-5 sm:px-8 pt-24 w-full">
          <Image
            src="/logo.png"
            alt="State of Dominion — Est. 2025"
            width={552}
            height={416}
            priority
            unoptimized
            className="anim-fade-in w-[clamp(190px,24vw,340px)] h-auto"
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 px-5 text-center anim-fade-up-1">
          <p className="text-[clamp(0.7rem,1.2vw,1rem)] tracking-[0.3em] uppercase text-foreground/90">
            The wait begins
          </p>

          <Image
            src="/clock.gif"
            alt="Countdown clock"
            width={1460}
            height={1460}
            unoptimized
            className="w-[clamp(200px,30vw,420px)] h-auto"
          />

          <p className="max-w-md text-[clamp(0.7rem,1.2vw,1rem)] tracking-[0.3em] uppercase text-foreground/90 leading-relaxed">
            Something that lasts is
            <br />
            worth waiting for
          </p>
        </div>
      </div>
    </section>
  );
}
