import series from './mixins/series'
import photos from './mixins/photos'
import difficulties from './mixins/difficulties'
import users from './mixins/users'
import games from './mixins/games'

export default {
    mixins: [series, photos, difficulties, users, games]
}