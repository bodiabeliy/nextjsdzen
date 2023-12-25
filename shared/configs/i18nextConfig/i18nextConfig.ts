import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps({ locale }:any) {
//     console.log("current locale", locale);
    
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'products',
//       ], null, ['en', 'ua'])),
//       // Will be passed to the page component as props
//     },
//   }
// }