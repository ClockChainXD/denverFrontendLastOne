import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DenverSwap',
  description:
    'The most popular AMM on BSC by user count! Earn DNR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by DenverSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DenverSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DenverSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DenverSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DenverSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DenverSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DenverSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('DenverSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DenverSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DenverSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('DenverSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('DenverSwap')}`,
      }
    default:
      return null
  }
}
