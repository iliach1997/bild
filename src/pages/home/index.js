import { withAuthProtection } from '../../hoc/withAuthProtection'
import { Home } from './Home'

export default withAuthProtection(Home)