import './index.scss'
const Icon = ({type}) =>{
    return (
        <img
            className="icon"
            src={`https://billtracking-yg-jeff.s3.us-east-2.amazonaws.com/${type}.svg`}
            alt="icon"
            
        />
       
    )
}
export default Icon