import { redirect } from 'next/navigation';

import { RoutesEnum } from '@/shared/constants';

import { DEFAULT_GRADE } from '@/features/@apps/daily-facts';

export default function DailyFactsPage() {
  redirect(`${RoutesEnum.APP_DAILY_FACTS_FRONTEND}/${DEFAULT_GRADE}`);
}
