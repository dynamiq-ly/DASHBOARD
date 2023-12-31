import axios from 'axios'
import { SnackbarProvider } from 'notistack'
import { useSelector } from 'react-redux'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import FuseTheme from '@fuse/core/FuseTheme'
import FuseLayout from '@fuse/core/FuseLayout'
import BrowserRouter from '@fuse/core/BrowserRouter'
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice'
import { selectUser } from 'app/store/userSlice'
import themeLayouts from 'app/theme-layouts/themeLayouts'
import { selectMainTheme } from 'app/store/fuse/settingsSlice'
import FuseAuthorization from '@fuse/core/FuseAuthorization'
import settingsConfig from 'app/configs/settingsConfig'
import withAppProviders from './withAppProviders'
import { AuthProvider } from './auth/AuthContext'

/**
 * Axios HTTP Request defaults
 */
axios.defaults.baseURL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://api.utells.com'
    : 'http://localhost:8000'

// axios.defaults.withCredentials = true
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

const emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
}

const App = () => {
  const user = useSelector(selectUser)
  const langDirection = useSelector(selectCurrentLanguageDirection)
  const mainTheme = useSelector(selectMainTheme)

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <FuseTheme theme={mainTheme} direction={langDirection}>
        <AuthProvider>
          <BrowserRouter>
            <FuseAuthorization
              userRole={user.role}
              loginRedirectUrl={settingsConfig.loginRedirectUrl}
            >
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                classes={{
                  containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                }}
              >
                <FuseLayout layouts={themeLayouts} />
              </SnackbarProvider>
            </FuseAuthorization>
          </BrowserRouter>
        </AuthProvider>
      </FuseTheme>
    </CacheProvider>
  )
}

export default withAppProviders(App)()
