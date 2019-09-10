import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    bgImage: state.bgImage,
    avatarImage: state.avatarImage,
    name: state.name,
    job: state.job
})

const mapDispatchToProps = () => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(View)