import i18next from 'i18next'

import en from './i18n/en'
import ar from './i18n/ar'
import SafetyScreen from './SafetyScreen'

i18next.addResourceBundle('en', 'safetyPage', en)
i18next.addResourceBundle('ar', 'safetyPage', ar)

const SafetyConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'safety',
      element: <SafetyScreen />,
    },
  ],
}

export default SafetyConfig
