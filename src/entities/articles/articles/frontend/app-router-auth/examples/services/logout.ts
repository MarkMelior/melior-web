'use server';

import { deleteSession } from '../api/session';

export async function logout() {
  await deleteSession();
}
