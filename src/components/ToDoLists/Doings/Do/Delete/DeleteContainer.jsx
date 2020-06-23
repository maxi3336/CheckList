import {connect} from "react-redux";
import Delete from "./Delete";
import {deleteDoActionCreator} from '../../../../../redux/reducers/checkReducer'

const mapStateToProps = () => {return {}}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteDo: () => {
            let action = deleteDoActionCreator(ownProps.listId, ownProps.doId)
            dispatch(action)
        }
    }
}

const DeleteContainer = connect(mapStateToProps, mapDispatchToProps)(Delete)

export default DeleteContainer
