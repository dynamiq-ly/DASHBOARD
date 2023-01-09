import i18next from 'i18next'
import ar from './navigation-i18n/ar'
import en from './navigation-i18n/en'
import tr from './navigation-i18n/tr'

import {
  restuarant,
  bar,
  analytics,
  entertainement,
  interestPoint,
  excursion,
} from './navigation-entries/navigation_entries'

i18next.addResourceBundle('en', 'navigation', en)
i18next.addResourceBundle('tr', 'navigation', tr)
i18next.addResourceBundle('ar', 'navigation', ar)

const navigationConfig = [
  {
    id: 'analytics',
    title: 'Analytics',
    subtitle: 'Business analytics and trackers',
    type: 'group',
    children: [...analytics],
  },
  {
    id: 'facilities',
    title: 'Facilities',
    subtitle: 'Services & Facilities',
    type: 'group',
    children: [
      { ...restuarant },
      { ...bar },
      { ...entertainement },
      { ...interestPoint },
      { ...excursion },
    ],
  },
  {
    id: 'protocols',
    title: 'Protocols',
    subtitle: 'Protcolos & Terms of Use',
    type: 'group',
    children: [
      {
        id: 'protocols.safety-measures-component',
        title: 'Safety',
        translate: 'SAFETY',
        type: 'item',
        icon: 'heroicons-outline:heart',
        url: 'safety',
      },
    ],
  },
]

export default navigationConfig
