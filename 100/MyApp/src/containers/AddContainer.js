import AddComponent from "../components/components/AddComponent"
import { addNewTask } from "../actions"
import { connect } from "react-redux"


const mapStateToProps = state => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onClickAdd:(inputTaskName)=>{
            dispatch(addNewTask(inputTaskName));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);