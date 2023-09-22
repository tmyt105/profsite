/* eslint-disable @next/next/no-img-element */
import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { LinkCardIcon } from '@/components/link-card-icon';
import { LinkCardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { DiscordPartnerIcon } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { FaBirthdayCake, FaDiscord, FaGithub, FaLocationArrow, FaSteam, FaTwitter, FaUserGraduate, FaXbox, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='container py-6 space-y-6 lg:my-10'>
      <FadeUpStagger>
        <div className='h-16 flex items-center justify-end'>
          <ThemeToggle/>
        </div>
        <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
          <FadeUpDiv className='col-span-12 lg:col-span-4 row-span-3 space-y-5 md:space-y-7 lg:space-y-8'>
            <img className='w-[150px] lg:w-[200px] pointer-events-none rounded-full shadow-xl' src='https://www.tmyt105.leyhp.com/img/icon.png'/>
            <section>
              <h1 className='text-3xl lg:text-4xl font-black'>timu-119</h1>
              <h2 className='text-muted-foreground text-lg lg:text-xl'>HTML・Node.js・JavaScript</h2>
            </section>
            <div className='grid gap-1'>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaLocationArrow/>
                <p>日本 / Japan</p>
              </div>
            </div>
          </FadeUpDiv>
          <LinkCard 
            className='col-span-12 md:col-span-6 lg:col-span-4 hover:border-youtube p-6'
            href='https://youtube.com/@tmyt105_puni'
            isGrid
          >
            <LinkCardIcon className='bg-youtube'>
              <FaYoutube size={25}/>
            </LinkCardIcon>
            <LinkCardName name='YouTube' id='@tmyt105/puni'/>
          </LinkCard>
          <LinkCard
            className='col-span-6 md:col-span-3 lg:col-span-2 hover:border-twitter p-6'
            href='https://x.com/tmyt105_puni'
            isGrid
          >
            <LinkCardIcon className='bg-twitter'>
              <FaTwitter size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Twitter' id='@tmyt105_puni'/>
          </LinkCard>
          <LinkCard
            className='col-span-6 md:col-span-3 lg:col-span-2 hover:border-discord p-6'
            href='https://discord.gg/7KyYhd6SQv'
            isGrid
          >
            <LinkCardIcon className='bg-discord'>
              <FaDiscord size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Discord' id='@tmyt105_official'>
            </LinkCardName>
          </LinkCard>
          <LinkCard
            className='flex justify-between col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-gray-500 p-6'
            href='https://github.com/tmyt105'
          >
            <div className='grid gap-3'>
              <LinkCardIcon className='bg-github'>
                <FaGithub size={25}/>
              </LinkCardIcon>
              <LinkCardName name='GitHub' id='@nonick-mc'/>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <img className='w-8 h-8' src='/programLangs/JavaScript.svg' alt='javascript'/>
            </div>
          </LinkCard>
          <LinkCard
            className='col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-gray-500 p-6'
            href='https://tmyt105.leyhp.com/aimaisan/'
            isGrid
          >
            <LinkCardName name='AIまいさん' id='無能すぎるボット'/>
          </LinkCard>
        </div>
      </FadeUpStagger>
    </main>
  )
}
