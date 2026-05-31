import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition : {
        openapi : "3.0.0", 
        info : {
            title : "API UnaHur - Anti-Social net", 
            version : "1.0.0", 
            description: "Documentacion de la api para el trabajo practico de la red social", 
        }, 
        server : [
            {
                url : "http://localhost:3000", 
                description : "Servidor Local"
            }
        ], 
    },
    apis : ["./src/routes/*.js"],
}

export const swaggerSpec = swaggerJSDoc(options); 
