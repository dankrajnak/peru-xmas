import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Todo in Peru.
      </h1>
      <h4 className="text-lg mt-5 md:pl-8 font-extralight flex items-center">
        (Or wherever you see Dan next)
      </h4>
    </section>
  );
};

export default Intro;
