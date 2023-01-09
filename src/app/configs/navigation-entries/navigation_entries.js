/**
 * analytics
 */

export const analytics = [
  {
    id: 'statistic-component',
    title: 'Statistics',
    type: 'item',
    icon: 'heroicons-outline:chart-pie',
    url: 'statistic',
  },
  {
    id: 'finance-component',
    title: 'Finance',
    type: 'item',
    icon: 'heroicons-outline:cash',
    url: 'finance',
  },
]

/**
 * restaurant
 */
export const restuarant = {
  id: 'restaurant-collapse',
  title: 'Restaurants',
  type: 'collapse',
  icon: 'material-outline:restaurant',
  children: [
    {
      id: 'restaurant-collapse.resturant',
      title: 'Restaurant List',
      type: 'item',
    },
    {
      id: 'restaurant-collapse.regulation',
      title: 'Restaurant Regulations',
      type: 'item',
    },
  ],
}

/**
 * bar
 */

export const bar = {
  id: 'bar-collapse',
  title: 'Bars',
  type: 'collapse',
  icon: 'material-outline:local_bar',
  children: [
    {
      id: 'bar-collapse.bar',
      title: 'Bar List',
      type: 'item',
    },
    {
      id: 'bar-collapse.drinks-menu',
      title: 'Drinks Menu',
      type: 'item',
    },
  ],
}

/**
 * entertainement
 */

export const entertainement = {
  id: 'entertainement-collapse',
  title: 'Entertainements',
  type: 'collapse',
  icon: 'material-outline:directions_run',
  children: [
    {
      id: 'entertainement-collapse.entertainement',
      title: 'Entertainement',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.day-activities',
      title: 'Day Activities',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.night-shows',
      title: 'Night Shows',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.sport-event',
      title: 'Sport Events',
      type: 'item',
    },
  ],
}

/**
 * point of interest
 */

export const interestPoint = {
  id: 'point-interest',
  title: 'Point of Interest',
  type: 'collapse',
  icon: 'heroicons-outline:map',
  children: [
    {
      id: 'point-interest.category',
      title: 'Category List',
      type: 'item',
    },
    {
      id: 'point-interest.items',
      title: 'Points List',
      type: 'item',
    },
  ],
}

/**
 * excursion
 */
export const excursion = {
  it: 'excursion',
  title: 'Excursion & Activities',
  type: 'collapse',
  icon: 'heroicons-outline:emoji-happy',
  children: [
    {
      id: 'excursion.category',
      title: 'Category list',
      type: 'item',
    },
    {
      id: 'excursion.list',
      title: 'Excursions List',
      type: 'item',
    },
  ],
}
