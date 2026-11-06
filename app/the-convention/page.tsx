import CollectionPage from '../components/CollectionPage'

const artworks = [
  { file: '72b110b9-f74f-4de9-8a9e-ee7a7ef480b2/Fag+Break+FIN+FLAT+copy.jpg', title: 'Fag Break', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-01-fag-break-in-situ.jpg?v=1793956722' },
  { file: 'b864f8cb-9412-4f32-956b-5a5f044749cf/For+Rent+FIN+FLAT.jpg', title: 'For Rent', objPos: 'center 72%', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-02-for-rent-in-situ.jpg?v=1793956722' },
  { file: '8b96c245-f2c0-40aa-8ea1-627ce11e9686/No+Parking+FIN+FLAT.jpg', title: 'No Parking', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-03-no-parking-in-situ.jpg?v=1793956722' },
  { file: '50ef7b9c-cb65-4891-8612-e06598e79a59/Waiting+For+BatMan+FIN+FLAT.jpg', title: 'Waiting For Batman', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-04-waiting-for-batman-in-situ.jpg?v=1793956722' },
  { file: 'e3e4cd8b-091e-43d3-9e40-b8bd7def43a5/I+am+sure+he+said+214+FIN+FLAT.jpg', title: 'I Am Sure He Said 214', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-05-i-am-sure-he-said-214-in-situ.jpg?v=1793956722' },
  { file: '63ef2542-c26d-447e-9282-7600deafeaa6/No+Standing+SQUARE+FIN+FLAT.jpg', title: 'No Standing', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-06-no-standing-in-situ.jpg?v=1793956722' },
  { file: 'b508a63f-7838-4df0-9b16-f66b7f5b9f36/Chained+to+the+Job+FIN+FLAT.jpg', title: 'Chained to the Job', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-07-chained-to-the-job-in-situ.jpg?v=1793956727' },
  { file: '2e37d4e4-ff3c-41b8-b85f-d6c537482679/Stand+Pipe+FIN+FLAT.jpg', title: 'Stand Pipe', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-08-stand-pipe-in-situ.jpg?v=1793956727' },
  { file: '69af5177-c3c9-4344-bbcd-3d8ddaf5d4c7/Lost+Bunny+FIN+FLAT+.jpg', title: 'Lost Bunny', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-09-lost-bunny-in-situ.jpg?v=1793956727' },
  { file: '430bd48c-b119-4a36-8adb-39454e52cadb/Did+you+hear+something%3F+FIN+FLAT.jpg', title: 'Did You Hear Something?', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-10-did-you-hear-something-in-situ.jpg?v=1793956727' },
  { file: 'd3b6cebb-0f9a-47e7-8827-dee669370560/Shadow+of+Doubt+FIN+FLAT.jpg', title: 'Shadow of Doubt', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-11-shadow-of-doubt-in-situ.jpg?v=1793956727' },
  { file: 'cd694742-40a8-46ad-878a-7b55ff1cce32/Delayed+FIN+FLAT.jpg', title: 'Delayed', objPos: 'left center', insitu: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/insitu-convention-walnut-12-delayed-in-situ.jpg?v=1793956727' },
]

export default function TheConvention() {
  return (
    <CollectionPage
      title="The Convention"
      year="2024"
      pieces={12}
      description="Fine art inspired by the Comic-Con phenomenon."
      artworks={artworks}
    />
  )
}
