import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1738781219424-O1YP57AGWCTG6N9B9IUR/_C9A5876.jpg', title: "Bruno's Garage", insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-01-bruno-s-garage-black-framed.jpg?v=1793956736' },
  { file: '1738781218040-6HH1331M4K1YNFIZ8Q4X/_C9A5856.jpg', title: 'Late Night Bar', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-02-late-night-bar-black-framed.jpg?v=1793956736' },
  { file: '1738781221006-K81RYF441O57SAY9VG3M/1C9A0198.jpg', title: '24/24', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-03-24-24-black-framed.jpg?v=1793956736' },
  { file: '1738781223787-3DTIML4XTNQV2P9TE6E0/1C9A0230.jpg', title: 'Night Swimming', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-04-night-swimming-black-framed.jpg?v=1793956736' },
  { file: '1740163022348-BS6V802G2BM2EXBQT6AE/Le+Clerc+CarmeauxCodys+Fav.jpg', title: 'Le Clerc Carmeaux', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-05-le-clerc-carmeaux-black-framed.jpg?v=1793956738' },
  { file: '1738781225871-SZZ23JJWFGWA6VRNTMRN/1C9A0313.jpg', title: 'Car Wash', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-06-car-wash-black-framed.jpg?v=1793956737' },
  { file: '1738781234391-68GXIOWOMD8SOXQ1F7LO/1C9A2059.jpg', title: 'Esso Expresso', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-07-esso-expresso-black-framed.jpg?v=1793956741' },
  { file: '1738781227482-22U0IWS7S3VXGXGVI6RM/1C9A0278.jpg', title: 'The Magic Hour', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-08-the-magic-hour-black-framed.jpg?v=1793956741' },
  { file: '1740159701005-QF4LQCHQTUPRQWV7A73D/1C9A0215.jpg', title: 'Green Dream', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-09-green-dream-black-framed.jpg?v=1793956741' },
  { file: '1738781241395-0VJ2CE9L8FBLTK3NTDPF/1C9A1970.jpg', title: 'Blue Gazole', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-10-blue-gazole-black-framed.jpg?v=1793956741' },
  { file: '1740165030493-6PJMMLD56BMYQAXF0SLY/1C9A0419.jpg', title: 'La Laverie', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-11-la-laverie-black-framed.jpg?v=1793956742' },
  { file: '1740163022025-RRT7D0GUDL14HVQ9WVCM/Petrol+Station+LDNCodys+Fav.jpg', title: 'Petrol Station, London', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-the-magic-hour-12-petrol-station-london-black-framed.jpg?v=1793956742' },
]

export default function TheMagicHour() {
  return (
    <CollectionPage
      title="The Magic Hour"
      year="2022"
      pieces={12}
      description="As daylight fades, artificial light gives familiar places a cinematic quality."
      artworks={artworks}
    />
  )
}
