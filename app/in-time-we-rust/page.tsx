import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740583598017-ZXUH5UPFOJ0NY2N5DB6U/_H6R0262+CB+copy.jpg', title: 'Mustard Underneath', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-01-mustard-underneath-in-situ.jpg?v=1793956750' },
  { file: '1740583577372-8C1SKQBX0D3IWKK0UY4P/_H6R0177.jpg', title: 'Drip Lines', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-02-drip-lines-in-situ.jpg?v=1793956751' },
  { file: '1740583587167-FJDGTUW2U3IXKRFYJB0D/_H6R0185.jpg', title: 'Songlines', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-03-songlines-in-situ.jpg?v=1793956751' },
  { file: '1740583615314-CUOFSJMFDRYV2YCYNPQV/_H6R0278.jpg', title: 'Single Yellow', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-04-single-yellow-in-situ.jpg?v=1793956752' },
  { file: '1740583590908-GCCUWMAXUOP3OAXLIRWY/_H6R0253CB.jpg', title: 'Rust in Time', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-05-rust-in-time-in-situ.jpg?v=1793956755' },
  { file: '1740583601919-BGJAXV1DKOIIPA4L00OO/_H6R0269CB.jpg', title: 'A Fleck of Green', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-06-a-fleck-of-green-in-situ.jpg?v=1793956755' },
  { file: '1740584237869-IR4IK4CEN5M5NA6D88CK/_H6R0270CB+2+copy.jpg', title: 'Klien Blue', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-07-klien-blue-in-situ.jpg?v=1793956755' },
  { file: 'f73b100b-3660-4e0a-9f30-dc308538e3bc/_H6R0083.jpg', title: 'No 32', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-in-time-we-rust-08-no-32-in-situ.jpg?v=1793956756' },
]

export default function InTimeWeRust() {
  return (
    <CollectionPage
      title="In Time We Rust"
      year="2025"
      pieces={8}
      description="Layers of paint and iron, eroded and repainted over time, where decay becomes abstract beauty."
      artworks={artworks}
    />
  )
}
