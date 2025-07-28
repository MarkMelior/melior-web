import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import {
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGuitar,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { GoDatabase } from 'react-icons/go';
import { LuCakeSlice, LuFileJson2, LuTerminal } from 'react-icons/lu';
import { MdOutlineCookie } from 'react-icons/md';
import { PiMarkdownLogo } from 'react-icons/pi';
import { RiGitMergeLine, RiNextjsFill, RiSeoLine } from 'react-icons/ri';
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAntdesign,
  SiBabel,
  SiBlender,
  SiEslint,
  SiExpress,
  SiJest,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextui,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStorybook,
  SiStylelint,
  SiTailwindcss,
  SiWebpack,
  SiZod,
} from 'react-icons/si';
import { TbGlobe, TbServerBolt } from 'react-icons/tb';

import type { JSX } from 'react';

export type StackVariants =
  | 'typescript'
  | 'tsx'
  | 'javascript'
  | 'cookie'
  | 'nextjs'
  | 'ssr'
  | 'markdown'
  | 'prisma'
  | 'react'
  | 'redux'
  | 'rtk-query'
  | 'scss'
  | 'tailwind'
  | 'git'
  | 'github'
  | 'docker'
  | 'nextui'
  | 'nestjs'
  | 'mongodb'
  | 'sql'
  | 'webpack'
  | 'npm'
  | 'nodejs'
  | 'python'
  | 'zod'
  | 'mobx'
  | 'zustand'
  | 'eslint'
  | 'ant-design'
  | 'hero-ui'
  | 'babel'
  | 'storybook'
  | 'jest'
  | 'after-effects'
  | 'blender'
  | 'photoshop'
  | 'ci-cd'
  | 'i18n'
  | 'stylelint'
  | 'react-router'
  | 'fsd'
  | 'express'
  | 'react-native'
  | 'postgres'
  | 'json'
  | 'seo'
  | 'bash'
  | 'chat-gpt'
  | 'figma';

export interface StackProps {
  /* ! HEX */
  color?: string
  description?: string
  icon: JSX.Element
  isDarkText?: boolean
  /* Дата начала изучения */
  learningAt?: string
  name: string
}

export const StackData: Record<StackVariants, StackProps> = {
  'after-effects': {
    color: '#CF96FD',
    icon: <SiAdobeaftereffects size={20} />,
    isDarkText: true,
    name: 'After Effects',
  },
  'ant-design': {
    color: '#0170FE',
    icon: <SiAntdesign size={18} />,
    name: 'Ant Design',
  },
  'babel': {
    color: '#F9DC3E',
    icon: <SiBabel size={18} />,
    isDarkText: true,
    name: 'Babel',
  },
  'bash': {
    icon: <LuTerminal size={18} />,
    name: 'Terminal',
  },
  'blender': {
    color: '#E87D0D',
    icon: <SiBlender size={18} />,
    name: 'Blender',
  },
  'chat-gpt': {
    color: '#2EA986',
    icon: <SiOpenai size={18} />,
    name: 'Chat GPT',
  },
  'ci-cd': {
    color: 'black',
    icon: <RiGitMergeLine size={18} />,
    name: 'CI/CD',
  },
  'cookie': {
    color: 'bg-yellow-500',
    icon: <MdOutlineCookie size={18} />,
    name: 'Cookie',
  },
  'docker': {
    color: '#2496ED',
    icon: <FaDocker size={20} />,
    name: 'Docker',
  },
  'eslint': {
    color: '#4B32C3',
    icon: <SiEslint size={18} />,
    name: 'ESLint',
  },
  'express': {
    color: 'black',
    icon: <SiExpress size={18} />,
    name: 'Express',
  },
  'figma': {
    color: '#F24E1E',
    icon: <FaFigma size={18} />,
    name: 'Figma',
  },
  'fsd': {
    color: '#3481FE',
    description: 'Хорошо понимаю принципы архитектурной методологии и умею адаптировать её под конкретные задачи. Этот сайт написан с использованием FSD.',
    icon: <LuCakeSlice size={18} />,
    name: 'FSD',
  },
  'git': {
    color: '#E44C30',
    icon: <FaGitAlt size={20} />,
    name: 'Git',
  },
  'github': {
    icon: <BsGithub size={20} />,
    name: 'GitHub',
  },
  'hero-ui': {
    color: 'black',
    icon: <SiNextui size={18} />,
    name: 'Hero UI',
  },
  'i18n': {
    color: '#26A69A',
    icon: <TbGlobe size={18} />,
    name: 'i18n',
  },
  'javascript': {
    color: 'bg-yellow-500',
    icon: <BiLogoJavascript size={20} />,
    name: 'JavaScript',
  },
  'jest': {
    color: '#C21325',
    icon: <SiJest size={18} />,
    name: 'Jest',
  },
  'json': {
    icon: <LuFileJson2 size={18} />,
    name: 'json',
  },
  'markdown': {
    icon: <PiMarkdownLogo size={20} />,
    name: 'Markdown',
  },
  'mobx': {
    color: '#FF9955',
    description: 'Основной инструмент для управления состоянием в проектах СберСервис. Уверенно работаю с observable, computed, action и makeAutoObservable.\n\nЕсть опыт миграции больших проектов с Redux на MobX',
    icon: <SiMobx size={18} />,
    name: 'MobX',
  },
  'mongodb': {
    color: '#47A248',
    icon: <SiMongodb size={20} />,
    name: 'MongoDB',
  },
  'nestjs': {
    color: '#E0234E',
    icon: <SiNestjs size={18} />,
    name: 'NestJS',
  },
  'nextjs': {
    color: 'black',
    description: 'Владею CSR, SSR, SSG, ISR, PPR. Знаю все тонкости работы с серверными компонентами. Как пример, этот сайт написан на Next.js.',
    icon: <RiNextjsFill size={20} />,
    name: 'Next.js',
  },
  'nextui': {
    icon: <SiNextui size={18} />,
    name: 'Next UI',
  },
  'nodejs': {
    icon: <FaNodeJs size={18} />,
    name: 'Node.js',
  },
  'npm': {
    color: '#CB3837',
    icon: <FaNpm size={20} />,
    name: 'npm',
  },
  'photoshop': {
    color: '#31A8FF',
    icon: <SiAdobephotoshop size={18} />,
    name: 'Photoshop',
  },
  'postgres': {
    color: '#4169E1',
    icon: <SiPostgresql size={18} />,
    name: 'Postgres',
  },
  'prisma': {
    color: '#2D3748',
    icon: <SiPrisma size={18} />,
    name: 'Prisma',
  },
  'python': {
    color: '#3776AB',
    icon: <FaPython size={18} />,
    name: 'Python',
  },
  'react': {
    color: '#61DAFB',
    description: 'Основной инструмент интерфейсной разработки. Если сайт строго защищен авторизацией, SEO не важно или нужна мобильная версия - то пишу на React.',
    icon: <FaReact size={20} />,
    isDarkText: true,
    name: 'React',
  },
  'react-native': {
    color: '#61DAFB',
    icon: <FaReact size={20} />,
    isDarkText: true,
    name: 'React Native',
  },
  'react-router': {
    color: '#CA4245',
    icon: <SiReactrouter size={18} />,
    name: 'React Router',
  },
  'redux': {
    color: '#593D88',
    description: 'Используем в СберСервис, но в основном это легаси (перешли на MobX)\n\nХорошо знаю createSlice, configureStore, createAsyncThunk. Умею строить масштабируемую структуру хранилища, разбивать логику по фичам (особенно в связке с FSD).',
    icon: <SiRedux size={18} />,
    name: 'Redux',
  },
  'rtk-query': {
    color: '#FF4154',
    icon: <SiReactquery size={18} />,
    name: 'RTK Query',
  },
  'scss': {
    color: '#CC6699',
    description: 'Имею опыт работы с переменными, @mixin, @include, вложенностью. Использую SCSS во всех проектах, особенно когда нужна гибкость и расширяемость стилей.',
    icon: <FaSass size={20} />,
    name: 'Scss',
  },
  'seo': {
    icon: <RiSeoLine size={18} />,
    name: 'SEO',
  },
  'sql': {
    icon: <GoDatabase size={18} />,
    name: 'SQL',
  },
  'ssr': {
    icon: <TbServerBolt size={18} />,
    name: 'SSR',
  },
  'storybook': {
    color: '#FF4785',
    icon: <SiStorybook size={18} />,
    name: 'Storybook',
  },
  'stylelint': {
    color: '#263238',
    icon: <SiStylelint size={18} />,
    name: 'Stylelint',
  },
  'tailwind': {
    color: '#38B2AC',
    icon: <SiTailwindcss size={18} />,
    name: 'Tailwind',
  },
  'tsx': {
    icon: <FaReact size={20} />,
    name: 'TSX',
  },
  'typescript': {
    color: '#007ACC',
    description: 'С самого начала обучения фронту - я пишу на TypeScript. Сначала не понимал зачем он нужен, а сейчас не могу без него жить.\n\nИмею большой опыт миграции проектов с JavaScript на TypeScript.',
    icon: <BiLogoTypescript size={20} />,
    name: 'TypeScript',
  },
  'webpack': {
    color: '#8DD6F9',
    description: 'Имею опыт глубокой настройки и оптимизации сборки.\n\nВ рамках задач в Сбере - оптимизировал конфигурацию так, что удалось: Уменьшить вес фронтенд-бандлов на ~32% и ускорить загрузку страниц за счёт разбивки на чанки.',
    icon: <SiWebpack size={18} />,
    isDarkText: true,
    name: 'Webpack',
  },
  'zod': {
    color: '#3E67B1',
    icon: <SiZod size={18} />,
    name: 'Zod',
  },
  'zustand': {
    color: '#FFB441',
    description: 'Нравится децентрализованность и простота. На каждый строр - свой хук :) Использую во всех своих пет-проектах.',
    icon: <FaGuitar size={18} />,
    name: 'Zustand',
  },
};
