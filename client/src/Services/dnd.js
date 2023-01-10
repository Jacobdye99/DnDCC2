import { dndApi } from "./apiConfig";

export const getClasses = async () => {
    const res = await dndApi.get('/classes')
    return res.data
}

export const getRaces = async () => {
    const res = await dndApi.get('/races')
    return res.data
}

export const getAlignments = async () => {
    const res = await dndApi.get('/alignments')
    return res.data
}