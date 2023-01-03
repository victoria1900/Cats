export interface Cat {
    id: string,
    url: string,
    width: null | number,
    height: null | number,
}
export interface CatState {
    cats: Cat[],
    isLoading: boolean,
    error: string,
}