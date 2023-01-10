export interface ICat {
    id: string,
    url: string
}

export interface CatState {
    cats: ICat[],
    favorites: ICat[],
    isLoading: boolean,
    error: string,
}
export interface ICatCardProps {
    cat: ICat
}