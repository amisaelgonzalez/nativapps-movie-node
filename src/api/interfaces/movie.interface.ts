export interface Movie {
  id: number,
  title: string,
  year: string,
  type: string,
  poster: string,
  imdbID: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date,
}