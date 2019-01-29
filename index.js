module.exports = function NoArtisanIcons(mod) {
    mod.hook('S_SPAWN_USER', 14, (event) => {
        event.icons = [];
        return true;
    })
}