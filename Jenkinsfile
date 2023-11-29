pipeline {
  environment {
    repo = "bipzip/merocv-react"
  }
  agent any
  stages {
    stage('Docker Build') {
      steps {
        sh 'docker build -t $repo:v$BUILD_NUMBER .'
      }
    }
    stage('Docker Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'User', passwordVariable: 'Password')]) {
          sh "docker login -u ${env.User} -p ${env.Password}"
          sh 'docker push $repo:v$BUILD_NUMBER'
        }
      }
    }
    stage('Clean docker image') {
      steps {
        sh 'docker rmi $repo:v$BUILD_NUMBER'
      }
    }
    stage('Run Docker Container') {
    steps {
        script {
             sh "docker run -d -p 3000:3000 $repo:v$BUILD_NUMBER"
        }
    }
}
  }
}
