export interface ICat {
    id: string,
    url: string
}

export interface CatState {
    cats: ICat[],
    favorites: string[],
    isLoading: boolean,
    error: string,
}