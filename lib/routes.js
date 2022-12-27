const pageEnum = {
  home: 100,
  corporate: 200,
  who_we_are: 20100,
  board_of_directors: 20200,
  services: 300,
  service_inspection: 30100, // servis denetim hizmetleri
  vehicle_stocking: 30200, // araç stoklama hizmetleri
  chauffeur_driven_vehicle: 30300, // şoförlü araç hizmeti
  other_sectoral: 30400, // diğer sektörel hizmetler
  expertiz: 30500, // expertiz hizmeti
  corporate_expertise: 30500100, // kurumsal expertiz
  damage_and_assessment: 30500200, // hasar ve değerlendirme
  individual_expertise: 30500300, // bireysel ekspertiz
  mobile_expertise: 30500400, // mobil ekspertiz
  career: 400, // kariyer
  test_form: 4001,
  contact: 500
}

const redirects = [
  {
    source: '/tr/about-us.html',
    destination: '/tr/about-us',
    permanent: true,
    locale: false
  }
]

const routes = [
  {
    page: pageEnum.home,
    sources: [
      {lng: 'en', source: "/en", destination: '/en'},
      {lng: 'tr', source: "/tr", destination: '/tr'}
    ]
  },
  {
    page: pageEnum.who_we_are,
    sources: [
      {lng: 'en', source: "/en/who-we-are", destination: '/en/who-we-are'},
      {lng: 'tr', source: "/tr/who-we-are", destination: '/tr/who-we-are'}
    ]
  },
  {
    page: pageEnum.board_of_directors,
    sources: [
      {lng: 'en', source: "/en/board-of-directors", destination: '/en/board-of-directors'},
      {lng: 'tr', source: "/tr/board-of-directors", destination: '/tr/board-of-directors'}
    ]
  },
  {
    page: pageEnum.service_inspection,
    sources: [
      {
        lng: 'en',
        source: "/en/services/service-inspection-service",
        destination: '/en/services/service-inspection-service'
      },
      {
        lng: 'tr',
        source: "/tr/services/service-inspection-service",
        destination: '/tr/services/service-inspection-service'
      }
    ]
  },
  {
    page: pageEnum.vehicle_stocking,
    sources: [
      {lng: 'en', source: "/en/services/vehicle-stocking", destination: '/en/services/vehicle-stocking'},
      {lng: 'tr', source: "/tr/services/vehicle-stocking", destination: '/tr/services/vehicle-stocking'}
    ]
  },
  {
    page: pageEnum.chauffeur_driven_vehicle,
    sources: [
      {
        lng: 'en',
        source: "/en/services/chauffeur-driven-vehicle",
        destination: '/en/services/chauffeur-driven-vehicle'
      },
      {lng: 'tr', source: "/tr/services/chauffeur-driven-vehicle", destination: '/tr/services/chauffeur-driven-vehicle'}
    ]
  },
  {
    page: pageEnum.other_sectoral,
    sources: [
      {lng: 'en', source: "/en/services/other-sectoral-services", destination: '/en/services/other-sectoral-services'},
      {lng: 'tr', source: "/tr/services/other-sectoral-services", destination: '/tr/services/other-sectoral-services'}
    ]
  },
  {
    page: pageEnum.expertiz,
    sources: [
      {lng: 'en', source: "/en/services/expertiz", destination: '/en/services/expertiz'},
      {lng: 'tr', source: "/tr/services/expertiz", destination: '/tr/services/expertiz'}
    ]
  },
  {
    page: pageEnum.corporate_expertise,
    sources: [
      {
        lng: 'en',
        source: "/en/services/expertiz/corporate-expertise",
        destination: '/en/services/expertiz/corporate-expertise'
      },
      {
        lng: 'tr',
        source: "/tr/services/expertiz/corporate-expertise",
        destination: '/tr/services/expertiz/corporate-expertise'
      }
    ]
  },
  {
    page: pageEnum.damage_and_assessment,
    sources: [
      {
        lng: 'en',
        source: "/en/services/expertiz/damage-and-assessment",
        destination: '/en/services/expertiz/damage-and-assessment'
      },
      {
        lng: 'tr',
        source: "/tr/services/expertiz/damage-and-assessment",
        destination: '/tr/services/expertiz/damage-and-assessment'
      }
    ]
  },
  {
    page: pageEnum.individual_expertise,
    sources: [
      {
        lng: 'en',
        source: "/en/services/expertiz/individual-expertiz",
        destination: '/en/services/expertiz/individual-expertiz'
      },
      {
        lng: 'tr',
        source: "/tr/services/expertiz/individual-expertiz",
        destination: '/tr/services/expertiz/individual-expertiz'
      }
    ]
  },
  {
    page: pageEnum.mobile_expertise,
    sources: [
      {
        lng: 'en',
        source: "/en/services/expertiz/mobile-expertiz",
        destination: '/en/services/expertiz/mobile-expertiz'
      },
      {lng: 'tr', source: "/tr/services/expertiz/mobile-expertiz", destination: '/tr/services/expertiz/mobile-expertiz'}
    ]
  },
  {
    page: pageEnum.career,
    sources: [
      {lng: 'en', source: "/en/career", destination: '/en/career'},
      {lng: 'tr', source: "/tr/career", destination: '/tr/career'}
    ]
  },
  {
    page: pageEnum.contact,
    sources: [
      {lng: 'en', source: "/en/contact", destination: '/en/contact'},
      {lng: 'tr', source: "/tr/contact", destination: '/tr/contact'}
    ]
  }
]

const getLink = (page, lng) => {
  return routes.find(f => f.page == page)?.sources.find(f => f.lng == lng)?.source ?? "/" + lng
}
const getLinkBySource = (oldSource, oldLng, newLng) => {
  const source = "/" + oldLng + oldSource;
  const oldRoute = routes.find(routeItem => routeItem.sources.find(sourceItem => sourceItem.source == source))
  if (!oldRoute)
    return "/" + newLng + oldSource;

  const route = oldRoute.sources.find(f => f.lng == newLng)
  return route?.source ?? "/" + newLng;
}
const getLinkByDestination = (destination, lng) => {

  const route = routes.find(routeItem => routeItem.sources.find(sourceItem => sourceItem.destination == destination))
  if (!route)
    return "/" + lng + destination;

  const source = route.sources.find(f => f.lng == lng)
  return source?.source ?? "/" + lng + destination;
}
const isActive = (path, lng, page) => {
  path = path == "/" ? "" : path;
  const source = "/" + lng + path;
  const route = routes.find(routeItem => routeItem.sources.find(sourceItem => sourceItem.source == source || sourceItem.destination == source))
  if (!route)
    return false;
  if (Array.isArray(page)) {
    page = page.find((e) => e == route.page)
  }
  return page <= route?.page && page + 100 > route.page;
}
const getRoutes = () => {
  let result = [];
  routes.forEach((routeItem) => {
    routeItem.sources.forEach((sourceItem) => {
      result.push({
        source: sourceItem.source,
        destination: sourceItem.destination,
        locale: false
      })
    })
  });
  return result;
}

module.exports.routes = getRoutes;

module.exports.getLink = getLink;

module.exports.getLinkBySource = getLinkBySource;

module.exports.getLinkByDestination = getLinkByDestination;

module.exports.isActive = isActive;

module.exports.pageEnum = pageEnum;

module.exports.redirects = redirects;