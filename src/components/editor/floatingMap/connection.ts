import { Level } from '../../../models/operation'
import { Message } from '../../../utils/messenger'

export const MAP_SERVER = import.meta.env.VITE_THERESA_SERVER as string

if (!MAP_SERVER) {
  throw new Error('Environment variable VITE_THERESA_SERVER is not defined.')
}

// in the future we may need some conversion on this
export const MAP_ORIGIN = MAP_SERVER

export const getMapUrl = (level: Level) =>
  `${MAP_SERVER}/widget/map/${level.stageId}/scene`

export type MapReadyMessage = Message<'mapReady'>

export type TileClickMessage = Message<
  'tileClick',
  {
    index: number
    width: number
    height: number
    maaLocation: [x: number, y: number]
    tile: IMapDataTiles
  }
>

export type SetMapStateMessage = Message<
  'setMapState',
  { activeTiles: { x: number; y: number }[] }
>

// types defined in Theresa-wiki

export interface IMapDataTiles {
  blackboard: unknown
  buildableType: unknown
  effects: unknown
  heightType: unknown
  passableMask: unknown
  tileKey: string
}
