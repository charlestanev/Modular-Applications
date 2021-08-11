let _router = undefined;
let _renderHandler = undefined;

function initialize(router, renderHandler) {
    _router = router;
    _renderHandler = renderHandler;
}

async function getView(context, next) {
    let viewModel = {
        isLoggedIn
    }
    let templateResult = navTemplate();
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}