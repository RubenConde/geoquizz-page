import series from './mixins/series'
import photos from './mixins/photos'
import difficulties from './mixins/difficulties'
import users from './mixins/users'
import games from './mixins/games'

export default {
    mixins: [series, photos, difficulties, users, games],
    methods: {
        animateCSS(element, animationName, callback) {
            const node = document.querySelector(element);
            node.classList.add('animated', animationName);

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName);
                node.removeEventListener('animationend', handleAnimationEnd);

                if (typeof callback === 'function') callback()
            }

            node.addEventListener('animationend', handleAnimationEnd)
        }
    }
}