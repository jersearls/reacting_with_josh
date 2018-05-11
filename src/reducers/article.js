const defaultArticleState = {
  title: "World Peace Declared",
  author: "Jerry",
  publishedOn: null
};

//reducer, provided with default state above
export function article(state = defaultArticleState, action) {
  switch(action.type) {
    case "UPDATE_TITLE":
        return {
        ...state,
        title: action.result.title
        };

    case "PUBLISH_ARTICLE":
        return {
            ...state,
            publishedOn: Date.now()
        };

    default:
        return state;
  }
}
