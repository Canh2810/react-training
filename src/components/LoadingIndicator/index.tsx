import { CircularProgress } from '../'
import './index.css'

const LoadingIndicator = () => (
  <div className="loading__overlay" data-testid="loading-indicator">
    <CircularProgress />
  </div>
)

export default LoadingIndicator
