import { Linkedin, Facebook, Slack } from 'lucide-react';

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'clipboard';

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url,
      )}`,
  },

  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/shared/sharer.php?url=${encodeURIComponent(
        config.url,
      )}`,
  },

  slack: {
    name: 'Slack',
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.slack.com/share?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || '')}`,
  },
};
