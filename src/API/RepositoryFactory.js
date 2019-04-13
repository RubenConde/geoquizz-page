import gamesRepository from './gamesRepository';
import usersRepository from './usersRepository';
import difficultiesRepository from './difficultiesRepository';
import photosRepository from './photosRepository';
import seriesRepository from './seriesRepository';

const repositories = {
    games: gamesRepository,
    users: usersRepository,
    difficulties: difficultiesRepository,
    series: seriesRepository,
    photos: photosRepository,
    //other repositories
};

export const RepositoryFactory = {
    get: name => repositories[name]
};