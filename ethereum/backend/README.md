# Docker commands
To create a dev container, run:
```
docker run -it -p 3000:3000 -v ${pwd}:/app --name web3app_container web3app /bin/bash
```
To start and connect to a container, run:
```
docker start web3app_container
docker exec -it web3app_container /bin/bash
```
# Environment variables to be defined
PROVIDER
PORT