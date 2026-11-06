import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg', title: 'Blue Water', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-01-h6r0018-in-situ.jpg?v=1793956756' },
  { file: '1740593183699-LAXXM1SLKESHKD8I4KEU/_H6R0043.jpg', title: 'Plus Two Hundred', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-02-h6r0043-in-situ.jpg?v=1793956757' },
  { file: '1740593194969-E0FK768KANWO4LTEAQJC/_H6R0053.jpg', title: 'Green Cable', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-03-h6r0053-in-situ.jpg?v=1793956760' },
  { file: '1740593195738-KYGS3K16MK25FDX82DL0/_H6R0058.jpg', title: 'Orange Twenty-Four', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-04-h6r0058-in-situ.jpg?v=1793956760' },
  { file: '1740593207743-B1KBNSOQULIT1NVO2HZE/_H6R0069.jpg', title: 'Minus Twenty-Eight, Minus Thirty-Five', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-05-h6r0069-in-situ.jpg?v=1793956760' },
  { file: '1740593205335-GI9WN7JMX0FLQFL51GST/_H6R0081.jpg', title: 'Orange Sixty-Four', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-neon-numbers-06-h6r0081-in-situ.jpg?v=1793956761' },
]

export default function NeonNumbers() {
  return (
    <CollectionPage
      title="Neon Numbers"
      year="2025"
      pieces={6}
      description="Graphic road markings seen in isolation become compositions of line and colour, echoing the language of early street culture."
      artworks={artworks}
      heroBgFile="1740593183577-NWHQ87P95UA6BS1V9DD7/_H6R0018.jpg"
    />
  )
}
