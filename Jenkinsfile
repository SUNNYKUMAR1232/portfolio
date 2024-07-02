pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod -R +rwx ./jenkins/script/deliver.sh'
                sh 'chmod -R +rwx ./jenkins/script/kill.sh'
                sh './jenkins/script/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/script/kill.sh'
            }
        }
    }
}
