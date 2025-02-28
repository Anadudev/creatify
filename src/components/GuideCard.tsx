import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GuideCardProps {
  title: string;
  description: string;
  linkText: string;
  thumbnail?: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
  title,
  description,
  linkText,
  thumbnail
}) => {
  return (
    <div className="border flex flex-1 text-center flex-col rounded-xl border-neutral-600 max-w-96">
      <div className="shadow-xl p-4 shadow-neutral-700/50 flex flex-col gap-4">
        <div className="">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="">
          <p className="text-neutral-400">{description}</p>
        </div>
        <div className="">
          <Link
            href="#"
            className="text-black bg-neutral-50 py-2 px-4 rounded-full flex w-fit gap-4 font-bold mx-auto"
          >
            <span className="">{linkText} </span><ArrowRight className="bg-black text-neutral-50 rounded-full p-1" />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="relative h-48 bg-cover">
          <Image src={thumbnail || ""} className="h-full rounded-b-xl" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
