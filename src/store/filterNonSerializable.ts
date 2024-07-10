import { createTransform } from 'redux-persist'

export interface RootState {
  nonSerializablePart?: any
  serializablePart: SerializableStatePart
}

export interface SerializableStatePart {
  [key: string]: any
}

export const filterNonSerializable = createTransform<RootState, RootState>(
  inboundState => {
    if (inboundState) {
      const { nonSerializablePart, ...serializableState } = inboundState
      return serializableState as RootState
    }
    return inboundState
  },
  outboundState => outboundState
)

 filterNonSerializable
