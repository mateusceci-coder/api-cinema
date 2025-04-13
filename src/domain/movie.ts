export interface CreateMovieParams {
  title: string;
  description: string;
  minimumAge?: number;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
