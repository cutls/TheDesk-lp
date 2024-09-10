export const getUrlParams = (url) => {
    const seatchString = url ? new URL(url).search : location.search;
    if (seatchString === '')
        return {};
    return seatchString
        .substring(1)
        .split('&')
        .reduce((result, query) => {
        const [k, v] = query.split('=');
        result[k] = decodeURIComponent(v);
        return result;
    }, {});
};
