import { connect } from 'react-redux'
import View from './View'


const mapStateToProps = state => ({
    bgImage: state.bgImage,
    txt: "holaaa"
})

const mapDispatchToProps = () => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(View)