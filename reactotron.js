import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
    .configure({ host: '192.168.0.81' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

export default reactotron;