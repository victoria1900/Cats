export interface Cat {
    id: string,
    url: string
}

export interface CatState {
    cats: Cat[],
    favorites: string[],
    isLoading: boolean,
    error: string,
}