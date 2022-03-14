import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import banner from "./banners/banner1.png";
import ContentComments from "../components/Comments/content";

const Comments = () => {
    return (
        <div className="content">
            <ContentComments/>
        </div>
    );
};

export default Comments;
