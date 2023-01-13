export interface Cat {
    id: string,
    url: string
}

export interface CatState {
    cats: Cat[],
    favorites: Cat[],
    isLoading: boolean,
    currentPage: number,
    error: string,
}

export interface ICatCardProps {
    cat: Cat
}