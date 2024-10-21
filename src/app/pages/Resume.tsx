"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function Resume() {
const tabs = [
    {
        title: "Resume",
        value: "Resume",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-950 to-state-900">
               <a href="/new-resume.pdf" download="Lalit's Resume"><h6 className="text-base">Download latest resume</h6></a>
                <div>
                    <DummyContent />
                </div>
            </div>
        ),
    },
 
];

  return (
    <div className="h-[40rem] md:h-[85rem] [perspective:1000px] relative b flex flex-col max-w-4xl mx-auto w-full  items-start justify-start my-45 scroll-mb-6">
      <Tabs tabs={tabs} />
      
    </div>
    
  );
}

const DummyContent = () => {
  return (
    <img
    src={`/resume.png`}
    alt="hero"
    height={720}
    width={1400}
    className="mx-auto rounded-2xl object-cover h-full object-left-top"
    draggable={false}
  />
  );
};
