import { map } from 'nanostores';

export const chatStore = map({
  started: false,
  aborted: false,
  showChat: false,
});
