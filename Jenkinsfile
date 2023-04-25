pipeline {
    agent any
    environment {
        PORT = "85"
        DOCKERHUB_CREDENTIAL_ID = "dockerhub"
        IMAGE_NAME = "himanibisht/devops-project"
        CONTAINER_NAME = "devops-project"
        GIT_REPO = "https://github.com/Himani1608/Todo-list-app.git"
        GIT_BRANCH = "main"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
            }
        }
        stage('Build') {
            steps {
                script {
                    sh "sudo docker build . -t myapp"
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                sh "sudo docker run -it -p 187:80 -d myapp"
            }
        }
    }
}
