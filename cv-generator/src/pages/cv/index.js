import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    bgImage: state.bgImage,
    avatarImage: state.avatarImage,
})

const mapDispatchToProps = () => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(View)