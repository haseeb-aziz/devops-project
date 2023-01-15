pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("nodeapp:latest")
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "dockerhub") {
                        docker.image("nodeapp:latest").push("latest")
                    }
                }
            }
        }
    }
}
