import { type StaticImageData } from "next/image";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string | StaticImageData;
  excerpt: string;
  slug?: string;
};

const HeroPost = ({ title, coverImage, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} priority />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-2xl lg:text-5xl leading-tight">{title}</h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
