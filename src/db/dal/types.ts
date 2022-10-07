interface ListFilters {
    isDeleted?: boolean,
    includeDeleted?: boolean
}

export interface PaginateMoviesFilters extends ListFilters {
    isTypeMovie?: boolean,
    isTypeSeries?: boolean,
    isTypeEpisode?: boolean,
    page?: number
}