
const StageConfigurations = {
    dev: {
        api: {
            baseUrl: 'http://localhost:8080'
        }
    },
    prod: {
        api: {
            baseUrl: 'https://api.reconmap.org'
        }
    },
}

const Configuration = StageConfigurations

export default Configuration;
