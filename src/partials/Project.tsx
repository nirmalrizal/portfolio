interface IImage {
  src: string;
  alt: string;
}

interface IProject {
  name: string;
  description: string;
  link: string;
  img: IImage;
  category: JSX.Element;
}

const Project = ({ name, description, link, img, category }: IProject) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={link} target="_blank">
        <img
          className="h-36 w-48 bg-white object-cover hover:translate-y-1"
          src={img.src}
          alt={img.alt}
          loading="lazy"
        />
      </a>
    </div>
    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-cyan-400" href={link} target="_blank">
          <div className="text-xl font-semibold">{name}</div>
        </a>
        <div className="ml-3 flex gap-2">{category}</div>
      </div>
      <p className="mt-3 text-gray-400">{description}</p>
    </div>
  </div>
);

export default Project;
