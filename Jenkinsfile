@Library('Shared') _
pipeline {
    agent any
    environment{
        SONAR_HOME = tool "Sonar"
    }

    stages {
        
        stage("Workspace cleanup"){
            steps{
                cleanWs()
            }
        }
        
        stage('Git: Code Checkout') {
            steps {
                script{
                    code_checkout("https://github.com/Nisharg-04/LoginApp.git","main")
                }
            }
        }

        stage("Trivy: Filesystem scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }

        stage("SonarQube: Code Analysis"){
            steps{
                script{
                    sonarqube_analysis("Sonar","Loginapp","Loginapp")
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker compose up -d --build'
                }
            }
        }    
    }
}
