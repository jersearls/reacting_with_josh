export function createMiddleware() {
    return () => next => action => {
        console.log(action);

        if (action.promise) {
            return action.promise
                .then((result) => {
                    next({
                        type: action.type,
                        result
                    });
                });
        }

        return next(action);
    };
}

/*
function authMiddleware(req, res, next) {
    req.locals.user = someUser;

    next();
}

function authRedux() {
    return () => next => (req, res) => {

    }
}

const app = express();

app.use(authMiddleware);

app.get("/restricted", (req, res) => {
    if (req.locals.user == null) {
        return res.status(401).send("No can do cowboy!");
    }

    return res.send(TheRealData);
});
*/
