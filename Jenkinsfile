pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from Git
                git branch: 'main', url: 'https://github.com/sneh5119/reactapp.git'
            }
        }    
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
