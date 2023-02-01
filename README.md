## Maelstrom - Weather forecast

Having fun with Next.JS and OpenMeteo API

### Local run

`yarn run dev`

### Deployment

`docker build --no-cache -t maelstrom-wf .`

`docker tag maelstrom-wf ghcr.io/<github_name>/maelstrom-wf:0.0.1`

`docker push ghcr.io/<github_name>/maelstrom-wf:0.0.1`

