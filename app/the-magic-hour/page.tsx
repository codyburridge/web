import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1738781219424-O1YP57AGWCTG6N9B9IUR/_C9A5876.jpg', title: 'C9A5876' },
  { file: '1738781218040-6HH1331M4K1YNFIZ8Q4X/_C9A5856.jpg', title: 'C9A5856' },
  { file: '1738781221006-K81RYF441O57SAY9VG3M/1C9A0198.jpg', title: '1C9A0198' },
  { file: '1738781223787-3DTIML4XTNQV2P9TE6E0/1C9A0230.jpg', title: '1C9A0230' },
  { file: '1740163022348-BS6V802G2BM2EXBQT6AE/Le+Clerc+CarmeauxCodys+Fav.jpg', title: 'Le Clerc Carmeaux' },
  { file: '1738781225871-SZZ23JJWFGWA6VRNTMRN/1C9A0313.jpg', title: '1C9A0313' },
  { file: '1738781234391-68GXIOWOMD8SOXQ1F7LO/1C9A2059.jpg', title: '1C9A2059' },
  { file: '1738781227482-22U0IWS7S3VXGXGVI6RM/1C9A0278.jpg', title: '1C9A0278' },
  { file: '1740159701005-QF4LQCHQTUPRQWV7A73D/1C9A0215.jpg', title: '1C9A0215' },
  { file: '1738781241395-0VJ2CE9L8FBLTK3NTDPF/1C9A1970.jpg', title: '1C9A1970' },
  { file: '1740165030493-6PJMMLD56BMYQAXF0SLY/1C9A0419.jpg', title: '1C9A0419' },
  { file: '1740163022025-RRT7D0GUDL14HVQ9WVCM/Petrol+Station+LDNCodys+Fav.jpg', title: 'Petrol Station, London' },
]

export default function TheMagicHour() {
  return (
    <CollectionPage
      title="The Magic Hour"
      year="2025"
      pieces={12}
      description="The hour when daylight surrenders — streets, faces and architecture caught in the last gold of the day."
      artworks={artworks}
      heroBgFile="1740163022348-BS6V802G2BM2EXBQT6AE/Le+Clerc+CarmeauxCodys+Fav.jpg"
    />
  )
}
