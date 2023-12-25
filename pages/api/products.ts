import type { GetStaticProps, NextApiRequest, NextApiResponse } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
 
 
export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${process.env._FAKE_DB_CONNECT}/products`)
  const data = await response.json()
  res.status(200).json(data)
}

export async function getStaticProps({ locale }:any) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'products',
        ])),
        // Will be passed to the page component as props
      },
    }
  }