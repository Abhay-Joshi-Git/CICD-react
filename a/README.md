# master branch -
deployment on GCP with cloud run service, build tool is travis
```
dockerfile - defines nginx container image which holds app build
travis.yml - contains configuration for travis to lint, test and deploy
```

# aws branch -
deployment for aws using Dockerrun.aws.json
```
dockerfile - defines nginx container image which holds app build
Dockerrun.aws.json - defines docker container information for AWS EB
```