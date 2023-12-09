import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Gshon-Estate',
    description:
      'Real Estate wen application the can allow both seller and buyers to search and sell property',
    image: '/assets/propject-21.PNG',
    github: 'https://github.com/drgerishon/gshon-estate',
    link: 'https://gshon-estate.onrender.com//',
  },
  {
    name: 'Gshon fintech',
    description:
      'Working on a beautiful website for Moscow Beauty, using Next.js and Tailwind CSS to showcase their services and offerings online.',
    image: '/assets/project-18.PNG',
    github: 'https://github.com/drgerishon/gshonplace_backend',
    link: 'https://gshonplace-eshop.onrender.com/',
  },

  {
    name: 'Gshon chat',
    description:
      'Working on a beautiful website for Moscow Beauty, using Next.js and Tailwind CSS to showcase their services and offerings online.',
    image: '/assets/project-9.PNG',
    github:
      'https://github.com/drgerishon/gshon-chart/tree/main/next13-discord-clone',
    link: 'https://gshon-chart.vercel.app/',
  },
  {
    name: 'Evo Gym',
    description: 'Gym and fitness Sessions',
    image: '/assets/project-55.PNG',
    github: 'https://github.com/drgerishon/gym-typescript',
    link: 'https://nairobifit.vercel.app/',
  },
  {
    name: 'KenView SaSa',
    description: 'Last movie search app',
    image: '/assets/project-2.PNG',
    github: 'https://github.com/drgerishon/view_254',
    link: 'https://viewsasa.vercel.app/',
  },
  {
    name: 'Sigon Welfare Group',
    description:
      'Welfare group designed to operate transactions and welfare funds management',
    image: '/assets/project-19.PNG',
    github: 'https://github.com/drgerishon/sigona-welfare-group',
    link: 'https://sigona-welfare-group.vercel.app/',
  },
  {
    name: 'material ui',
    description: 'React design with material ui',
    image: '/assets/project-16.PNG',
    github: 'hhttps://github.com/drgerishon/gshonplace-frontend',
    link: 'https://gshonplace.vercel.app/',
  },
  {
    name: 'Moscow Beauty',
    description:
      'Working on a beautiful website for Moscow Beauty, using Next.js and Tailwind CSS to showcase their services and offerings online.',
    image: '/moscowbeauty.png',
    github: 'https://github.com/vijeykacha/moscowbeauty',
    link: 'https://moscowbeauty.vercel.app/',
  },
  {
    name: 'E-shop',
    description:
      'Working on a beautiful website for Moscow Beauty, using Next.js and Tailwind CSS to showcase their services and offerings online.',
    image: '/assets/project-1.PNG',
    github: 'https://github.com/drgerishon/face',
    link: 'https://github.com/drgerishon/face/',
  },
];

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link} target="_blank">
                        <Image
                          src={project.image}
                          alt=""
                          width={800}
                          height={800}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
