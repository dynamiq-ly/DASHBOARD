import { useDispatch } from 'react-redux'
import { createContext, useContext, useState, useEffect } from 'react'
import { updateNavigationItem } from 'app/store/fuse/navigationSlice'
import axios from 'axios'

const HelperContext = createContext({
  badgeCount: 0,
  locations: [],
})

export const useHelperContext = () => useContext(HelperContext)

const HelperProvider = ({ children }) => {
  const dispatch = useDispatch()

  const [badgeCount, setBadgeCount] = useState(0)
  const [locations, setLocations] = useState([])

  /* Fetch event count */
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

  /* Fetch locations */
  const fetchLocations = async () => {
    try {
      console.log('fetchLocations')
      const response = await axios.get(`${process.env.REACT_APP_URL}/api/hotel/location-parts`)
      setLocations(response.data)
    } catch (error) {
      console.error('Error fetching locations:', error)
      setLocations([])
    }
  }
  useEffect(() => {
    fetchLocations()
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

  const functions = {
    fetchWeeklyTimingCount,
    fetchLocations,
  }

  return (
    <HelperContext.Provider value={{ badgeCount, locations, ...functions }}>
      {children}
    </HelperContext.Provider>
  )
}

export default HelperProvider
