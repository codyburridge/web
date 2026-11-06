import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1738850753650-OXJ53JQ3WVX8P1EGZGA2/S0400001.jpg', title: 'Grey #1', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-01-grey-1-in-situ.jpg?v=1793956746' },
  { file: '1738850755949-I8D5LBKVB4EN5J0XLR4C/S0400016.jpg', title: 'Green #1', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-02-green-1-in-situ.jpg?v=1793956745' },
  { file: '1738850757791-KPT4RPH1HMV0VJCO8R6I/S0400003.jpg', title: 'Grey #2', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-03-grey-2-in-situ.jpg?v=1793956746' },
  { file: '1738850760122-8W12M2M6Y0SNP8IK37RN/IMG_9974.jpg', title: 'Green #2', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-04-green-2-in-situ.jpg?v=1793956746' },
  { file: '1738850762517-XTE3GH4GY7T07FXI9L7F/S0400033.jpg', title: 'Green #4', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-05-green-4-in-situ.jpg?v=1793956746' },
  { file: '1738850765000-NW5FYDD1TRFFVURC28LC/S0400036.jpg', title: 'Grey #3', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-06-grey-3-in-situ.jpg?v=1793956747' },
  { file: '1738850767549-BGGKSREDA6KUP8G7LYIN/S0400034.jpg', title: 'Green #3', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-07-green-3-in-situ.jpg?v=1793956750' },
  { file: '1738850770215-ON76ESO4KW0QMY9JAPFO/S0400014.jpg', title: 'Grey #4', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-green-vs-grey-08-grey-4-in-situ.jpg?v=1793956750' },
]

export default function GreenVsGrey() {
  return (
    <CollectionPage
      title="Green vs Grey"
      year="2025"
      pieces={8}
      description="A study in light and structure, abstracting Tokyo's architecture."
      artworks={artworks}
    />
  )
}
