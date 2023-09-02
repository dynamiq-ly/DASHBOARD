import { lazy } from 'react'

const FileManager = lazy(() => import('./files/FileManager'))
const SearchManager = lazy(() => import('./search/SearchManager'))

const FileManagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'file-system',
      children: [
        {
          path: '',
          element: <FileManager />,
        },
        {
          path: 'search',
          element: <SearchManager />,
        },
      ],
    },
  ],
}

export default FileManagerConfig
