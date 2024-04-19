"Use Client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Navigationbar() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Empowering Innovation with <br />
              <span className="text-4xl md:text-[6rem]  font-bold mt-1 leading-none from-neutral-200 to-neutral-500">
                Full Stack Development
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/new-profile.png`}
          alt="hero"
          height={720}
          width={1200}
          className="mx-auto rounded-2xl object-cover h-full object-left-top md:h-[40 rem]"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
