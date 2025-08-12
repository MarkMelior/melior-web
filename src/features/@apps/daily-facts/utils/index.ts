'use server';

import fs from 'fs/promises';
import path from 'path';

import { getMdx } from '@/shared/lib/mdx';

import type { Grades } from '../constants';

const getFactsDir = (grade: Grades) => path.join(process.cwd(), `src/features/@apps/daily-facts/facts/${grade}`);

/**
 * Получает список всех .mdx файлов в папке с фактами
 */
const getFactFilenames = async (grade: Grades): Promise<string[]> => {
  const files = await fs.readdir(getFactsDir(grade));

  return files.filter((file) => file.endsWith('.mdx')).sort(); // сортировка по алфавиту
};

/**
 * Возвращает индекс факта, зависящий от текущей даты
 */
export const getIndexFromDay = async (grade: Grades): Promise<number> => {
  const files = await getFactFilenames(grade);
  const start = new Date(2025, 0, 1);
  const today = new Date();
  const diffDays = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  return diffDays % files.length;
};

/**
 * Загружает факт по индексу
 */
export const getDailyFactByIndex = async (index: number, grade: Grades): Promise<{ content: string }> => {
  const files = await getFactFilenames(grade);

  if (index < 0 || index >= files.length) {
    throw new Error(`Invalid fact index: ${index}`);
  }

  const filePath = path.join(path.join(getFactsDir(grade), files[index]));
  const { content } = await getMdx(filePath);

  return { content };
};
