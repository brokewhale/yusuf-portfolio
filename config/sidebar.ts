import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/0xKenny__',
    icon: FaTwitter,
  },

  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kehindeyusuf',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/14532445/kehinde-yusuf',
    icon: FaStackOverflow,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UC1v436VtEx14EpqPPyhd6UQ',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/brokewhale',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/codingmage',
    icon: FaDev,
  },
]
