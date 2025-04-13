export class MovieNotFoundError extends Error {
  constructor(movieId: string) {
    super(`Movie with id ${movieId} not found`);
    this.name = "MovieNotFoundError";
  }
}

export class MovieAlreadyExistsError extends Error {
  constructor(movieTitle: string) {
    super(`Movie with title ${movieTitle} already exists`);
    this.name = "MovieAlreadyExistsError";
  }
}

export class MovieMinimumAgeError extends Error {
  constructor(movieTitle: string, minimumAge: number) {
    super(`Movie with title ${movieTitle} has a minimum age of ${minimumAge}`);
    this.name = "MovieMinimumAgeError";
  }
}

export class MovieMaximumAgeError extends Error {
  constructor(movieTitle: string, maximumAge: number) {
    super(`Movie with title ${movieTitle} has a maximum age of ${maximumAge}`);
    this.name = "MovieMaximumAgeError";
  }
}