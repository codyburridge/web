import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1738781219424-O1YP57AGWCTG6N9B9IUR/_C9A5876.jpg', title: "Bruno's Garage" },
  { file: '1738781218040-6HH1331M4K1YNFIZ8Q4X/_C9A5856.jpg', title: 'Late Night Bar' },
  { file: '1738781221006-K81RYF441O57SAY9VG3M/1C9A0198.jpg', title: '24/24' },
  { file: '1738781223787-3DTIML4XTNQV2P9TE6E0/1C9A0230.jpg', title: 'Night Swimming' },
  { file: '1740163022348-BS6V802G2BM2EXBQT6AE/Le+Clerc+CarmeauxCodys+Fav.jpg', title: 'Le Clerc Carmeaux' },
  { file: '1738781225871-SZZ23JJWFGWA6VRNTMRN/1C9A0313.jpg', title: 'Car Wash' },
  { file: '1738781234391-68GXIOWOMD8SOXQ1F7LO/1C9A2059.jpg', title: 'Esso Expresso' },
  { file: '1738781227482-22U0IWS7S3VXGXGVI6RM/1C9A0278.jpg', title: 'The Magic Hour' },
  { file: '1740159701005-QF4LQCHQTUPRQWV7A73D/1C9A0215.jpg', title: 'Green Dream' },
  { file: '1738781241395-0VJ2CE9L8FBLTK3NTDPF/1C9A1970.jpg', title: 'Blue Gazole' },
  { file: '1740165030493-6PJMMLD56BMYQAXF0SLY/1C9A0419.jpg', title: 'La Laverie' },
  { file: '1740163022025-RRT7D0GUDL14HVQ9WVCM/Petrol+Station+LDNCodys+Fav.jpg', title: 'Petrol Station, London' },
]

export default function TheMagicHour() {
  return (
    <CollectionPage
      title="The Magic Hour"
      year="2022"
      pieces={12}
      description="Late-night petrol stations and French garages, frozen in neon and silence."
      artworks={artworks}
    />
  )
}
