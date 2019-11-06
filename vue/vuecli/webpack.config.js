// webpack 설정
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    mode: 'development', // vue에서 개발자 도구 쓰게 해줌 
    // 여러개의 파일을 읽어오기
    entry: {
        app: path.join(__dirname, 'src', 'main.js') // src에 있는 main.js
    },
    // 관련된 모듈
    module: {
        rules: [
            {
                test: /\.vue$/, // .vue 확장자는
                use: 'vue-loader', // 모두 vue-loader로 번역을 해라
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin() // vue loader가 가지고 있는 plugin을 불러오겠다.
    ],
    // 최종 결과 (.js)
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist') // 결과를 이 경로로 던져줘!
    }
}