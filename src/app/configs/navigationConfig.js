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
  rooms,
  phone_directory,
  room_services,
  incidence_report,
  room_requests,
  room_upgrade,
  housekeeping,
  laundry,
  towels,
  television,
  safe_deposit_box,
  electricity,
  air_conditioner,
  hair_dryer,
  check_in_out,
  connectivity,
  extend_stay,
  alarm,
  transportation,
  pool_towels,
  parking,
  laugage_vault,
  medical_assistance,
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
      { ...rooms },
    ],
  },
  {
    id: 'rooms services',
    title: "Room's services",
    subtitle: 'Services within the rooms',
    type: 'group',
    children: [
      { ...room_services },
      { ...phone_directory },
      { ...incidence_report },
      { ...room_requests },
      { ...room_upgrade },
      { ...housekeeping },
      { ...laundry },
      { ...towels },
      { ...television },
      { ...safe_deposit_box },
      { ...electricity },
      { ...air_conditioner },
      { ...hair_dryer },
    ],
  },
  {
    id: 'how can we help',
    title: 'How Can We Help',
    subtitle: 'All reception services',
    type: 'group',
    children: [
      { ...check_in_out },
      { ...connectivity },
      { ...room_upgrade },
      { ...extend_stay },
      { ...alarm },
      { ...transportation },
      { ...pool_towels },
      { ...parking },
      { ...laugage_vault },
      { ...medical_assistance },
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
