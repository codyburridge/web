import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg', title: 'Off Grid', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-01-off-grid-in-situ.jpg?v=1793956731' },
  { file: '1775464294801-S5NO3WPGV5HYBG8UOTM4/Pool+Corner+1+Original+New.JPG', title: 'Pool Corner 1', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-02-pool-corner-1-in-situ.jpg?v=1793956732' },
  { file: '1775464481849-EZH9ZUMFNCU8CMRK54LU/Yellow+Sweep+Original.JPG', title: 'Yellow Sweep', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-03-yellow-sweep-in-situ.jpg?v=1793956732' },
  { file: '1775464301228-NN7QHHTUPGBRB4XQZD5W/Going+Home+Original.jpeg', title: 'Going Home', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-04-going-home-in-situ.jpg?v=1793956732' },
  { file: '1775578047715-T9F6HFT1BX7CQX3HLCCP/Kate%27s+Brother+Light+Original.jpeg', title: "Kate's Brother Light", insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-05-kate-s-brother-light-in-situ.jpg?v=1793956732' },
  { file: '1775464413254-RNEEWK9DJN9V3TS742NE/Just+Leaving+Original.jpeg', title: 'Just Leaving', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-a-different-view-06-just-leaving-in-situ.jpg?v=1793956732' },
]

export default function ADifferentView() {
  return (
    <CollectionPage
      title="A Different View"
      year="2025"
      pieces={6}
      description="Studies of colour, shape and light in the everyday."
      artworks={artworks}
      heroBgFile="1775464457183-UFBVCV0TEXOFGIZHX6TG/Off+Grid+Original.jpeg"
    />
  )
}
