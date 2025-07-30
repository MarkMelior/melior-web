import { NotFound as NotFoundContent } from '@/widgets/NotFound';

import { MinimalLayout } from '@core/layouts/minimal';

export default function Page() {
  return (
    <MinimalLayout>
      <NotFoundContent
        description="Ждите, скоро здесь всё будет как надо"
        emoji="❤️‍🔥"
        title="Факты в разработке"
      />
    </MinimalLayout>
  );
}
