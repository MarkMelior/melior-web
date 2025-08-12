import { redirect } from 'next/navigation';

import { RoutesEnum } from '@/shared/constants';

export default function DailyFactsPage() {
  redirect(RoutesEnum.APP_DAILY_FACTS_FRONTEND);
}
