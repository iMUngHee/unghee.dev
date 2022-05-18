/* Types */
import type { NextPage } from 'next';

/* Components */
import Container from '@components/Layout/article';
import Layout from '@components/Layout/animate';
import Paragraph from '@components/paragraph';
import HeadLine from '@components/headLine';
import Footer from '@components/Footer';
import Skill from '@components/Skill';
import Image from 'next/image';
import Link from 'next/link';
import {
  JavaScript,
  ReactIcon,
  ReactNative,
  Swift,
  TypeScript,
  Vue,
} from '@components/svgIcon';

const Home: NextPage = () => {
  return (
    <Layout title="UngHee" description="하루 하루는 성실히, 인생은 되는대로">
      <Container>
        <div className="relative m-auto mt-5 flex h-80 w-[80%] items-center justify-center overflow-hidden rounded-md">
          <Image
            src={'/image/background.png'}
            layout="fill"
            objectFit="cover"
            alt="background"
            className="object-center"
          />
        </div>
        <div className="mt-5 flex flex-col gap-5 px-3">
          <div>
            <h2 className="text-3xl font-bold">Lee Unghee</h2>
            <p className="mt-1">Developer ( Front-End / iOS ) </p>
            <p className="">unghee66@gmail.com </p>
            <div className="mt-5 flex w-full items-center justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-2xl md:h-36 md:w-36">
                <Image src="/image/profile.png" alt="profile" layout="fill" />
              </div>
            </div>
          </div>
          {/* <div>
            <HeadLine>Work</HeadLine>
            <Paragraph>
              <div></div>
            </Paragraph>
          </div> */}
          <div>
            <HeadLine>Bio</HeadLine>
            <Paragraph style="flex flex-col">
              <span className="font-bold">
                - 경신고등학교 (2015.02 ~ 2018.02)
              </span>
              <span className="font-bold">- 아주대학교 (2018.02 ~ )</span>
            </Paragraph>
          </div>
          <div>
            <HeadLine>Skills</HeadLine>
            <Paragraph style="flex flex-col text-xl gap-4">
              <Skill title="React" progress={`w-[60%]`} color="text-cyan-400">
                <ReactIcon />
              </Skill>
              <Skill
                title="JavaScript"
                progress={`w-[70%]`}
                color="text-yellow-400"
              >
                <JavaScript />
              </Skill>
              <Skill
                title="ReactNative"
                progress={`w-[50%]`}
                color="text-purple-400"
              >
                <ReactNative />
              </Skill>
              <Skill
                title="TypeScript"
                progress={`w-[40%]`}
                color="text-blue-400"
              >
                <TypeScript />
              </Skill>
              <Skill title="Swift" progress={`w-[30%]`} color="text-orange-400">
                <Swift />
              </Skill>
              <Skill title="Vue" progress={`w-[20%]`} color="text-green-400">
                <Vue />
              </Skill>
            </Paragraph>
          </div>
          <div>
            <HeadLine>Like</HeadLine>
            <Paragraph style="flex flex-col">
              <span className="font-bold">- Movie 🎬</span>
              <span className="font-bold">- Weight Training 🏋️</span>
              <span className="font-bold">- Poetry 📜</span>
            </Paragraph>
          </div>
          <div>
            <HeadLine>On the Web</HeadLine>
            <Paragraph style="ml-2 pt-1 flex gap-2 items-center">
              <Link href="https://github.com/iMUngHee" passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="h-8 w-8 cursor-pointer fill-zinc-800 transition-all duration-500 hover:fill-zinc-400 dark:fill-amber-50
                dark:hover:fill-zinc-400"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </Link>
              <Link href="https://velog.io/@ung7497" passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-8 w-8 cursor-pointer fill-zinc-800 transition-all duration-500 hover:fill-zinc-400 dark:fill-amber-50
                dark:hover:fill-zinc-400"
                >
                  <path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z" />
                </svg>
              </Link>
            </Paragraph>
          </div>
        </div>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
