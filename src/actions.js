export function updateTitle() {
    return (dispatch) => {
        const action = {
            type: "UPDATE_TITLE",
            result: {
                title: "World War Declared"
            }
        };

        dispatch(action);
    };
}

export function fetchArticle() {
    return {
        type: "FETCH_ARTICLE",
        promise: fetch("/some/article")
    };
}
