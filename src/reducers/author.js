const defaultAuthorState = {
    articlesPublished: 0
};

export function author(state = defaultAuthorState, action) {
    switch(action.type) {
        case "PUBLISH_ARTICLE":
            return {
                ...state,
                articlesPublished: state.articlesPublished + 1
            };

        default:
            return state;
    }
}
