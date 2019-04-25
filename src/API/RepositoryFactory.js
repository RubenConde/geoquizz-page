import gamesRepository from './repositories/games';
import usersRepository from './repositories/users';
import difficultiesRepository from './repositories/difficulties';
import photosRepository from './repositories/photos';
import seriesRepository from './repositories/series';
import cloudinaryRepository from './repositories/cloudinary';

const repositories = {
    games: gamesRepository,
    users: usersRepository,
    difficulties: difficultiesRepository,
    series: seriesRepository,
    photos: photosRepository,
    cloudinary: cloudinaryRepository
    //other repositories
};

export const RepositoryFactory = {
    get: name => repositories[name]
};