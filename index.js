// 1.0
module.exports = function NoArtisanIcons(dispatch) {
    dispatch.hook('S_SPAWN_USER', 5, (event) => {
        event.icons = [];
        return true;
    })
}