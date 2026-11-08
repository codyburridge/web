'use client'

import Link from 'next/link'
import StarLink from '../components/StarLink'
import { imgUrl } from '../img'

// EDIT: commissioned and editorial work. Deliberately not in the menu; linked quietly from the homepage footer.
// Each line below is one row on the page (one series per line). ar = width / height of the image.
const LOGO = 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/site-36ccec98-077c-482e-9a8e-cf3d20fa0f61-cody-burridge-logo-1000-small.png?v=1793961746&width=400'

const ROWS: { f: string; ar: number }[][] = [
  [{ f: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-the-traitors-celebrity-cast-chapel.jpg?v=1794131935&width=1500', ar: 1.778 }],
  [{ f: 'https://cdn.shopify.com/s/files/1/1093/5432/0212/files/cody-burridge-the-traitors-celebrity-cast-curtain.jpg?v=1794131940&width=1500', ar: 1.826 }],
  [{ f: '8feced84-7945-4714-9a2b-788ddae5317b/BBC-OOH-Traitors_FINRetouch_48_Green_Logo+2500+pix.jpg', ar: 2.0 }],
  [{ f: '1738857810815-4VU5QV28H7PRXGK21IUM/LUCID_DREAMS_ROCKINGHORSE_CMYK.jpg', ar: 1.554 }],
  [{ f: 'b379213e-33a1-45be-99cc-c2cb8b9b30c3/Traitors+S4+Group+16-9_V12+2500+pix.jpg', ar: 1.775 }],
  [{ f: '1738857838974-DJAPN0IFE62BMBOIMIFT/Hero+5cGreyCropGlassFlata.jpg', ar: 1.734 }, { f: '1775656251256-2KOY127KPSRBKX3YVHE9/Hero+1aSimpleGlassFlat.jpg', ar: 1.796 }],
  [{ f: '1775656145375-RBKOIIU55RR42BYKIRD2/Step+shot+7+GradeFlat.jpg', ar: 1.571 }],
  [{ f: '1738857864011-YQ3LQOVK17PKVRN95UPW/CodyBurridge_Tatiana_001.jpg', ar: 0.719 }, { f: '1738857865304-4KO9FT1BPKN3U0O1NV6Z/CodyBurridge_Tatiana_002.jpg', ar: 0.796 }, { f: '1738857866508-1C3XPCL000VLBFJRLPU4/CodyBurridge_Tatiana_003.jpg', ar: 0.743 }],
  [{ f: '1775656011919-D89FZ2CXAQCRDL7IJS68/Cody+Burridge_Esquire_Cabinets-3.jpg', ar: 1.456 }, { f: '1775656023319-PGSEC9SFWHRT374W94DW/Cody+Burridge_Esquire_Cabinets-5.jpg', ar: 1.449 }, { f: '1775656033463-2D22SFAOGXUHXKGFCO9Z/Cody+Burridge_Esquire_Cabinets-1.jpg', ar: 1.478 }],
  [{ f: '421079c4-04f1-44ff-8492-6adde72b6b40/Group+Shot_2500+pix.jpg', ar: 1.786 }],
  [{ f: '49c16df3-1444-4d00-8ae5-f7f4f3debcc6/_C9A7441CB+Flat+Fin.jpg', ar: 1.5 }],
  [{ f: '1738857881005-QBUEAJ7ZIT7UV9WL5AIO/Shot+2+Flat.jpg', ar: 1.333 }],
  [{ f: '1775655759812-I74Y2U07WHKQS2N7ZMP1/Stylist_Mag+114950-1CB+New.jpg', ar: 1.261 }],
  [{ f: 'a9578f12-a30a-4b4b-aa83-e1eeee597a8e/Rosemarywater+Secret+and+Back.jpg', ar: 3.093 }],
  [{ f: '1738857895581-NPI5GSXC7PNUNRAL6DHU/CodyBurridge_Esquire_Sparks_001.jpg', ar: 1.456 }],
  [{ f: 'be802165-b8e4-4b07-b6ae-25e4b48d0f33/_H6R8390CBFin.jpg', ar: 1.5 }],
  [{ f: '613a5197-1195-407f-8434-a951ac8394e5/A24041_ELVIS_ANGELS_ALL_AXE_6SHT+copy.jpg', ar: 2.041 }],
  [{ f: '0083f196-c6c3-4c9f-a5c3-06398d48e15f/Lab_Shot_1+Book.jpg', ar: 1.449 }],
  [{ f: '1738857904587-VJ2547MT4F8ZANHEOWCC/CodyBurridge_Esquire_Monacco_004.jpg', ar: 1.435 }, { f: '1738857902014-NCW4G9ZVJ639GMABXH9W/CodyBurridge_Esquire_Monacco_001-2.jpg', ar: 0.798 }, { f: '1738857903303-BQ45N8T4HAYM82OS7GHH/CodyBurridge_Esquire_Monacco_002-2.jpg', ar: 0.761 }, { f: '1738857905883-99W8HRIUR643XJP0QO22/CodyBurridge_Esquire_Monacco_005.jpg', ar: 0.855 }],
  [{ f: '1775656636859-YP2KCA8NX2M6B9LQ5P7S/64000001a.jpg', ar: 0.815 }, { f: '1775656637400-9G2VC63IJUZ4P8QGQBZ2/63990005a.jpg', ar: 0.815 }],
  [{ f: '1738857925457-R3AZKRAHY7Y5LOCLSC8E/Girl_Room_Table.jpg', ar: 1.24 }],
]

export default function EditPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: '#111111', fontFamily: "'Poppins', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100, height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      }}>
        <Link href="/collections" aria-label="Collections"><img src={LOGO} alt="Cody Burridge" style={{ height: '38px', width: 'auto', display: 'block' }} /></Link>
      </header>

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px 96px' }}>
        <h1 style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 700, textTransform: 'uppercase',
          fontSize: 'clamp(40px, 7vw, 88px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: '56px',
        }}>Edit</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 40px)' }}>
          {ROWS.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: 'clamp(8px, 1.4vw, 16px)' }}>
              {row.map(img => (
                <div key={img.f} style={{ flex: `${img.ar} 1 0`, minWidth: 0 }}>
                  <img
                    src={imgUrl(img.f)}
                    alt=""
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ width: '100%', height: 'auto', aspectRatio: `${img.ar}`, objectFit: 'cover', display: 'block', background: '#f8f7f5' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>

      <footer style={{ padding: '40px 24px 56px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <StarLink />
        <Link href="/collections" style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#888', textDecoration: 'none' }}>Collections</Link>
      </footer>
    </div>
  )
}
