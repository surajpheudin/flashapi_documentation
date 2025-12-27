import { CodeBlock } from '../CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';



export function Examples() {
        const basicServerCode = `#[tokio::main]
async fn main() {
    let mut server = HttpServer::new().with_state(());

    server.get(String::from("/user"), get_handler);
    server.post(String::from("/user"), post_handler);

    let _ = server.listen(Some(8000)).await;
}`;

        const simpleRequestCode = `async fn get_handler(_: Request, mut response: Response, _state: Arc<()>) {
    tokio::time::sleep(std::time::Duration::from_secs(1)).await;

    response.send(HttpStatus::Ok, "Data fetched successfully", "text/plain").await;
}`;

        const jsonResponseCode = `#[derive(serde::Serialize)]
struct User {
    name: String,
}

async fn get_handler(_: Request, mut response: Response, _state: Arc<()>) {
    tokio::time::sleep(std::time::Duration::from_secs(1)).await;

    let user = User {
        name: String::from("Flash API"),
    };

    response.send_json(HttpStatus::Ok, &user).await;
}`;

        const validationCode = `async fn post_handler(request: Request, mut response: Response, _state: Arc<()>) {

    if let None = request.headers.get("Authorization") {
        response.send(HttpStatus::UNAUTHORIZED, "Unauthorized", "text/plain").await;
    }

    if let None = request.body {
        response.send(HttpStatus::BadRequest, "No body found", "text/plain").await;
    }

    response.send_json(HttpStatus::Ok, &request.body).await;
}`;

        const databaseCode = `use flashapi::{HttpServer, HttpStatus, Request, Response};
use serde::Serialize;
use sqlx::{Pool, Postgres, postgres::PgPoolOptions, prelude::FromRow};
use std::sync::Arc;

struct AppState {
    db: Arc<Pool<Postgres>>,
}

#[tokio::main]
async fn main() {
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect("postgres://postgres:password@localhost/test")
        .await;

    if let Ok(pool) = pool {
        let app_state = AppState { db: Arc::new(pool) };

        let mut server = HttpServer::new().with_state(app_state);

        server.get(String::from("/user"), get_handler);

        let _ = server.listen(8000).await;
    } else {
        println!("Failed to connect to the database");
    }
}

#[derive(FromRow, Serialize)]
struct Deployment {
    name: String,
}

async fn get_handler(_: Request, mut response: Response, state: Arc<AppState>) {
    let rows: Vec<Deployment> = sqlx::query_as("SELECT * FROM deployment")
        .fetch_all(&*state.db)
        .await
        .unwrap();

    response.send_json(HttpStatus::Ok, &rows).await;
}`;

        return (
                <section id="examples" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-muted/30">
                        <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-8 sm:mb-12">
                                        <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4">Examples</h2>
                                        <p className="text-muted-foreground text-sm sm:text-base px-4">
                                                Learn by example with common use cases
                                        </p>
                                </div>

                                <Tabs defaultValue="basic" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6 sm:mb-8 h-auto">
                                                <TabsTrigger value="basic" className="text-xs sm:text-sm py-2 sm:py-2.5">Basic Server</TabsTrigger>
                                                <TabsTrigger value="simple" className="text-xs sm:text-sm py-2 sm:py-2.5">Simple Request</TabsTrigger>
                                                <TabsTrigger value="json" className="text-xs sm:text-sm py-2 sm:py-2.5">JSON Response</TabsTrigger>
                                                <TabsTrigger value="validation" className="text-xs sm:text-sm py-2 sm:py-2.5">Validation</TabsTrigger>
                                                <TabsTrigger value="database" className="text-xs sm:text-sm py-2 sm:py-2.5">Database</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="basic" className="space-y-3 sm:space-y-4">
                                                <h3 className="text-lg sm:text-xl">Start Server and Register Routes</h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">Create a new HTTP server and register GET and POST handlers.</p>
                                                <CodeBlock code={basicServerCode} language="rust" />
                                        </TabsContent>

                                        <TabsContent value="simple" className="space-y-3 sm:space-y-4">
                                                <h3 className="text-lg sm:text-xl">Simple Request Handler</h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">Handle a basic request and send a text response.</p>
                                                <CodeBlock code={simpleRequestCode} language="rust" />
                                        </TabsContent>

                                        <TabsContent value="json" className="space-y-3 sm:space-y-4">
                                                <h3 className="text-lg sm:text-xl">Return JSON Response</h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">Serialize and return JSON data using serde.</p>
                                                <CodeBlock code={jsonResponseCode} language="rust" />
                                        </TabsContent>

                                        <TabsContent value="validation" className="space-y-3 sm:space-y-4">
                                                <h3 className="text-lg sm:text-xl">Basic Validations</h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">Validate request headers and body before processing.</p>
                                                <CodeBlock code={validationCode} language="rust" />
                                        </TabsContent>

                                        <TabsContent value="database" className="space-y-3 sm:space-y-4">
                                                <h3 className="text-lg sm:text-xl">Using with Database</h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">Integrate with PostgreSQL using SQLx for database operations.</p>
                                                <CodeBlock code={databaseCode} language="rust" />
                                        </TabsContent>
                                </Tabs>
                        </div>
                </section>
        );
}

