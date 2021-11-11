import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>LOL..!!</h2>
            <p>Page Doesn't Exist Bro</p>
            <Link to ='/'>Back to Home Bro...</Link>
        </div>
    );
}
 
export default NotFound;