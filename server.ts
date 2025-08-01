import app from "./src/app";
import { config } from "./src/config/config"

const startServer = () => {

    const port = config.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server listing on port: ${port}`)
    })
}


startServer()