import { lazy } from 'react'

const FileManager = lazy(() => import('./files/FileManager'))

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
      ],
    },
  ],
}

export default FileManagerConfig
