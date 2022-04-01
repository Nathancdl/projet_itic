import Vue from 'vue';

Vue.filter('truncate', (value, length = 88, suffix = '...') => {
    if (value.length > length) {
        return `${value.substring(0, length) + suffix}`
    } else {
        return value;
    }
})

Vue.filter('formatThumbnailNews', (url) => {
    if(url && url.indexOf('&pid')) {
        const data = url.split('&pid');
        return data[0];
    }
});