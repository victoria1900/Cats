export interface Cat {
    id: string,
    url: string
}
export interface CatState {
    cats: Cat[],
    isLoading: boolean,
    error: string,
}