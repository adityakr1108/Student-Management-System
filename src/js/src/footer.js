import Container from './container';
import {Avatar, Button} from 'antd';
import './footer.css';
const Footer = (props) => {
    const numberOfStudents = props.numberOfStudents || ''; // Default to an empty string if undefined

    return (
        <div className="footer">
            <Container>
                {numberOfStudents ? (
                    <Avatar style={{ backgroundColor: '#f56a00', marginRight: '5px' }} size='large'>
                        {numberOfStudents}
                    </Avatar>
                ) : null}
                <Button onClick={() => props.handleAddStudentClickEvent()} type='primary'>Add a new student +</Button>
            </Container>
        </div>
    );
};

export default Footer;