import './App.css';
import {getAllStudents} from './client';
import {Component} from 'react';
import Container from './container';
import { Avatar, DatePicker } from 'antd';
import {
  Table,Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

/**
 * Main App component that displays a table of student data
 * Fetches student information from the backend API and renders it using Ant Design Table
 */
class App extends Component {
  // Initialize state with empty students array
  state = {
    students: [],
    isFetching: false
  }

  /**
   * Lifecycle method called after component mounts
   * Triggers the initial API call to fetch student data
   */
  componentDidMount() {
    this.fetchAllStudents();
  }

  /**
   * Fetches all students from the backend API
   * Makes GET request to /students endpoint and updates component state with the response
   * Includes a 5-second delay to simulate loading time
   */
  fetchAllStudents = () => {
    this.setState({isFetching: true});
    getAllStudents()
      .then(res => res.json()) // Parse JSON response
      .then(data => {
        console.log('Data received:', data);
        // Add 5-second delay before displaying the data
        setTimeout(() => {
          this.setState({students: data,
             isFetching: false}); // Update state with fetched student data
        }, 3000);
      })
      .catch(err => {
        console.error('Error:', err);
        this.setState({isFetching: false});
      }); // Log any errors that occur
  }


  

  /**
   * Renders the component UI
   * Shows loading message if no data, otherwise displays student table
   */
  render() {
      const antIcon = <LoadingOutlined style={{ fontSize: 24 , color: '#be6416ff'}} spin />;
      const {students, isFetching} = this.state; // Destructure students and isFetching from state
      // Define table column configuration
      if(isFetching){
      return (
        <Container style = {{ paddingTop : '200px'}}>
          <Spin indicator={antIcon}> </Spin>
        </Container>
      );
    }
      const columns = [
        {
          title:'',
          key:'avatar',
          render:(text,student) => (
            <Avatar size = 'large' >
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastname.charAt(0).toUpperCase()}`}
            </Avatar> 
          )
        },
        {
          title: "Student ID",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName" // based on the data field name which we have mention in our backend
        },
        {
          title: "Last Name",
          dataIndex: "lastname",
          key: "lastname"
        },
        {
          title: "Gender",
          dataIndex: "gender",
          key: "gender"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
        }
      ];

      // Check if students data is empty or not yet loaded
      if (!students || students.length === 0) {
        return <h1>Hello Guys - Loading...</h1>
      }

      // Render the student data table
      return (
        <Container>
          <Table
            dataSource={students}    // Pass student data to the table
            columns={columns}         // Define which columns to display
            pagination={false}        // Disable pagination
            rowKey="id" />           {/* Use 'id' field as unique key for each row */}
        </Container>
      );
  }
}

export default App;
