import { useDispatch } from 'react-redux'
import { createContext, useContext, useState, useEffect } from 'react'
import { updateNavigationItem } from 'app/store/fuse/navigationSlice'
import axios from 'axios'

const HelperContext = createContext({
  badgeCount: 0,
})

export const useHelperContext = () => useContext(HelperContext)

const HelperProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [badgeCount, setBadgeCount] = useState(0)

  const fetchWeeklyTimingCount = async () => {
    try {
      console.log('fetchWeeklyTimingCount')
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/entertainement/weekly-count`
      )
      setBadgeCount(response.data)
    } catch (error) {
      console.error('Error fetching weekly count:', error)
      setBadgeCount(0)
    }
  }

  useEffect(() => {
    fetchWeeklyTimingCount()
  }, [])

  useEffect(() => {
    dispatch(
      updateNavigationItem('entertainement-collapse.calendar', {
        badge: {
          title: badgeCount,
        },
      })
    )
  }, [dispatch, badgeCount])

  return <HelperContext.Provider value={{}}>{children}</HelperContext.Provider>
}

export default HelperProvider
