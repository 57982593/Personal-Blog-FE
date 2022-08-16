pipeline {
    agent {
        docker {
            image 'node:14.18.2' 
            args '-p 8080:8080' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'node -v'
                sh 'yarn install'
                echo '安装依赖完成'
                sh 'CI=false yarn build'
                echo '打包完成'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t Personal_Blog_FE'
                echo '构建完成'
            }
        }
    }
}