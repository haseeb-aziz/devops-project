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
                    withDockerRegistry(credentialsId: 'dockerhub-token') {
                    sh "docker push haseebaziz115/nodeapp:latest"
                    }
                }
            }
        }
    }
}
