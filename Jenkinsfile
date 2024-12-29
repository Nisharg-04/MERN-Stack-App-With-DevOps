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
                    code_checkout("https://github.com/LondheShubham153/Wanderlust-Mega-Project.git","main")
                }
            }
        }
        
        stage('') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
